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
import { ReserveMetropoleComponent } from './pages/reserve-side/reserve-metropole/reserve-metropole.component';
import { ReserveDomTomComponent } from './pages/reserve-side/reserve-dom-tom/reserve-dom-tom.component';
import { ReserveAtlantiqueComponent } from './pages/reserve-side/reserve-atlantique/reserve-atlantique.component';
import { ReservePacifiqueComponent } from './pages/reserve-side/reserve-pacifique/reserve-pacifique.component';
import { ReserveMediterranneeComponent } from './pages/reserve-side/reserve-mediterrannee/reserve-mediterrannee.component';
import { DataViewComponent } from './data-view/data-view.component';
import { HeaderDataViewComponent } from './header-data-view/header-data-view.component';
import {GlossaireComponent} from "./pages/glossaire/glossaire.component";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'glossaire', component: GlossaireComponent},
  {path: 'about', component: AboutComponent},
  {path: 'curiosities', component: CuriositiesComponent},
  {path: 'phylogeneticTree', component: PhylogeneticTreeComponent},
  {path: 'whatIf', component: WhatIfComponent},
  {path: 'home', component: HomeComponent},
  {path: 'metropole', component:ReserveMetropoleComponent},
  {path: 'domtom', component:ReserveDomTomComponent},
  {path: 'atlantique', component:ReserveAtlantiqueComponent},
  {path: 'pacifique', component:ReservePacifiqueComponent},
  {path: 'mediterrannee', component:ReserveMediterranneeComponent},
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
    ReserveMetropoleComponent,
    ReserveDomTomComponent,
    ReserveAtlantiqueComponent,
    ReservePacifiqueComponent,
    ReserveMediterranneeComponent,
    DataViewComponent,
    HeaderDataViewComponent,
    GlossaireComponent
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