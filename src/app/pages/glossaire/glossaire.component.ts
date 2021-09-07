import { Component, OnInit } from '@angular/core';
import {glossaire} from "../../glossaire";
import {online} from "../../config";

@Component({
  selector: 'app-glossaire',
  templateUrl: './glossaire.component.html',
  styleUrls: ['./glossaire.component.css']
})
export class GlossaireComponent implements OnInit {

  constructor() { }

  glossaire = glossaire;
  definition: string | null | undefined;
  img: string | null | undefined;
  filtre: string | null | undefined;
  online = online;

  ngOnInit() {
    this.glossaire = this.glossaire.sort((a: { word: string; }, b: { word: any; }) => a.word.localeCompare(b.word));
  }

  select(index: number){
    this.definition =  this.glossaire[index].definition;
    this.img =  this.glossaire[index].img;
  }

  filtreAction(){
    if(this.filtre === ""){
      this.glossaire = glossaire;
    } else {
      this.glossaire = glossaire.filter((word: { word: string; }) => word.word.toUpperCase().includes((<string>this.filtre).toUpperCase()));
    }
  }

  close(){
    this.img = "";
    this.definition = "";
  }
}
