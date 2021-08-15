import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {TabMenuModule} from 'primeng/tabmenu';
import { ArticlePresentationComponent } from './article-presentation/article-presentation.component';
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {ChipModule} from "primeng/chip";

@NgModule({
  declarations: [
    AppComponent,
    ArticlePresentationComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    CardModule,
    DividerModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
