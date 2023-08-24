import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, CollectionReference, DocumentReference, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  users$!: Observable<UserFab[]>;
  usersCollection!: CollectionReference;
  userFabs: number = 0;

  constructor() {
    // get a reference to the user-profile collection
    const userProfileCollection = collection(this.firestore, 'userFab');

    // get documents (data) from the collection using collectionData
    this.users$ = collectionData(userProfileCollection) as Observable<UserFab[]>;
  }

  addToFavorites() {
    const amount = this.userFabs++;
    // TODO: call a service that adds to the fav general counting
    addDoc(this.usersCollection, <UserFab>{ amount }).then((documentReference: DocumentReference) => {
      // the documentReference provides access to the newly created document
    });
  }

  share() {
    // TODO: show sharing window
  }

}

export interface UserFab {
  amount: number;
}
