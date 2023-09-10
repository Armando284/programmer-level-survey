import { EventEmitter, Injectable, inject } from '@angular/core';
import { Firestore, CollectionReference, DocumentReference, addDoc, collection, collectionData, doc, getDoc, onSnapshot, updateDoc, DocumentSnapshot, DocumentData, serverTimestamp, getDocs, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { level } from '../interfaces/types';
import { UserResult } from '../interfaces/user-result';

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

  constructor() {
    this.getFavs();
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

  saveUserResults(level: level): void {
    addDoc(this.resultsCollection, <UserResult>{ level, createdAt: serverTimestamp() }).then((documentReference: DocumentReference) => {
      console.log('saved:', documentReference);
    });
  }

  async getUserResults() {
    let userResults: UserResult[] = JSON.parse(localStorage.getItem('results') || '[]');

    const querySnapshot = await getDocs(this.resultsCollection);
    const results: any[] = [];

    querySnapshot.forEach((doc) => {
      results.push(doc.data());
    });

    // Validate if data was retrieved && parse it && update cache
    if (results.length > 0) {
      userResults = results.map<UserResult>(result => {
        const timestamp = new Timestamp(result.createdAt.seconds, result.createdAt.nanoseconds);
        return {
          level: result.level,
          createdAt: timestamp.toDate(),
        };
      });
      localStorage.setItem('results', JSON.stringify(userResults));
    }

    console.log('results: ', userResults);
    return userResults;
  }

  //#endregion
}
