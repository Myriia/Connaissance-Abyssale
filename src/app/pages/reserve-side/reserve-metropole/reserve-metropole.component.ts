import { Component, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-reserve-metropole',
  templateUrl: './reserve-metropole.component.html',
  styleUrls: ['./reserve-metropole.component.css']
})
export class ReserveMetropoleComponent implements OnInit {

  
  type: TYPE_ARTICLE = TYPE_ARTICLE.METROPOLE;
  
  constructor() { }

  ngOnInit(): void {
  }

}
