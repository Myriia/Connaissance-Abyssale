import { Component, Input, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-curiosities',
  templateUrl: './curiosities.component.html',
  styleUrls: ['./curiosities.component.css']
})
export class CuriositiesComponent implements OnInit {

  constructor() { }

  type = TYPE_ARTICLE.CURIOSITE;

  ngOnInit(): void {  
  }
}
