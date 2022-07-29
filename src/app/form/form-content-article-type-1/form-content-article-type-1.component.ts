import {Component, Input, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ca-form-content-article-type-1',
  templateUrl: './form-content-article-type-1.component.html'
})
export class FormContentArticleType1Component implements OnInit {

  @Input()
  form : FormArray | undefined;

  constructor() {}
  
  ngOnInit(): void {
    console.log(this.form)
  }

  getNbPartie() {
    return this.form?.length;
  }

  getNbParagraphe(i:number) {
    return ((this.form?.controls[i] as FormGroup).get('text') as FormArray).length;
  }

  getNbText(i:number, j:number) {
    return (((this.form?.controls[i] as FormGroup).get('text') as FormArray).controls[j] as FormArray).length;
  }

  addPartie(i:number) {
    this.form?.insert(i, new FormGroup({
    img :  new FormControl(null),
    img_name :  new FormControl(null),
    from_form :  new FormControl(null),
    legendeImg : new FormControl(null),
    text: new FormArray([]),
  }));
  }

  removePartie(i:number) {
    this.form?.removeAt(i);
  }

  addParagraphe(i:number, j:number) {
    ((this.form?.controls[i] as FormGroup).get('text') as FormArray)
      .insert(j, new FormArray([]));
  }

  removeParagraphe(i:number, j:number) {
     ((this.form?.controls[i] as FormGroup).get('text') as FormArray)
      .removeAt(j);
  }

  addText(i:number, j:number, k:number) {
     (((this.form?.controls[i] as FormGroup).get('text') as FormArray).controls[j] as FormArray)
      .insert(k, new FormControl('text'));
  }
  
  removeText(i:number, j:number, k:number) {
     (((this.form?.controls[i] as FormGroup).get('text') as FormArray).controls[j] as FormArray)
      .removeAt(k);
  }
}
