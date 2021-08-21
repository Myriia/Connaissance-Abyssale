import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {articles} from "../article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.getDetails(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  private getDetails(id: string | null): void {
    this.article = articles.find(aux => aux.id.toString() === id);
    if (!this.article) {
      this.router.navigate(['home']);
    }
  }
}
