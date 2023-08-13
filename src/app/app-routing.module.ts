import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveysComponent } from './components/surveys/surveys.component';
import { SurveyComponent } from './components/survey/survey.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'surveys', component: SurveysComponent },
  { path: 'survey/:language', component: SurveyComponent },
  { path: '', redirectTo: '/surveys', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
