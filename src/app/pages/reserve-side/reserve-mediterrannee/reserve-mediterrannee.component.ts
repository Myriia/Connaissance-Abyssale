import { Component, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-reserve-mediterrannee',
  templateUrl: './reserve-mediterrannee.component.html',
  styleUrls: ['./reserve-mediterrannee.component.css']
})
export class ReserveMediterranneeComponent implements OnInit {

  type: TYPE_ARTICLE = TYPE_ARTICLE.MEDITERRANNEE;
  
  constructor() { }

  ngOnInit(): void {
  }

}
