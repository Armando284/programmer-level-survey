import { EventEmitter, Injectable, inject } from '@angular/core';
import { Firestore, CollectionReference, DocumentReference, addDoc, collection, collectionData, doc, getDoc, onSnapshot, updateDoc, DocumentSnapshot, DocumentData, serverTimestamp, getDocs, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { level } from '../interfaces/types';
import { UserResult } from '../interfaces/user-result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore

  favsDoc: DocumentReference = doc(this.firestore, 'userReactions', 'favs');
  private _favs: number = 0;
  favs$ = new EventEmitter<number>();
  unsubscribeFavs!: ReturnType<typeof onSnapshot>;

  resultsCollection: CollectionReference = collection(this.firestore, 'userResults');
  results$ = new EventEmitter<UserResult[]>();
  private _userResults: UserResult[] = [];

  constructor() {
    this.getFavs();
    this.getUserResults();
  }

  ngOnDestroy() {
    this.unsubscribeFavs();
  }

  //#region FAVS

  private getFavs(): void {
    // Get from cache
    this.favs = parseInt(localStorage.getItem('favs') || '0');

    // Get existing db data so it doesn't depend on a change
    const unwrapFavs = (doc: DocumentSnapshot<DocumentData>) => {
      const data = doc.data();
      if (!data) throw new Error('DB favourites is empty or didn\'t respond');
      this.favs = data?.['amount'];
      this.updateFavsCache(this.favs);
    };
    getDoc(this.favsDoc).then(unwrapFavs);

    // subscribe to changes
    this.unsubscribeFavs = onSnapshot(this.favsDoc, unwrapFavs);
  }

  private updateFavsCache(amount: number): void {
    localStorage.setItem('favs', amount.toString());
  }

  get favs(): number {
    return this._favs;
  }

  set favs(amount) {
    this._favs = amount > 0 ? amount : 0;
    this.favs$.emit(this._favs);
  }

  private async updateFavs(amount: number): Promise<void> {
    this.updateFavsCache(amount);
    await updateDoc(this.favsDoc, {
      amount: amount,
      updateAt: serverTimestamp()
    });
  }

  addFav(): void {
    this.updateFavs(++this.favs);
  }

  restFav(): void {
    this.updateFavs(--this.favs);
  }

  //#endregion

  //#region RESULTS

  get userResults(): UserResult[] {
    return this._userResults;
  }

  set userResults(results: UserResult[]) {
    this._userResults = results;
    this.results$.emit(this._userResults);
  }

  async saveUserResults(level: level): Promise<void> {
    await addDoc(this.resultsCollection, <UserResult>{ level, createdAt: serverTimestamp() });
  }

  async getUserResults() {
    this.userResults = JSON.parse(localStorage.getItem('results') || '[]');

    const querySnapshot = await getDocs(this.resultsCollection);
    const results: any[] = [];

    querySnapshot.forEach((doc) => {
      results.push(doc.data());
    });

    // Validate if data was retrieved && parse it && update cache
    if (results.length > 0) {
      this.userResults = results.map<UserResult>(result => {
        const timestamp = new Timestamp(result.createdAt.seconds, result.createdAt.nanoseconds);
        return {
          level: result.level,
          createdAt: timestamp.toDate().toLocaleDateString(),
        };
      });
      localStorage.setItem('results', JSON.stringify(this.userResults));
    }
  }

  async seed() {
    if (environment.production) return;

    const createRandomLevel = () => {
      const levels: level[] = ['beginner', 'junior', 'semi-senior', 'senior'];
      return levels[Math.floor(Math.random() * levels.length)];
    }

    const createRandomDate = () => {
      const today = new Date().getDate();
      const randomDay = Math.ceil(Math.random() * today - 1);
      const date = new Date(2023, 8, randomDay);
      return date;
    }

    const results: level[] = Array.from({ length: 103 }, () => createRandomLevel());

    results.forEach(async (res) => {
      await addDoc(this.resultsCollection, <UserResult>{ level: res, createdAt: Timestamp.fromDate(createRandomDate()) });
    });

    console.info('Seed finished');
  }

  //#endregion
}
