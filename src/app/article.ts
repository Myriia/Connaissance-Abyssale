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
  subTitle?:string;
  content:string[];
  bibliography?:string[];
  img_article_presentation?:string;
  img_article_header?:string;
  img_article_1?:string;
  img_article_2?:string;
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
    subTitle : '(Pinna nobilis)',
    content : [
      'La grande nacre peut mesurer jusqu’à 1m20 une fois adulte. Elle est implantée dans le sédiment et inclinée vers le courant pour optimiser la filtration de l’eau qui approche les 6.5 litres par jour. Ce système lui permet  de se nourrir de particules vivantes (plancton) ou mortes (matière organique en suspension).',
      'Sur le site où nous allons plonger, elle est présente au niveau des 3 graus (passages qui permettent une communication entre les eaux maritimes et les eaux intérieures).',
      'Il s’agit d’une espèce endémique du bassin  méditerranéen. Comme le mérou, la surpêche a failli causer son extinction, c’est pourquoi elle est protégée depuis 1992.  Aujourd’hui elle est grandement menacée (Statut IUCN : Danger critique d’extinction) par un parasite qui a provoqué une épidémie massive en 2016.'
    ],
    bibliography: [
    ],
    img_article_header : 'grande_nacre_1.jpg',
    img_article_1 : 'nacre.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },{
    id : 2,
    title : 'Hippocampe à museau court',
    subTitle : '(Hippocampus hippocampus)',
    content : [
      'Les hippocampes à museau court ont une taille qui varie entre 11 et 15 cm chez l’adulte. Leur nom vient de la forme de leur museau qui est entre 2 et 2.5 fois plus long que haut. La crête triangulaire présente sur leur tête permet d’idenpngier cette espèce. Ils possèdent aussi des courtes cornes au-dessus des yeux. Leur couleur est variable, ils sont capables de mimer la couleur de leur environnement pour se camoufler.',
      'On reconnait les mâles par la présence d’une poche incubatrice, flasque ou rebondie selon la phase de reproduction, alors que la femelle garde la taille fine tout au long de l’année. La reproduction a lieu fin printemps/début été avec la formation de couples. Les mâles vont stoker les œufs fécondés dans leur poche incubatrice jusqu’à l’éclosion des larves. Une fois ce stade atteint, les jeunes poissons sont expulsés par de puissantes contractions abdominales. Les hippocampes sont une exception dans le règne animal car il s’agit des seules espèces connues où les mâles réalisent l’accouchement. On peut observer les petits hippocampes vers le mois d’août, ils ne mesurent alors que quelques centimètres. Ces jeunes de moins de 5cm sont présents jusqu’à la fin de l’hiver. Ils mesureront environ 10cm à l’été suivant et pourront dès lors se reproduire. Ils ont une espérance de vie de 4 à 5 ans.',
      'Les hippocampes à museau court se nourrissent de zooplancton, de petits crustacés, de larves nauplius, d’œufs de poisson et de petits crustacés benthiques se déplaçant sur le fond. Pour se nourrir les hippocampes aspirent leurs proies à l’aide de leur bouche en forme de pipette.',
      'Cette espèce d’hippocampe vie entre 0 et 10m sur un fond sableux que ça soit en mer ou dans les lagunes.'
    ],
    bibliography: [
    ],
    img_article_1 : 'museau_court.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
    id : 3,
    title : 'Hippocampe moucheté',
    subTitle : '(Hippocampus guttulatus)',
    content : [
      'Les hippocampes mouchetés ont une taille qui varie entre 12 et 16 cm chez l’adulte. Leur nom vient de la forme de leur museau qui est plus de trois fois plus long que haut et bien plus fin que celui de l’espèce précédente. Ces hippocampes possèdent des longs filaments cutanés sur la tête et sur le dos ce qui est un critère de reconnaissance avec la forme du museau. Mais attention, ce n’est pas parce qu’il n’y a pas de filaments que ce n’est pas un hippocampe moucheté ! La coloration de cette espèce varie du brun foncé au jaune, avec une présence de taches blanches sur le corps.',
      'Comme pour toutes les espèces d’hippocampes, c’est le mâle qui couve les œufs. La période de frai s’étend de fin mai à fin juillet. Comme précédemment, la maturité sexuelle est atteinte au bout de 6 à 8 mois et l’espérance de vie des adultes s’éteint jusqu’à 5 ans. La fonction préhensile de la queue joue un rôle très important dans l\'accouplement qui comprend une phase d’enlacement. Ce comportement empêche tout croisement avec l\'espèce Hippocampus hippocampus qui ne le pratique pas.',
      'Les hippocampes mouchetés vivent dans les prairies de posidonies et de zostères ou parmi les algues à partir de 5m de profondeur.',
      'Vous l’aurez compris, nous allons plonger dans un site abritant une biodiversité exceptionnelle mais aussi fragile, c’est pourquoi on vous demandera bien évidement d’en prendre le plus grand soin.'
    ],
    bibliography: [
    ],
    img_article_1 : 'Hipp_mouchete.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
    id : 4,
    title : 'Pelagie, acalèphe brillante,',
    subTitle : 'Pelagia noctiluca',
    content : [
      'L’acalèphe brillante tire son nom de sa capacité à émettre sa propre lumière, on dit qu’elle est bioluminescente. Son ombrelle en forme de champignon mesure entre 7 et 17 cm, les quatre gros tentacules entre 10 et 15 cm et les plus fin peuvent mesurer jusqu’à un demi-mètre. Les verrues mauves que l’on retrouve sur cet organisme contiennent des cellules urticantes, les cnidocytes.',
      'Cet organisme se nourrit de crustacés, d’autres méduses et des fois de petits poissons qu’elle capture à l’aide de ses cnidocytes. Un film de mucus ramène les proies sous l’ombrelle où se trouve la cavité gastrique et où se passera la digestion',
      'Cette espèce est celle que les baigneurs rencontrent le plus souvent en mer Méditerranée. Cependant Pelagia noctiluca est cosmopolite, on la retrouve un peu partout dans les mers et océans du globe. Elle nage le plus souvent près de la surface dans les premiers mètres de la colonne d’eau et affectionne les zones chaudes et tempérées.'
    ],
    bibliography: [
      'ZIEMSKI Frédéric, GOY Jacqueline, SITTLER Alain-Pierre in : DORIS, 07/11/2020 : Pelagia noctiluca (Forsskål, 1775), https://doris.ffessm.fr/ref/specie/87',
      'Microplastic ingestion in jellyfish Pelagia noctiluca (Forsskal, 1775) in the North Atlantic Ocean, 2021. Marine Pollution Bulletin [en ligne]. Vol. 166, pp. 112266. [Consulté le 1 février 2022]. DOI 10.1016/j.marpolbul.2021.112266. Disponible à l’adresse : https://www-sciencedirect-coms.docadis.univ-tlse3.fr/science/article/pii/S0025326X21003003',
      'Pelagia noctiluca | DORIS, [sans date]. [en ligne]. [Consulté le 1 février 2022]. Disponible à l’adresse : https://doris.ffessm.fr/Especes/Pelagia-noctiluca-Pelagie-87',
      'STEVEN, WEINBERG, 2015. Découvrir la vie sous-marine Méditerranée. 2 rue du Marais - ZAC du Puits d’Ordet 73190 CHALLES-LES-EAUX FRance : GAP. ISBN 978-2-7417-0533-8.'
    ],
    img_article_header : 'bandeau méduses.png',
    img_article_1 : 'M_piqueusemauve.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
    id : 5,
    title : 'La méduse à l’envers Indo-Pacifique,',
    subTitle : 'Cassiopea andromeda',
    content : [
      'Cette espèce de méduse a la capacité de nager mais elle est la plus part du temps le dos posé sur le sédiment. En effet, cet organisme a la particularité de vivre à l’envers : ombrelle sur le fond et les tentacules dirigés vers la surface.',
      'La raison à cette drôle de posture vient du fait que la majorité des besoins alimentaires de la méduse sont comblés par des micro-algues présentent sur les tentacules. C’est pourquoi les tentacules sont déployés à l’horizontal pour maximiser l’exposition au soleil et ainsi la production d’énergie de la part des micro-algues.'
      'On retrouve Cassiopea andromeda  principalement de l’ouest de l’océan Indien à l’ouest de l’océan Pacifique. Elle vit dans les eaux calmes et relativement chaudes. Elle nage majoritairement dans les dix premiers mètres de la colonne d’eau, zone où la luminosité est la plus forte.'
      'Statut UICN (liste rouge des espèces menacées) : LC : peu concernée.'],
    bibliography: [
      'Cassiopea andromeda | DORIS, [sans date]. [en ligne]. [Consulté le 1 février 2022]. Disponible à l’adresse : https://doris.ffessm.fr/Especes/Cassiopea-andromeda-Meduse-a-l-envers-indo-pacifique-2417'
      'LISA-ANN GERSHWIN, 2017. Méduses et autres organismes gélatineux. Ulmer. 24 rue de Mogador 75009 Paris.'
      ],
    img_article_header : 'bandeau méduses.png',
    img_article_1 : 'M_alenvers.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  }
];

const title = 'Connaissance Abyssale';
const image_home_page = 'bandeau_site_internet.jpg';

export {title, NO_IMAGE, Article, articles, image_home_page, TYPE_ARTICLE} ;
