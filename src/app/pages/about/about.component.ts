import { Component, HostListener, OnInit } from '@angular/core';
import { APropos, a_propos } from 'src/app/article';

@Component({
  selector: 'ca-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aPropos: APropos|null= null;
  screenSize : string = "large";

  constructor() {
    this.chooseScreenSize();
  }

  ngOnInit(): void {
    this.aPropos = a_propos;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.chooseScreenSize();
  }

  getText(text: string){
    return text;
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

}
