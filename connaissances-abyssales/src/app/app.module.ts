import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { ChipModule } from "primeng/chip";
import { TabMenuModule } from 'primeng/tabmenu';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CuriositiesComponent } from './pages/curiosities/curiosities.component';
import { PhylogeneticTreeComponent } from './pages/phylogenetic-tree/phylogenetic-tree.component';
import { WhatIfComponent } from './pages/what-if/what-if.component';
import { ReserveSideComponent } from './pages/reserve-side/reserve-side.component';
import { MenuComponent } from './menu/menu.component';
import { ArticlePresentationComponent } from './article-presentation/article-presentation.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'curiosities', component: CuriositiesComponent},
  {path: 'phylogeneticTree', component: PhylogeneticTreeComponent},
  {path: 'whatIf', component: WhatIfComponent},
  {path: 'reserveSide', component: ReserveSideComponent},
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuriositiesComponent,
    PhylogeneticTreeComponent,
    WhatIfComponent,
    ReserveSideComponent,
    MenuComponent,
    ArticlePresentationComponent
    ],
  imports: [
    BrowserModule,
    TabMenuModule,
    DividerModule,
    ChipModule,
    CardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
