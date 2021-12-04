import {Component, Input} from '@angular/core';
import {online} from "../config";

@Component({
  selector: 'ca-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input()
  screenSize: string = "large";

  constructor() { }

  online = online;
}
