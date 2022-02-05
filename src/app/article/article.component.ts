import {Component, HostListener, OnInit} from '@angular/core';
import {online} from "../config";
import {ActivatedRoute} from "@angular/router";
import {Article, articles} from "../article";

@Component({
  selector: 'ca-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  screenSize : string = "large";
  id: number;
  online = online;
  article: Article | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.chooseScreenSize();
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.article = articles.find(article => this.id === article.id);
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
