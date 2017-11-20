import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service'

@Component({
 selector: 'app-tableau',
 templateUrl: './tableau.component.html',
 styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

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
