import { Component } from '@angular/core';
import { faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Subscription } from 'rxjs';
import { screenSize } from 'src/app/interfaces/types';
import { ResponsivenessService } from 'src/app/services/responsiveness.service';

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

  currentScreenSize!: screenSize;
  subscriptions!: Subscription[];

  constructor(
    private responsive: ResponsivenessService,
  ) {
    this.date = new Date();
    this.subscriptions = [];
  }

  ngOnInit() {
    const responsiveSub = this.responsive.screenSize.subscribe(data => {
      this.currentScreenSize = data;
      console.log('current size: ', this.currentScreenSize);

    });
    this.subscriptions.push(responsiveSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
