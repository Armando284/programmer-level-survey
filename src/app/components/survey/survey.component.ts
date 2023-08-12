import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  // questions$!: Observable<[]>;
  language: string = 'asd';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('onInit');

    // this.questions$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.language = params.get('language') as string;
    //     console.log(this.language);
    //     return new Observable<[]>; // TODO: Return survey data from service
    //   })
    // )

    // TODO: change this to the observable method up here when the service it's done
    this.language = this.route.snapshot.paramMap.get('language')!;
  }
}
