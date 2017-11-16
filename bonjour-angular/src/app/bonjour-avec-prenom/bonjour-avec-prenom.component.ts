import {
    Component,
    OnInit,
    ViewEncapsulation,
    Input // ajouter l'import du composant Input
  } from '@angular/core';
  @Component({
    selector: 'app-bonjour-avec-prenom',
    templateUrl: './bonjour-avec-prenom.component.html',
    styleUrls: ['./bonjour-avec-prenom.component.css'],
    encapsulation: ViewEncapsulation.None
  })
  
  export class BonjourAvecPrenomComponent implements OnInit {
    @Input() prenom:string; // déclarer que ce champ est un paramètre du composant
    
    constructor() {
      this.prenom="Philippe"
    }
    ngOnInit() {
    }
  }
  

