import { Component, Input, OnInit } from '@angular/core';
import {online} from "../../config";
import {Article, articles} from "../../article";

@Component({
  selector: 'ca-article-0002',
  templateUrl: './article-0002.component.html',
  styleUrls: ['./article-0002.component.css']
})
export class Article0002Component implements OnInit {

  @Input()
  id: number | undefined;
  article: Article | undefined;
  online = online;

  constructor() { }

  data: any;
  chartOptions:any;

  ngOnInit() {
    this.article = articles.find(article => this.id === article.id);

    this.data = {
      labels: ['Mollusques','Crustacés','Annelides', 'Autres'],
      datasets: [
        {
          data: [40, 20, 10, 30],
          backgroundColor: [
            "#568736",
            "#68A242",
            "#90BB7A",
            "#BED5B4"
          ],
          hoverBackgroundColor: [
            "#568736",
            "#68A242",
            "#90BB7A",
            "#BED5B4"
          ]
        }
      ]
    };
    this.chartOptions = {plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    };
  }
}
