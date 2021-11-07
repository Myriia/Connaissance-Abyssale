import { Component, OnInit } from '@angular/core';
import { TYPE_ARTICLE } from 'src/app/article';

@Component({
  selector: 'ca-protection-et-conservation',
  templateUrl: './protection-et-conservation.html',
  styleUrls: ['./protection-et-conservation.component.css']
})
export class ProtectionEtConservationComponent implements OnInit {

  type: TYPE_ARTICLE = TYPE_ARTICLE.PROTECTION_ET_CONSERVATION;
  constructor() { }

  ngOnInit(): void {
  }

}
