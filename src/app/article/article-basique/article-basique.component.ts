import {Component, Input} from '@angular/core';
import {online} from "../../config";
import {Article, TYPE_ARTICLE} from "../../article";

@Component({
  selector: 'ca-article-basique',
  templateUrl: './article-basique.component.html',
  styleUrls: ['./article-basique.component.css']
})
export class ArticleBasiqueComponent {

  @Input()
  screenSize : string = "large";
  
  @Input()
  article: Article | undefined;

  @Input()
  isFormForImageHeader: boolean | undefined;

  @Input()
  isFormForImageArticle: boolean | undefined;

  online = online;

  public getRouterLink(typeArticle: String) {
    switch(typeArticle){
      case TYPE_ARTICLE.PROTECTION_ET_CONSERVATION: return '/protectionEtConservation';
      case TYPE_ARTICLE.CURIOSITE: return '/curiosities';
      case TYPE_ARTICLE.BIOMIMETISME: return '/biomimetisme';
      case TYPE_ARTICLE.Si_J_ETAIS: return '/whatIf';
      case TYPE_ARTICLE.ARBRE_PHYLO: return '/phylogeneticTree';
      default: return '/';
    }
  }
}
