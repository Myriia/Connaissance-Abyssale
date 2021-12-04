import { Component, Input, OnInit } from '@angular/core';
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
  screenSize: string = "high";

  online = online;

  constructor() { }

  ngOnInit(): void {
  }

}
