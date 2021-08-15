import { Component } from '@angular/core';
import {articles, articles_home_page, image_home_page, index_specified_item_no_found} from "./article";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articlesHomePage = articles_home_page
  imageHome=image_home_page;

  getArticleById(id:number): any{
    let articleIndex = articles.findIndex(article => article.id === id);
    return articles[articleIndex === -1 ? index_specified_item_no_found : articleIndex];
}
}
