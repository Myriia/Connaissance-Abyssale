import {Component, OnInit, Input, HostListener} from '@angular/core';
import { Article, articles, TYPE_ARTICLE } from '../article';

@Component({
  selector: 'ca-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  screenSize : string = "high";
  constructor() { }

  @Input()
  type: TYPE_ARTICLE = TYPE_ARTICLE.NO;

  articles:Article[] = []

  ngOnInit(): void {
    this.isscreenSize();
    this.articles = articles.filter(article => article.types?.includes(this.type));
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isscreenSize();
  }

  private isscreenSize() {
    if (window.innerWidth > 1170) { // 768px portrait
      this.screenSize = "high";
    }
    else if (window.innerWidth > 900){
      this.screenSize = "medium";
    }
    else {
      this.screenSize = "small";
    }
  }
}
