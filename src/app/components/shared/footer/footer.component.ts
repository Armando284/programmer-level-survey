import { Component } from '@angular/core';
import { faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  date!: Date;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faFacebook = faFacebookF;
  constructor() {
    this.date = new Date();
  }
}
