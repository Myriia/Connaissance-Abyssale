import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ca-article-presentation',
  templateUrl: './article-presentation.component.html',
  styleUrls: ['./article-presentation.component.css']
})
export class ArticlePresentationComponent implements OnInit {

  @Input()
  article: any;

  constructor() { }

  ngOnInit(): void {
  }

}
