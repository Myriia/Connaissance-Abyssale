import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ca-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [
    {
      label: 'Accueil', routerLink: 'home'
    },
    {
      label: 'Côté Réserve',
      items:[
        {
          label:'France', styleClass:'franceLabel',
          items:[
            {
              label:'Métropole', routerLink: 'metropole'
            },
            {
              label:'DOM/TOM', routerLink:'domtom'
            }
          ]
        },
        {
          label:'Méditerrannée', routerLink:'mediterrannee'
        }, 
        {
          label:'Atlantique', routerLink:'atlantique'
        }, 
        {
          label:'Pacifique', routerLink:'pacifique'
        }
      ]
    },
    {
      label: 'Les Curiosités', routerLink: 'curiosities'
    },
    {
      label: 'Si j\'étais', routerLink: 'whatIf'
    },
    {
      label: 'Arbre Phylogénétique', routerLink: 'phylogeneticTree'
    },
    {
      label: 'A Propos', routerLink: 'about'
    }
  ];

  ngOnInit(): void {
  }

}
