import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor() { }

  addToFavorites() {
    // TODO: call a service that adds to the fav general counting
  }

  share() {
    // TODO: show sharing window
  }

}
