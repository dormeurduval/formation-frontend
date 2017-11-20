import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service'

@Component({
 selector: 'app-carrousel',
 templateUrl: './carrousel.component.html',
 styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

 @Input() collegue:Collegue;
 @Input() collegues:CollegueService;

 constructor(collegue,collegues) { 
  this.collegue=collegue
  this.collegues=collegues
}

 ngOnInit() {
 }

 jaime(){
  this.collegues.aimerUnCollegue(this.collegue)
 }

 jeDeteste(){
  this.collegues.detesterUnCollegue(this.collegue)
 }
}
