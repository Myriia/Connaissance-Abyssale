const NO_IMAGE = 'img0';

enum TYPE_ARTICLE {
  CURIOSITE = 'Curiosité',
  Si_J_ETAIS = 'Si j\'étais',
  ARBRE_PHYLO = 'Arbre Phylogénétique',
  LA_UNE = 'A la une',
  PROTECTION_ET_CONSERVATION = 'Protection et Conservation',
  BIOMIMETISME = 'Biomimétisme',
  NO = 'no'
}

interface Article{
  id: number;
  title:string;
  content:string[];
  img_article_presentation:string;
  types:TYPE_ARTICLE[];
}

const articles: Article[] = [
  {
    id : 0,
    title : 'Article non trouvé',
    content : [
      'Nous n\'avons pas trouvé l\'article spécifié.',
    ],
    img_article_presentation : NO_IMAGE,
    types : [TYPE_ARTICLE.NO],
  },{
    id : 1,
    title : 'Grande nacre',
    content : [
      'La grande nacre peut mesurer jusqu’à 1m20 une fois adulte. Elle est implantée dans le sédiment et inclinée vers le courant pour optimiser la filtration de l’eau qui approche les 6.5 litres par jour. Ce système lui permet  de se nourrir de particules vivantes (plancton) ou mortes (matière organique en suspension).',
    ],
    img_article_presentation : 'nacre.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
    id : 2,
    title : 'Hippocampe à museau court',
    content : [
      'Les hippocampes à museau court ont une taille qui varie entre 11 et 15 cm chez l’adulte. Leur nom vient de la forme de leur museau qui est entre 2 et 2.5 fois plus long que haut. La crête triangulaire présente sur leur tête permet d’idenpngier cette espèce. Ils possèdent aussi des courtes cornes au-dessus des yeux. Leur couleur est variable, ils sont capables de mimer la couleur de leur environnement pour se camoufler.',
    ],
    img_article_presentation : 'museau_court.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
    id : 3,
    title : 'Hippocampe moucheté',
    content : [
      'Les hippocampes mouchetés ont une taille qui varie entre 12 et 16 cm chez l’adulte. Leur nom vient de la forme de leur museau qui est plus de trois fois plus long que haut et bien plus fin que celui de l’espèce précédente. Ces hippocampes possèdent des longs filaments cutanés sur la tête et sur le dos ce qui est un critère de reconnaissance avec la forme du museau. Mais attention, ce n’est pas parce qu’il n’y a pas de filaments que ce n’est pas un hippocampe moucheté ! La coloration de cette espèce varie du brun foncé au jaune, avec une présence de taches blanches sur le corps.',
    ],
    img_article_presentation : 'Hipp_mouchete.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  }
];

const title = 'Connaissance Abyssale';
const image_home_page = 'bandeau_site_internet.jpg';

export {title, NO_IMAGE, Article, articles, image_home_page, TYPE_ARTICLE} ;
