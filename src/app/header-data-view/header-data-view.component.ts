import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ca-header-data-view',
  templateUrl: './header-data-view.component.html',
  styleUrls: ['./header-data-view.component.css']
})
export class HeaderDataViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  setFilterdArticles(){
    
  }

}
