import { Component, OnInit } from '@angular/core';
import {articles, articles_home_page, image_home_page, index_specified_item_no_found} from "../../article";

@Component({
  selector: 'ca-curiosities',
  templateUrl: './curiosities.component.html',
  styleUrls: ['./curiosities.component.css']
})
export class CuriositiesComponent implements OnInit {

  constructor() { }
  
  articles = articles_home_page;
  nbElementsToDisplayPerPage = 1;
  nbElementsTotal = articles.length;

  articlesToDisplay: any[] = [];

  ngOnInit(): void {
    this.loadFirstPage();
  }

  loadFirstPage(){
    for(let i = 0; i < this.nbElementsToDisplayPerPage;++i)
    {
      this.articlesToDisplay.push(this.articles[i]);
    }
  }

  paginate(event: any) {
    this.articlesToDisplay.splice(0, this.articlesToDisplay.length);

    let endOfDisplay = event.first + this.nbElementsToDisplayPerPage;

    for(let i = event.first; i < endOfDisplay;++i)
    {
      if(i < this.nbElementsTotal){
        this.articlesToDisplay.push(this.articles[i]);
      }
    }
}

getArticleById(id:number): any{
  let articleIndex = articles.findIndex(article => article.id === id);
  return articles[articleIndex === -1 ? index_specified_item_no_found : articleIndex];
}

}
