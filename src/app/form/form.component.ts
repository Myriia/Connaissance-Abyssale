import {Component, HostListener, OnInit} from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { MODEL_ARTICLE, TYPE_ARTICLE} from "../article";

@Component({
  selector: 'ca-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  screenSize : string = "large";
  MODEL_ARTICLE = MODEL_ARTICLE;
  TYPE_ARTICLE = TYPE_ARTICLE;
  sidebarDisplay = true;
  imageHeader : string | null = 'bandeau méduses.png';
  imageArticle : string | null = 'Immortelle.png';
  isFormForImageHeader = false;
  isFormForImageArticle = false;
  displayDialogJson: boolean = false;
  isFormForArticleImageType1: boolean = false;
  modelsArticle = [
    {name: 'Basique', value: MODEL_ARTICLE.TYPE_BASIQUE},
    {name: 'Type 1', value: MODEL_ARTICLE.TYPE_1}
  ];

  articleForm = new FormGroup({
    id : new FormControl(-1),
    modelArticle: new FormControl({value:MODEL_ARTICLE.TYPE_BASIQUE}),
    title: new FormControl('La méduse immortelle,'),
    subTitle: new FormControl('Turritopsis dohrnii'),
    contentArticleTypeBasique: new FormArray([]),
    contentArticleType1: new FormArray([]),
    bibliography: new FormArray([]),
    type_arbrephylo :  new FormControl(false),
    type_biometisme :  new FormControl(false),
    type_curiosite :  new FormControl(false),
    type_laune :  new FormControl(false),
    type_protectionetconservation :  new FormControl(false),
    type_sijetais :  new FormControl(false)
  });
  

  constructor() {
    this.chooseScreenSize();
  }

  contentsArticleTypeBasique = this.articleForm.get("contentArticleTypeBasique") as FormArray;
  contentsArticleType1 = this.articleForm.get("contentArticleType1") as FormArray;
  bibliography = this.articleForm.get("bibliography") as FormArray;
  
  ngOnInit(): void {
    let contentsArticleTypeBasiqueExample = [
      '<i>Turritopsis dohrnii</i> a une ombrelle qui fait moins d’un centimètre de haut, en forme de dés à coudre et qui est bordée de nombreux tentacules très fin. Cette méduse est le premier organisme connu capable d’immortalité. Chez la plus part des organismes vivants, le vieillissement est unidirectionnel : les cellules sont programmées pour aller de la jeunesse à la vieillesse. L’immortalité de cette méduse est due à sa capacité à faire rajeunir ses cellules.', 
      'En général, les méduses possèdent plusieurs stades de vies. Quand elles sont jeunes elles vivent fixées et ne sont pas capables de se reproduire. Il s’agit de la phase polype. En grandissant elles atteignent le stade méduse, libre dans la colonne d’eau et capable de se reproduire. Quand une méduse Turritopsis meurt, au lieu de se désintégrer comme la majorité des êtres vivants, ses cellules se réagrègent par un processus appelé transdifférenciation et reforment un polype. Et c’est le début d’un nouveau cycle de vie. Pour le dire avec d’autres mots, c’est un peu comme si une grenouille à l’agonie voyait ses cellules se ré-agréger pour former un têtard.',
      'Il se trouve que le stress est un stimulant essentiel pour déclencher ce cycle, aucune méduse non stressée n’a été observée en train de se transdifférencier. De plus, des expériences ont montré que ce cycle nécessite une température d’au moins 22°C, et que si on refroidit l’eau, le cycle s’interrompt pour reprendre en cas de réchauffement. Cette capacité de résurrection semble être sans limite puisque des chercheurs ont obtenu au moins dix répétitions de ce cycle en deux ans chez un même organisme. Ce qui est d’autant plus incroyable, c’est que la transdifférenciation est capable de démarrer à tous les stades de croissance de la méduse. Pas besoin d’être jeune ou adulte pour pouvoir ressusciter.',
      ' Originaire de méditerranée, <i>Turritopsis dohrnii</i>  a attiré l’attention de nombreux chercheurs car les mécanismes cellulaires lui permettant de rajeunir pourraient faire avancer la recherche contre le cancer. Pour plus aller plus loin sur les processus biologiques cellulaires derrière la transdifférenciation, je vous invite à jeter un œil aux sources bibliographiques citées en bas de cette page.',
      'Statut UICN (liste rouge des espèces menacées) : NE : Non évalué.'
    ];

    let contentsArticleType1Example = [      
      // Partie 1
      {
        img: null,
        text : [
          [
            'Cet article va servir de préambule à la rubrique « Arbre Phylogénétique ». Je vais y définir ce qu’est la classification du vivant, pour que vous puissiez vous approprier plus facilement le contenu qui en parlera.',
          ],
          [
            'Pourquoi ce besoin de classer ?',
            'Tout simplement pour pouvoir parler de façon claire du monde du vivant. Comme le dit Professeur Lecointre : « Si vous voulez parler de la nature là dehors, et que chaque arbre porte un prénom, chaque mouche porte un prénom, vous ne pourriez pas parler de la nature de manière générale ». Il y a donc une nécessité de créer des groupes pour pouvoir en parler.',
            'Quand on parle d’un organisme et que l’on veut le placer sur l’arbre du vivant, on va jouer aux poupées russes. Pour chaque organisme, on attribue une série d’étiquettes qui correspondent aux différentes boîtes dans lesquelles cet organisme est rangé. Ces boîtes sont les niveaux hiérarchiques de la classification scientifique du monde vivant. La plus petite est celle de l’espèce est la plus grande celle du règne. Entre, on a tout un ensemble de boîtes qui forment une pyramide. Les sept principales boîtes sont les suivantes : Espèce – Genre – Famille – Ordre – Classe – Embranchement -  Règne.',
          ]
        ]
      },
      // Partie 2
      {
        img: 'ArbreMondeMarin.png',
        legendeImg: 'Arbre phylogénétique représentant la classification des animaux marins.',
        text: [
          [
            'L’arbre dont nous allons parler est illustré ci-dessus. Ce qui rend chaque embranchement unique est l’acquisition de certains caractères communs qui sont ici numérotées. Ces caractères s’appellent des synapomorphies. ',
            'Tout d’abord, le point commun à tous ces organismes est qu’ils sont constitués de plusieurs cellules (1).  Les Eponges sont des animaux fixés au substrat qui filtrent l’eau de mer. Les Placozoaires sont des animaux aplatis  sans organes, seulement six types de cellules  ayant chacune un rôle différent. Ces deux premiers embranchements sont les plus simples en termes de complexité du corps de l’organisme.',
          ]
        ]
      }
    ];
  
    let bibliographyExample = [
        '« Immortal » Jellyfish Swarm World’s Oceans, 2009. Animals [en ligne]. [Consulté le 16 février 2022]. Disponible à l’adresse : <a href="https://www.nationalgeographic.com/animals/article/immortal-jellyfish-swarm-oceans-animals">https://www.nationalgeographic.com/animals/article/immortal-jellyfish-swarm-oceans-animals</a>',
        'LISA-ANN GERSHWIN, 2017. Méduses et autres organismes gélatineux. Ulmer. 24 rue de Mogador 75009 Paris.',
        'MATSUMOTO, Yui, PIRAINO, Stefano et MIGLIETTA, Maria Pia, 2019. Transcriptome Characterization of Reverse Development in Turritopsis dohrnii (Hydrozoa, Cnidaria). G3: Genes|Genomes|Genetics [en ligne]. 16 octobre 2019. Vol. 9, n° 12, pp. 4127‑4138. [Consulté le 16 février 2022]. DOI 10.1534/g3.119.400487. Disponible à l’adresse : <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6893190/">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6893190/</a>'
    ];

    contentsArticleTypeBasiqueExample.forEach((content) => {
      this.contentsArticleTypeBasique.push(new FormControl(content));
    });

    contentsArticleType1Example.forEach((partie) => {
      let paragrapheControl: AbstractControl[] = [];
      partie.text.forEach((text)=> {
        let textControl: AbstractControl[] = [];
        text.forEach(t => textControl.push(new FormControl(t)))
        paragrapheControl.push(new FormArray(textControl));
      });
      
      this.contentsArticleType1.push(
        new FormGroup({
          img :  new FormControl(null),
          text: new FormArray(paragrapheControl),
        })
      );
    });

    bibliographyExample.forEach((content) => {
      this.bibliography.push(new FormControl(content));
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

  getArticle(){
    let types = [];

    if(this.articleForm.get('type_arbrephylo')?.value){types.push(TYPE_ARTICLE.ARBRE_PHYLO);}
    if(this.articleForm.get('type_biometisme')?.value){types.push(TYPE_ARTICLE.BIOMIMETISME);}
    if(this.articleForm.get('type_curiosite')?.value){types.push(TYPE_ARTICLE.CURIOSITE);}
    if(this.articleForm.get('type_laune')?.value){types.push(TYPE_ARTICLE.LA_UNE);}
    if(this.articleForm.get('type_protectionetconservation')?.value){types.push(TYPE_ARTICLE.PROTECTION_ET_CONSERVATION);}
    if(this.articleForm.get('type_sijetais')?.value){types.push(TYPE_ARTICLE.Si_J_ETAIS);}

    let content;
    if(this.articleForm.get('modelArticle')?.value?.value == MODEL_ARTICLE.TYPE_BASIQUE){content = this.articleForm.get('contentArticleTypeBasique')?.value;}
    if(this.articleForm.get('modelArticle')?.value?.value == MODEL_ARTICLE.TYPE_1){content = this.articleForm.get('contentArticleType1')?.value;}
    
    return {    
      id : this.articleForm.get('id')?.value,
      modelArticle: this.articleForm.get('modelArticle')?.value?.value,
      title : this.articleForm.get('title')?.value,
      subTitle : this.articleForm.get('subTitle')?.value,
      content,
      bibliography: this.articleForm.get('bibliography')?.value,
      img_article_header : this.imageHeader? this.imageHeader : null,
      img_article_presentation : this.articleForm.get('img_article_presentation')?.value,
      img_article_1 : this.imageArticle? this.imageArticle : null,
      types,
    };
  }
 
  removeContentTypeBasique(i:number) {
    this.contentsArticleTypeBasique.removeAt(i);
  }
  
  addContentTypeBasique(i:number) {
    this.contentsArticleTypeBasique.insert(i, new FormControl('text'));
 }
 
 addPartieContentArticleType1(i:number) {
   this.contentsArticleType1.insert(i, new FormGroup({
    img :  new FormControl(null),
    text: new FormArray([]),
  }));
   this.addParagrapheContentArticleType1(i,0);
  }
  removePartieContentArticleType1(i:number) {
    this.contentsArticleType1.removeAt(i);
  }
  addParagrapheContentArticleType1(i:number, j:number) {
    ((this.contentsArticleType1.controls[i] as FormGroup).get('text') as FormArray)
      .insert(j, new FormArray([]));
    this.addTextContentArticleType1(i,j,0);
  }
  removeParagrapheContentArticleType1(i:number, j:number) {
    ((this.contentsArticleType1.controls[i] as FormGroup).get('text') as FormArray)
      .removeAt(j);
  }

  addTextContentArticleType1(i:number, j:number, k:number) {
    (((this.contentsArticleType1.controls[i] as FormGroup).get('text') as FormArray).controls[j] as FormArray)
      .insert(k, new FormControl('text'));
  }
  
  removeTextArticleContentType1(i:number, j:number, k:number) {
    (((this.contentsArticleType1.controls[i] as FormGroup).get('text') as FormArray).controls[j] as FormArray)
      .removeAt(k);
  }

 removeBibliography(i:number) {
   this.bibliography.removeAt(i);
 }
 
 addBibliography(i:number) {
   this.bibliography.insert(i, new FormControl('text'));
 }

 changeImageHeader(event:any){
  let reader = new FileReader();
  reader.onload = (event:any) => {
      this.imageHeader = event.target.result;
  }
  reader.readAsDataURL(event.files[0]);
  this.isFormForImageHeader = true;
 }

 changeImagePartieArticle(event:any, i:number){
  let reader = new FileReader();
  reader.onload = (event:any) => {
    ((this.contentsArticleType1.controls[i] as FormGroup).get('img') as FormArray).setValue(event.target.result);
  }
  reader.readAsDataURL(event.files[0]);
  this.isFormForArticleImageType1 = true;
 }

 removeImageHeader(){
   this.imageHeader = null;
 }

 removeImagePartieArticle(i:number){
  ((this.contentsArticleType1.controls[i] as FormGroup).get('img') as FormArray).clear();
 }
 
 changeImageArticle(event:any){
  let reader = new FileReader();
  reader.onload = (event:any) => {
      this.imageArticle = event.target.result;
  }
  reader.readAsDataURL(event.files[0]);
  this.isFormForImageArticle = true;
 }

 removeImageArticle(){
   this.imageArticle = null;
 }

 getArticleForExport(){
  // récupérer image nom, attention enum
  return {    
    ...this.getArticle(),
  };
}

 copierJsonArticle(){
    navigator.clipboard.writeText(JSON.stringify(this.getArticleForExport()))
    .then(() => {
    console.log("Text copied to clipboard...")
    });
  this.displayDialogJson = false;
 }
}
