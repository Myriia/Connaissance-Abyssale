const NO_IMAGE = 'img0';
enum TYPE_ARTICLE {
  TYPE_ARTICLE_1 = 'Catégorie article 1',
  TYPE_ARTICLE_2 = 'Catégorie article 2',
  NO = 'NO'
}
const articles_home_page = [1,2,1];
const index_specified_item_no_found = 0;

const articles = [
  {
    id : 0,
    title : 'Article non trouvé',
    content : [
      'Nous n\'avons pas trouvé l\'article spécifié.',
    ],
    img_article_presentation : NO_IMAGE,
    type : TYPE_ARTICLE.NO,
  },{
    id : 1,
    title : 'Un titre d\'article sur la vie sous marine',
    content : [
      'Ceci est la première partie de l\'article. Un article est découpé en partie et seulement la première peut apparaitre ici.',
    ],
    img_article_presentation : 'img1.png',
    type : TYPE_ARTICLE.TYPE_ARTICLE_1,
  },{
    id : 2,
    title : 'Bonjour, je suis un article',
    content : [
      'En grammaire traditionnelle, l’article a plusieurs définitions. Selon l’une d’elles, c’est une partie du discours à fonction grammaticale, qui accompagne le nom dans certaines langues, indiquant dans quelle mesure ce que celui-ci dénomme est connu des participants à une situation de communication donnée.',
    ],
    img_article_presentation : 'img2.png',
    type : TYPE_ARTICLE.TYPE_ARTICLE_2,
  },
];

const title = 'Mamie Cameroun';
const image_home_page = 'img3.png';

export {title, NO_IMAGE, articles, articles_home_page, index_specified_item_no_found, image_home_page} ;
