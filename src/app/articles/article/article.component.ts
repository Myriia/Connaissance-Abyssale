import {Component, HostListener, OnInit} from '@angular/core';
import {online} from "../../config";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ca-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  screenSize : string = "high";
  id: number;
  online = online;

  constructor(private activatedRoute: ActivatedRoute) {
    this.isscreenSize();
    this.id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isscreenSize();
  }

  private isscreenSize() {
    if (window.innerWidth > 1170) { // 768px portrait
      this.screenSize = "high";
    }
    else if (window.innerWidth > 900){
      this.screenSize = "medium";
    }
    else {
      this.screenSize = "small";
    }
  }
}
