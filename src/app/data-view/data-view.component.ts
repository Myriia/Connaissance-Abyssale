import {Component, OnInit, Input, HostListener} from '@angular/core';
import { Article, articles, TYPE_ARTICLE } from '../article';

@Component({
  selector: 'ca-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  screenSize : string = "large";
  constructor() { }

  @Input()
  type: TYPE_ARTICLE = TYPE_ARTICLE.NO;

  articles:Article[] = []

  ngOnInit(): void {
    this.chooseScreenSize();
    this.articles = articles.filter(article => article.types?.includes(this.type));
    this.articles.sort((a, b) => (a.id < b.id) ? 1 : -1)
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.chooseScreenSize();
  }

  private chooseScreenSize() {
    if (window.innerWidth > 1170) { // 768px portrait
      this.screenSize = "large";
    }
    else if (window.innerWidth > 900){
      this.screenSize = "medium";
    }
    else {
      this.screenSize = "small";
    }
  }
}
