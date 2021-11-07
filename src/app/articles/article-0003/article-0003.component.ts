import { Component, Input, OnInit } from '@angular/core';
import {online} from "../../config";
import {Article, articles} from "../../article";

@Component({
  selector: 'ca-article-0003',
  templateUrl: './article-0003.component.html',
  styleUrls: ['./article-0003.component.css']
})
export class Article0003Component implements OnInit {

  @Input()
  id: number | undefined;
  article: Article | undefined;
  online = online;

  constructor() { }

  ngOnInit() {
    this.article = articles.find(article => this.id === article.id);
  }
}
