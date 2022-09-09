import {Component, HostListener} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MODEL_ARTICLE, TYPE_ARTICLE} from "../article";

@Component({
  selector: 'ca-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  // image
  screenSize : string = "large";
  MODEL_ARTICLE = MODEL_ARTICLE;
  TYPE_ARTICLE = TYPE_ARTICLE;
  sidebarDisplay = true;
  displayDialogJson: boolean = false;
  isFormForArticleImageType1: boolean = false;
  modelsArticle = [
    {name: 'Type 0', value: MODEL_ARTICLE.TYPE_0},
    {name: 'Type 1', value: MODEL_ARTICLE.TYPE_1}
  ];

  articleForm = new FormGroup({
    id : new FormControl(-1),
    modelArticle: new FormControl({value:MODEL_ARTICLE.TYPE_0}),
    title: new FormControl(null),
    subTitle: new FormControl(null),
    contentArticleType0: new FormControl(null),
    contentArticleType1: new FormArray([]),
    bibliography: new FormControl(null),
    img_article_header: new FormControl(null),
    img_article_header_name: new FormControl(null),
    img_article_1: new FormControl(null),
    img_article_1_name: new FormControl(null),
    img_article_presentation: new FormControl(null),
    type_arbrephylo :  new FormControl(false),
    type_biometisme :  new FormControl(false),
    type_curiosite :  new FormControl(false),
    type_laune :  new FormControl(false),
    type_protectionetconservation :  new FormControl(false),
    type_sijetais :  new FormControl(false)
  });

  constructor() {
    this.chooseScreenSize();
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

  getArticle(){
    let types = [];

    if(this.articleForm.get('type_arbrephylo')?.value){types.push(TYPE_ARTICLE.ARBRE_PHYLO);}
    if(this.articleForm.get('type_biometisme')?.value){types.push(TYPE_ARTICLE.BIOMIMETISME);}
    if(this.articleForm.get('type_curiosite')?.value){types.push(TYPE_ARTICLE.CURIOSITE);}
    if(this.articleForm.get('type_laune')?.value){types.push(TYPE_ARTICLE.LA_UNE);}
    if(this.articleForm.get('type_protectionetconservation')?.value){types.push(TYPE_ARTICLE.PROTECTION_ET_CONSERVATION);}
    if(this.articleForm.get('type_sijetais')?.value){types.push(TYPE_ARTICLE.Si_J_ETAIS);}

    let content;
    switch(this.articleForm.get('modelArticle')?.value?.value){
        case MODEL_ARTICLE.TYPE_0:
          content = this.articleForm.get('contentArticleType0')?.value;
          break;
        case MODEL_ARTICLE.TYPE_1:
          content = this.articleForm.get('contentArticleType1')?.value;
          break;
    }

    return {    
      id : this.articleForm.get('id')?.value,
      modelArticle: this.articleForm.get('modelArticle')?.value?.value,
      title : this.articleForm.get('title')?.value,
      subTitle : this.articleForm.get('subTitle')?.value,
      content,
      bibliography: this.articleForm.get('bibliography')?.value,
      img_article_header : this.articleForm.get('img_article_header')?.value,
      img_article_presentation : this.articleForm.get('img_article_presentation')?.value,
      img_article_1 : this.articleForm.get('img_article_1')?.value,
      types,
    };
  }

  getFormContentsArticleType0(){return this.articleForm.get("contentArticleType0") as FormArray;}
  getFormContentsArticleType1(){return this.articleForm.get("contentArticleType1") as FormArray;}
  // Header
  getFormImageHeaderName(){ return this.articleForm.get('img_article_header_name') as FormControl;}
  getFormImageHeader(){ return this.articleForm.get('img_article_header') as FormControl;}
  // Image article Type 0
  getFormImageArticle0Name(){ return this.articleForm.get('img_article_1_name') as FormControl;}
  getFormImageArticle0(){ return this.articleForm.get('img_article_1') as FormControl;}
  

  getArticleForExport(){
  let article = this.getArticle();
  
  if(article.modelArticle == MODEL_ARTICLE.TYPE_0){
    return {    
      id : article.id,
      modelArticle : article.modelArticle,
      title : article.title,
      subTitle : article.subTitle,
      content : article.content,
      bibliography : article.bibliography,
      types : article.types,
      img_article_header : this.articleForm.get('img_article_header_name')?.value,
      img_article_presentation : this.articleForm.get('img_article_header_name')?.value,
      img_article_1 : this.articleForm.get('img_article_1_name')?.value,
    };
  }

  let content = [...article.content];
  
  if(article.modelArticle == MODEL_ARTICLE.TYPE_1){
    content = content.map((c : any) => {
      return {
        img: c.img_name,
        legendeImg: c.legendeImg,
        disposition: c.disposition,
        text: c.text
      }
    });
  }

  return {    
    id : article.id,
    modelArticle : article.modelArticle,
    title : article.title,
    subTitle : article.subTitle,
    content : content,
    bibliography : article.bibliography,
    types : article.types,
    img_article_header : this.articleForm.get('img_article_header_name')?.value,
    img_article_presentation : this.articleForm.get('img_article_header_name')?.value,
    img_article_1 : this.articleForm.get('img_article_1_name')?.value,
  };
}

 copierJsonArticle(){
    navigator.clipboard.writeText(JSON.stringify(this.getArticleForExport()));
    this.displayDialogJson = false;
 }
}
