import {Component, HostListener, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    article: string | undefined = undefined;
    tab: string | undefined = undefined;
    screenSize: string = "large";

    constructor(private titleService: Title, private route: ActivatedRoute, private router: Router, private meta: Meta) {
      this.meta.addTags([
        {name: 'description', content: 'TODO'},
        {name: 'author', content: 'TODO'},
        {name: 'keywords', content: 'TODO'}
      ]);
      this.titleService.setTitle('Connaissance Abyssale');
    }

    ngOnInit(): void {
      this.chooseScreenSize();

      this.route.queryParams.subscribe(params => {
      this.article = params.article;
      this.tab = params.tab;
      if (this.article) {
        this.router.navigate([
          'article/' + this.article + '/'
        ]);
      }
      else if (this.tab) {
        this.router.navigate([
          'tab/' + this.article + '/'
        ]);
      }
    });
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
