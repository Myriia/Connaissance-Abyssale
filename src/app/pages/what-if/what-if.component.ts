import { Component, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-what-if',
  templateUrl: './what-if.component.html',
  styleUrls: ['./what-if.component.css']
})
export class WhatIfComponent implements OnInit {

  type: TYPE_ARTICLE = TYPE_ARTICLE.Si_J_ETAIS;
  constructor() { }

  ngOnInit(): void {
  }

}
