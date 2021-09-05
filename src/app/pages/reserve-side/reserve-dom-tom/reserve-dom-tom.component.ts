import { Component, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-reserve-dom-tom',
  templateUrl: './reserve-dom-tom.component.html',
  styleUrls: ['./reserve-dom-tom.component.css']
})
export class ReserveDomTomComponent implements OnInit {

  constructor() { }

  type: TYPE_ARTICLE = TYPE_ARTICLE.DOMTOM;

  ngOnInit(): void {
  }

}
