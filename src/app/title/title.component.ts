import { Component } from '@angular/core';
import {online} from "../config";

@Component({
  selector: 'ca-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  constructor() { }

  online = online;
}
