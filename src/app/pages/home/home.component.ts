import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
    this.articles = articles.filter(article => article.types?.includes(this.type));
  }

}
