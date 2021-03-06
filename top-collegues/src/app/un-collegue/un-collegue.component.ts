import { Component, OnInit, Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service'

@Component({
 selector: 'app-un-collegue',
 templateUrl: './un-collegue.component.html',
 styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

 collegue:Collegue;
 collegues:CollegueService;

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
