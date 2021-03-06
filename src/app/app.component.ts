import {Component, HostListener, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    article: string | undefined = undefined;
    tab: string | undefined = undefined;
    screenSize: string = "large";

    constructor(private titleService: Title, private meta: Meta) {
      this.meta.addTags([
        {name: 'description', content: 'TODO'},
        {name: 'author', content: 'TODO'},
        {name: 'keywords', content: 'TODO'}
      ]);
      this.titleService.setTitle('Connaissance Abyssale');
    }

    ngOnInit(): void {
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
}
