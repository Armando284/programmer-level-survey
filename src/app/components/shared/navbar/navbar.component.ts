import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isFav: boolean = false;

  constructor(
    private _db: DbService
  ) {
    this.isFav = localStorage.getItem('isFav') === 'true';
  }

  get color(): ThemePalette | 'white' {
    if (this.isFav) return 'warn';
    return 'white';
  }

  toggleFavorites() {
    this.isFav = !this.isFav;
    this.isFav ?
      this._db.addFav() :
      this._db.restFav();
    localStorage.setItem('isFav', this.isFav.toString());
  }

  share() {
    // TODO: show sharing window
  }

}
