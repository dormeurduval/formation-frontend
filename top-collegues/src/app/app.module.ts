import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ListUnCollegueComponent } from './list-un-collegue/list-un-collegue.component';
import {RouterModule,Routes} from '@angular/router';
import { ListTableauComponent } from './list-tableau/list-tableau.component';
import { ListCarrouselComponent } from './list-carrousel/list-carrousel.component';
import {CollegueService} from './shared/service/collegue.service' 
import { HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {path:"classique",component:ListUnCollegueComponent},
  {path:"tableau",component:ListTableauComponent},
  {path:'carrousel',component:ListCarrouselComponent },
  { path: "**", redirectTo: "classique"} 
];


@NgModule({
  declarations: [
    AppComponent,
    ListUnCollegueComponent,
    ListTableauComponent,
    ListCarrouselComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
