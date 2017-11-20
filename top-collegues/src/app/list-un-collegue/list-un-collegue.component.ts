import { Component, OnInit, Input} from '@angular/core';
import {UnCollegueComponent} from '../un-collegue/un-collegue.component';
import {CollegueService} from '../shared/service/collegue.service';
import {Collegue} from '../shared/domain/collegue';

@Component({
  selector: 'app-list-un-collegue',
  templateUrl: './list-un-collegue.component.html',
  styleUrls: ['./list-un-collegue.component.css']
})
export class ListUnCollegueComponent implements OnInit {

  collegueService:CollegueService
  collegues:Array<Collegue>

  constructor(collegueService:CollegueService) {
    this.collegueService=collegueService
  }

  jaime(collegue){
    this.collegueService.aimerUnCollegue(collegue)
   }
  
   jeDeteste(collegue){
    this.collegueService.detesterUnCollegue(collegue)
   }

  ngOnInit() {
   this.collegues= new Array()
    this.collegueService.listerCollegues().then((tab) =>{
      this.collegues=tab
    })

  }
}
