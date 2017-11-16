import { Component } from '@angular/core';
// TODO importer la classe Collegue
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CollegueService } from './shared/service/collegue.service';
import { Collegue } from './shared/domain/collegue';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  collegueService:CollegueService
  collegues:Collegue[]

  ngOnInit() {
    this.collegueService= new CollegueService()
    this.collegueService.listerCollegues().then((tab)=>{this.collegues=tab})
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement,toastSuccess:HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value

    let collegue= new Collegue(pseudo.value,imageUrl.value,0)

    let b:boolean

    this.collegueService.sauvegarder(collegue).then(collegue =>{


      toastSuccess.className += "alert alert-success";
      toastSuccess.innerHTML = `Le collègue <strong>${collegue.nom}</strong> a été ajouté avec  succès`

      toastSuccess.style.visibility = 'visible'

      pseudo.value=""
      imageUrl.value=""

      setTimeout(function(){toastSuccess.style.visibility = 'hidden'},2000);

      // exemple => pseudo.value
      // TODO ajouter au tableau un nouveau collègue
      // TODO vider les champs de saisie
      // pour éviter le rechargement de la page
      
    })
    return false;
    
  }
}

