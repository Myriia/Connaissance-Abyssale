import { Component, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-biomimetisme',
  templateUrl: './biomimetisme.html',
  styleUrls: ['./biomimetisme.component.css']
})
export class BiomimetismeComponent implements OnInit {

  constructor() { }

  type = TYPE_ARTICLE.BIOMIMETISME;

  ngOnInit(): void {
  }
}
