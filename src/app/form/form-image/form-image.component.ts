import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ca-form-image',
  templateUrl: './form-image.component.html'
})
export class FormImageComponent  {

  @Input()
  title: string | undefined;

  @Input()
  image : string | any = null;
  
  @Input()
  formName : FormControl | undefined;

  @Input()
  form : FormControl | undefined;

  hasBeenUpdated = false;

  constructor() {}
 
  changeImage(event:any){
    let fileName = event.files[0].name;
    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.updateImage(event.target.result);
    }
    reader.readAsDataURL(event.files[0]);
    this.updateImageName(fileName);
    this.hasBeenUpdated = true;
  }

  removeImage(){
    this.formName?.setValue(null);
    this.form?.setValue(null);
  }

  updateImageName(fileName: string){
    this.formName?.setValue(fileName);
  }

  updateImage(image:any){
    this.form?.setValue(image);
  }

  getImage(){
    return this.form?.value;
  }
}
