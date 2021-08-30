import { Component, OnInit } from '@angular/core';
import {articles, articles_home_page, image_home_page, index_specified_item_no_found} from "../../article";

@Component({
  selector: 'ca-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articlesHomePage = articles_home_page
  imageHome=image_home_page;
  constructor() { }

  ngOnInit(): void {
  }

  getArticleById(id:number): any{
    let articleIndex = articles.findIndex(article => article.id === id);
    return articles[articleIndex === -1 ? index_specified_item_no_found : articleIndex];
}
}
