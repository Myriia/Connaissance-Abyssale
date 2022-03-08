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
      label: 'Accueil', routerLink: ''
    },
    {
      label: 'Protection et Conservation', routerLink: 'protectionEtConservation'
    },
    {
      label: 'Les Curiosités', routerLink: 'curiosities'
    },
    {
      label: 'Biomimétisme', routerLink: 'biomimetisme'
    },
    {
      label: 'Si j\'étais', routerLink: 'whatIf'
    },
    {
      label: 'Arbre Phylogénétique', routerLink: 'phylogeneticTree'
    },
    {
      label: 'A Propos', routerLink: 'about'
    },
    {
      label: 'Glossaire', routerLink: 'glossaire'
    }
  ];

  ngOnInit(): void {
  }

}
