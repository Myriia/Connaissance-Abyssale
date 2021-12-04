import { Component, Input, OnInit } from '@angular/core';
import {online} from "../../config";
import {Article, articles} from "../../article";

@Component({
  selector: 'ca-article-0001',
  templateUrl: './article-0001.component.html',
  styleUrls: ['./article-0001.component.css']
})
export class Article0001Component implements OnInit {

  @Input()
  id: number | undefined;
  @Input()
  screenSize: string | undefined = "high";

  article: Article | undefined;
  online = online;

  constructor() { }

  ngOnInit() {
    this.article = articles.find(article => this.id === article.id);
  }
}
