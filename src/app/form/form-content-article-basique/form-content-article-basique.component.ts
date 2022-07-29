import {Component, Input} from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'ca-form-content-article-basique',
  templateUrl: './form-content-article-basique.component.html'
})
export class FormContentArticleBasiqueComponent {

  @Input()
  form : FormArray | undefined;

  constructor() {}
  
  add(i:number) {
    this.form?.insert(i, new FormControl('text'));
  }

  remove(i:number) {
    this.form?.removeAt(i);
  }

  getSize(){
    return this.form?.length;
  }
}
