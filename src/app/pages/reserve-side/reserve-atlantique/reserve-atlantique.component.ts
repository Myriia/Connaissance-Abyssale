import { Component, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-reserve-atlantique',
  templateUrl: './reserve-atlantique.component.html',
  styleUrls: ['./reserve-atlantique.component.css']
})
export class ReserveAtlantiqueComponent implements OnInit {

  
  type: TYPE_ARTICLE = TYPE_ARTICLE.ATLANTIQUE;
  constructor() { }

  ngOnInit(): void {
  }

}
