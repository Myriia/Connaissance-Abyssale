import {Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ca-form-type',
  templateUrl: './form-type.component.html'
})
export class FormTypeComponent {

  @Input()
  form : FormControl | undefined;

  constructor() {}
}
