import { Component, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-reserve-pacifique',
  templateUrl: './reserve-pacifique.component.html',
  styleUrls: ['./reserve-pacifique.component.css']
})
export class ReservePacifiqueComponent implements OnInit {

  
  type: TYPE_ARTICLE = TYPE_ARTICLE.PACIFIQUE;
  
  constructor() { }

  ngOnInit(): void {
  }

}
