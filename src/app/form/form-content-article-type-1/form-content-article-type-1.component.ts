import {Component, Input} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ca-form-content-article-type-1',
  templateUrl: './form-content-article-type-1.component.html'
})
export class FormContentArticleType1Component {

  @Input()
  form : FormArray | undefined;

  constructor() {}

  getNbPartie() {
    return this.form?.length;
  }

  addPartie(i:number) {
    this.form?.insert(i, new FormGroup({
    img :  new FormControl(null),
    img_name :  new FormControl(null),
    legendeImg : new FormControl(null),
    disposition : new FormControl(null),
    text: new FormControl(null),
  }));
  }

  removePartie(i:number) {
    this.form?.removeAt(i);
  }
}
