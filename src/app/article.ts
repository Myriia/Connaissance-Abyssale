const NO_IMAGE = 'img0';

enum TYPE_ARTICLE {
  CURIOSITE = 'Curiosité',
  Si_J_ETAIS = 'Si j\'étais',
  ARBRE_PHYLO = 'Arbre Phylogénétique',
  LA_UNE = 'A la une',
  PACIFIQUE = 'Pacifique',
  ATLANTIQUE = 'Atlantique',
  MEDITERRANNEE = 'Méditerrannée',
  DOMTOM = 'DomTom',
  METROPOLE = 'Métropole',
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
    title : 'Un titre d\'article sur la vie sous marine',
    content : [
      'Ceci est la première partie de l\'article. Un article est découpé en partie et seulement la première peut apparaitre ici.',
    ],
    img_article_presentation : 'img5.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
    id : 2,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img6.jpg',
    types : [TYPE_ARTICLE.Si_J_ETAIS, TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },
  {
    id : 3,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img1.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 4,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img2.png',
    types : [TYPE_ARTICLE.ARBRE_PHYLO, TYPE_ARTICLE.LA_UNE],
  },
  {
    id : 5,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img0.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 6,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img3.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 7,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img4.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 8,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img8.jpg',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 9,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img5.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 10,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img0.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 11,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img3.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 12,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img1.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 13,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img2.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 14,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img1.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 15,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img2.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 16,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img1.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 17,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img2.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },
  {
    id : 9,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img5.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  }
];

const title = 'Mamie Cameroun';
const image_home_page = 'img8.jpg';

export {title, NO_IMAGE, Article, articles, image_home_page, TYPE_ARTICLE} ;
