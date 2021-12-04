import {Component, HostListener, OnInit} from '@angular/core';
import {Article, articles, image_home_page, TYPE_ARTICLE} from "../../article";
import {online} from "../../config";

@Component({
  selector: 'ca-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  type = TYPE_ARTICLE.LA_UNE;
  articles: Article[] = [];
  imageHome=image_home_page;
  online=online;
  screenSize: string = "large";
  constructor() { }

  ngOnInit(): void {
    this.articles = articles.filter(article => article.types?.includes(this.type));
    this.chooseScreenSize();
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
