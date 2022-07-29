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
  isFormForImageHeader = false;
  isFormForImageArticle = false;
  displayDialogJson: boolean = false;
  isFormForArticleImageType1: boolean = false;
  modelsArticle = [
    {name: 'Basique', value: MODEL_ARTICLE.TYPE_BASIQUE},
    {name: 'Type 1', value: MODEL_ARTICLE.TYPE_1}
  ];

  articleForm = new FormGroup({
    id : new FormControl(-1),
    modelArticle: new FormControl({value:MODEL_ARTICLE.TYPE_BASIQUE}),
    title: new FormControl(null),
    subTitle: new FormControl(null),
    contentArticleTypeBasique: new FormArray([]),
    contentArticleType1: new FormArray([]),
    bibliography: new FormArray([]),
    img_article_header: new FormControl(null),
    img_article_header_name: new FormControl(null),
    img_article_header_is_for_form: new FormControl(false),
    img_article_basique_is_for_form: new FormControl(false),
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
        case MODEL_ARTICLE.TYPE_BASIQUE:
          content = this.articleForm.get('contentArticleTypeBasique')?.value;
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
      img_article_header_is_for_form : this.articleForm.get('img_article_header_is_for_form')?.value,
      img_article_basique_is_for_form : this.articleForm.get('img_article_basique_is_for_form')?.value,
      types,
    };
  }
  
  // Content Article Basique
  getFormContentsArticleTypeBasique(){return this.articleForm.get("contentArticleTypeBasique") as FormArray;}
  // Content Article Basique
  getFormContentsArticleType1(){return this.articleForm.get("contentArticleType1") as FormArray;}
  // Bibliography
  getFormBibliography(){return this.articleForm.get("bibliography") as FormArray;}
  // Header
  getFormImageHeaderName(){ return this.articleForm.get('img_article_header_name') as FormControl;}
  getFormImageHeader(){ return this.articleForm.get('img_article_header') as FormControl;}
  getFormImageHeaderIsForForm(){ return this.articleForm.get('img_article_header_is_for_form') as FormControl;}
  // Image article basique
  getFormImageArticleBasiqueName(){ return this.articleForm.get('img_article_1_name') as FormControl;}
  getFormImageArticleBasique(){ return this.articleForm.get('img_article_1') as FormControl;}
  getFormImageArticleBasiqueIsForForm(){ return this.articleForm.get('img_article_basique_is_for_form') as FormControl;}
  

  getArticleForExport(){
  let article = this.getArticle();
  let content = [...article.content];
  
  if(article.modelArticle == MODEL_ARTICLE.TYPE_1){
    content = content.map((c : any) => {
      return {
        img: c.img_name,
        legendeImg: c.legendeImg,
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
