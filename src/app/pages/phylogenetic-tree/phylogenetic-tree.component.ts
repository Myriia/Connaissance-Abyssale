import { Component, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-phylogenetic-tree',
  templateUrl: './phylogenetic-tree.component.html',
  styleUrls: ['./phylogenetic-tree.component.css']
})
export class PhylogeneticTreeComponent implements OnInit {

  type: TYPE_ARTICLE = TYPE_ARTICLE.ARBRE_PHYLO;
  constructor() { }

  ngOnInit(): void {
  }

}
