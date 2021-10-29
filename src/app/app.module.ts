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
import {FormsModule} from "@angular/forms";
import {BiomimetismeComponent} from "./pages/biomimetisme/biomimetisme.component";
import {ProtectionEtConservationComponent} from "./pages/protection-et-conservation/protection-et-conservation.component";

const routes: Routes = [
  {path: 'glossaire', component: GlossaireComponent},
  {path: 'about', component: AboutComponent},
  {path: 'curiosities', component: CuriositiesComponent},
  {path: 'phylogeneticTree', component: PhylogeneticTreeComponent},
  {path: 'whatIf', component: WhatIfComponent},
  {path: 'home', component: HomeComponent},
  {path: 'biomimetisme', component:BiomimetismeComponent},
  {path: 'protectionEtConservation', component:ProtectionEtConservationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
    ProtectionEtConservationComponent
    ],
  imports: [
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
