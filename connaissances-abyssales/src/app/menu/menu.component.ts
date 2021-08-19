import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ca-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  activeItem: MenuItem = {};

  ngOnInit(): void {
    this.items = [
      {label: 'Accueil', routerLink: 'home'},
      {label: 'Côté Réserve', routerLink: 'reserveSide'},
      {label: 'Les Curiosités', routerLink: 'curiosities'},
      {label: 'Si j\'étais', routerLink: 'whatIf'},
      {label: 'Arbre Phylogénétique', routerLink: 'phylogeneticTree'},
      {label: 'A Propos', routerLink: 'about'}
  ];

  this.activeItem = this.items[0];
  }

}
