import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { ChipModule } from "primeng/chip";
import {MenubarModule} from 'primeng/menubar';
import {DataViewModule} from 'primeng/dataview';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CuriositiesComponent } from './pages/curiosities/curiosities.component';
import { PhylogeneticTreeComponent } from './pages/phylogenetic-tree/phylogenetic-tree.component';
import { WhatIfComponent } from './pages/what-if/what-if.component';
import { MenuComponent } from './menu/menu.component';
import { ArticlePresentationComponent } from './article-presentation/article-presentation.component';
import { DataViewComponent } from './data-view/data-view.component';
import { HeaderDataViewComponent } from './header-data-view/header-data-view.component';
import {GlossaireComponent} from "./pages/glossaire/glossaire.component";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from 'primeng/checkbox';
import {BiomimetismeComponent} from "./pages/biomimetisme/biomimetisme.component";
import {ProtectionEtConservationComponent} from "./pages/protection-et-conservation/protection-et-conservation.component";
import {TitleComponent} from "./title/title.component";
import {ArticleComponent} from "./article/article.component";
import {FieldsetModule} from "primeng/fieldset";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChartModule} from "primeng/chart";
import {AccordionModule} from "primeng/accordion";
import {SidebarModule} from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { ArticleBasiqueComponent } from './article/article-basique/article-basique.component';
import { ArticleType1Component } from './article/article-type-1/article-type-1.component';
import { FormComponent } from './form/form.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import { FormImageComponent } from './form/form-image/form-image.component';
import { FormBibliographyComponent } from './form/form-bibliography/form-bibliography.component';
import { FormTypeComponent } from './form/form-type/form-type.component';
import { FormContentArticleBasiqueComponent } from './form/form-content-article-basique/form-content-article-basique.component';
import { FormContentArticleType1Component } from './form/form-content-article-type-1/form-content-article-type-1.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'glossaire', component: GlossaireComponent},
  {path: 'about', component: AboutComponent},
  {path: 'curiosities', component: CuriositiesComponent},
  {path: 'phylogeneticTree', component: PhylogeneticTreeComponent},
  {path: 'whatIf', component: WhatIfComponent},
  {path: 'biomimetisme', component:BiomimetismeComponent},
  {path: 'protectionEtConservation', component:ProtectionEtConservationComponent},
  {path: ':id', component: ArticleComponent},
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuriositiesComponent,
    PhylogeneticTreeComponent,
    WhatIfComponent,
    MenuComponent,
    ArticlePresentationComponent,
    DataViewComponent,
    HeaderDataViewComponent,
    GlossaireComponent,
    BiomimetismeComponent,
    ProtectionEtConservationComponent,
    TitleComponent,
    ArticleComponent,
    ArticleBasiqueComponent,
    ArticleType1Component,
    AboutComponent,

    // Form
    FormComponent,
    FormImageComponent,
    FormBibliographyComponent,
    FormTypeComponent,
    FormContentArticleBasiqueComponent,
    FormContentArticleType1Component
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    MenubarModule,
    DividerModule,
    ChipModule,
    CardModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    RouterModule.forRoot(routes),
    ScrollPanelModule,
    FormsModule,
    FieldsetModule,
    BrowserAnimationsModule,
    ChartModule,
    SidebarModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CheckboxModule,
    FileUploadModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
