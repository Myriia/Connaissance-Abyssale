import { Component, Input, OnInit } from '@angular/core';
import { MODEL_ARTICLE } from '../article';
import {online} from "../config";

@Component({
  selector: 'ca-article-presentation',
  templateUrl: './article-presentation.component.html',
  styleUrls: ['./article-presentation.component.css']
})
export class ArticlePresentationComponent implements OnInit {

  @Input()
  article: any;
  @Input()
  screenSize: string = "large";
  MODEL_ARTICLE= MODEL_ARTICLE;

  online = online;

  constructor() { }

  ngOnInit(): void {
  }

  cleanText(text: string){
    return text.replaceAll('&#160;', '').replaceAll('<br>','');
  }

  getText(text: string){
    return text;
  }

}
