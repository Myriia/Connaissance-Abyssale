import { Component, Input, OnInit } from '@angular/core';
import {online} from "../../config";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ca-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

}
