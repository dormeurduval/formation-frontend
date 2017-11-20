import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CollegueService {

    collegues:Collegue[]
   /* constructor() {
      this.collegues=[new Collegue("Chalres","https://mrtremix.files.wordpress.com/2012/05/dta.jpg",20)]
  }*/

  constructor(private http:HttpClient) {
  }

    listerCollegues():Promise<Collegue[]> {
    // TODO effectuer la liste des collègues
    // TODO retourner l'objet Promise<Collegue[]>
      /*return new Promise((resolve,reject)=>{
        return resolve(this.collegues);
      })*/

      return this.http.get<Collegue[]>('http://localhost:8080/collegues').toPromise().then((tab)=>
      this.collegues=tab)
    }
    sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue
      /*return new Promise((resolve,reject)=>{
        this.collegues.push(newCollegue);
        console.log(this.collegues)
        return resolve(newCollegue)
      })*/
      this.collegues.push(newCollegue)
      return this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue,httpOptions).toPromise()
    }
    aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
      /*return new Promise((resolve,reject)=>{
        let list=this.collegues.filter(c => c.nom==unCollegue.nom);
        if(list.length>0){
          list[0].score = list[0].score + 10
        }
        return resolve(unCollegue)
        
      })*/
      unCollegue.score=unCollegue.score+10
      return this.http.put<Collegue>('http://localhost:8080/collegues/10',unCollegue,httpOptions).toPromise()
    }
    detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
      /*return new Promise((resolve,reject)=>{
        let list=this.collegues.filter(c => c.nom==unCollegue.nom);
        if(list.length>0){
          list[0].score = list[0].score - 5
        }
        return resolve(unCollegue)
      
      }) */
      
      unCollegue.score=unCollegue.score-5
      return this.http.put<Collegue>('http://localhost:8080/collegues/-5',unCollegue,httpOptions).toPromise()
    }

}
