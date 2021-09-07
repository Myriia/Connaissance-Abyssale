import { Component, OnInit, Input } from '@angular/core';
import { Article, articles, TYPE_ARTICLE } from '../article';

@Component({
  selector: 'ca-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  constructor() { }

  @Input()
  type: TYPE_ARTICLE = TYPE_ARTICLE.NO;

  articles:Article[] = []
  
  ngOnInit(): void {
    this.articles = articles.filter(article => article.types?.includes(this.type));
  }

}
