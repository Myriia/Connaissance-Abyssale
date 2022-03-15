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

interface APropos{
  title:string;
  content:string[];
}

const a_propos: APropos = {
  title: "Bienvenue sur Connaissance Abyssale !",
  content : [
    "Je m’appelle Camille et je suis actuellement étudiante entre la première et la deuxième année du master Man And Biosphere (MAB) à l’université Paul Sabatier de Toulouse. Cette année de parenthèse dans mes études va me permettre d’approfondir mes connaissances sur le monde marin. Ce milieu étant généralement mal connu, j’ai décidé de vous le présenter à travers différents articles illustrés pour éveiller votre curiosité. J’espère pouvoir vous transmettre à travers les différentes rubriques de ce site, ma passion pour le monde marin !",
    "Les différentes rubriques sont les suivantes :",
    "« Protection et Conservation » : Aujourd’hui l’ensemble des écosystèmes sont menacés et le monde marin n’échappe pas à cette généralité. Dans cette rubrique je vais vous présenter à travers des exemples concrets, ce que l’être humain a mis en place pour tenter de protéger et sauver la biodiversité marine.",
    "« Les Curiosités » : Les animaux marins ont des adaptations qui leur sont propre et cela donne des formes et des couleurs extraordinaires. Je vais ici vous présenter des organismes qui me fascinent.",
    "« Biomimétisme » : La nature est une source d’inspiration pour l’être humain depuis des milliers d’années. Le monde marin ne fait pas exception. Je vais vous présenter des inventions pour lesquelles l’humain s’est inspiré du fonctionnement des organismes marins.",
    "« Si j’étais » : Dans cette rubrique je vais vous sensibiliser à la cause des organismes marins. On se sent plus facilement concernés pour la protection d’un mammifère terrestre (au hasard : lion, tigre, panda, ours polaire) que celle d’un animal marin. Pour accroitre votre sensibilité au monde marin je vais vous expliquer comment serait votre vie si vous étiez l’un d’entre eux.",
    "« Arbre Phylogénétique » : L’arbre phyllogénétique est un outil qui permet de visualiser la façon dont les organismes vivants sont classés. Je vais ici vous présenter les grands groupes d’animaux marins et leur classification.",
    "« Glossaire » : Dictionnaire où vous retrouverai expliquer certains mots techniques utilisés dans les articles."
  ]
};

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
    id : 4,
    title : 'Pelagie, acalèphe brillante,',
    subTitle : 'Pelagia noctiluca',
    content : [
      'L’acalèphe brillante tire son nom de sa capacité à émettre sa propre lumière, on dit qu’elle est bioluminescente. Son ombrelle en forme de champignon mesure entre 7 et 17 cm, les quatre gros tentacules entre 10 et 15 cm et les plus fin peuvent mesurer jusqu’à un demi-mètre. Les verrues mauves que l’on retrouve sur cet organisme contiennent des cellules urticantes, les cnidocytes.',
      'La Pélagie se nourrit de crustacés, d’autres méduses et des fois de petits poissons qu’elle capture à l’aide de ses cnidocytes. Un film de mucus ramène les proies sous l’ombrelle où se trouve la cavité gastrique et où se passera la digestion.',
      'Cette espèce est celle que les baigneurs rencontrent le plus souvent en mer Méditerranée. Cependant <i>Pelagia noctiluca</i> est cosmopolite, on la retrouve un peu partout dans les mers et océans du globe. Elle nage le plus souvent près de la surface dans les premiers mètres de la colonne d’eau et affectionne les zones chaudes et tempérées.',
      'Statut UICN (liste rouge des espèces menacées) : NE : Non évalué..'],
    bibliography: [
      'ZIEMSKI Frédéric, GOY Jacqueline, SITTLER Alain-Pierre in : DORIS, 07/11/2020 : Pelagia noctiluca (Forsskål, 1775), <a href="https://doris.ffessm.fr/ref/specie/87">https://doris.ffessm.fr/ref/specie/87</a>',
      'Microplastic ingestion in jellyfish Pelagia noctiluca (Forsskal, 1775) in the North Atlantic Ocean, 2021. Marine Pollution Bulletin [en ligne]. Vol. 166, pp. 112266. [Consulté le 1 février 2022]. DOI 10.1016/j.marpolbul.2021.112266. Disponible à l’adresse : <a href="https://www-sciencedirect-coms.docadis.univ-tlse3.fr/science/article/pii/S0025326X21003003">https://www-sciencedirect-coms.docadis.univ-tlse3.fr/science/article/pii/S0025326X21003003</a>',
      'Pelagia noctiluca | DORIS, [sans date]. [en ligne]. [Consulté le 1 février 2022]. Disponible à l’adresse : <a href="https://doris.ffessm.fr/Especes/Pelagia-noctiluca-Pelagie-87">https://doris.ffessm.fr/Especes/Pelagia-noctiluca-Pelagie-87</a>',
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
      'La raison à cette drôle de posture vient du fait que la majorité des besoins alimentaires de la méduse sont comblés par des micro-algues présentes sur les tentacules. C’est pourquoi les tentacules sont déployés à l’horizontal pour maximiser l’exposition au soleil et ainsi la production d’énergie de la part des micro-algues.',
      'On retrouve <i>Cassiopea andromeda</i>  principalement de l’ouest de l’océan Indien à l’ouest de l’océan Pacifique. Elle vit dans les eaux calmes et relativement chaudes. Elle nage majoritairement dans les dix premiers mètres de la colonne d’eau, zone où la luminosité est la plus forte.',
      'Statut UICN (liste rouge des espèces menacées) : LC : peu concernée.'],
    bibliography: [
      'Cassiopea andromeda | DORIS, [sans date]. [en ligne]. [Consulté le 1 février 2022]. Disponible à l’adresse : <a href="https://doris.ffessm.fr/Especes/Cassiopea-andromeda-Meduse-a-l-envers-indo-pacifique-2417">https://doris.ffessm.fr/Especes/Cassiopea-andromeda-Meduse-a-l-envers-indo-pacifique-2417</a>',
      'LISA-ANN GERSHWIN, 2017. Méduses et autres organismes gélatineux. Ulmer. 24 rue de Mogador 75009 Paris.'
      ],
    img_article_header : 'bandeau méduses.png',
    img_article_1 : 'M_alenvers.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },{
    id : 6,
    title : 'La méduse immortelle,',
    subTitle : 'Turritopsis dohrnii',
    content : [
      '<i>Turritopsis dohrnii</i> a une ombrelle qui fait moins d’un centimètre de haut, en forme de dés à coudre et qui est bordée de nombreux tentacules très fin. Cette méduse est le premier organisme connu capable d’immortalité. Chez la plus part des organismes vivant, le vieillissement est unidirectionnel : les cellules sont programmées pour aller de la jeunesse à la vieillesse. L’immortalité de cette méduse est due à sa capacité à faire rajeunir ses cellules.', 
      'Les méduses possèdent plusieurs stades de vies. Quand elles sont jeunes elles vivent fixées et ne sont pas capables de se reproduire. Il s’agit de la phase polype. En grandissant elles atteignent le stade méduse, libre dans la colonne d’eau et capable de se reproduire. Quand une méduse Turritopsis meurt au lieu de se désintégrer comme la majorité des êtres vivants, ses cellules se réagrègent par un processus appelé transdifférenciation, et reforment un polype. Et c’est le début d’un nouveau cycle de vie. Pour le dire avec d’autres mots, c’est un peu comme si une grenouille à l’agonie voyait ses cellules se ré-agréger pour former un têtard.',
      'Il se trouve que le stress est un stimulant essentiel pour déclencher ce cycle, aucune méduse non stressée n’a été observée en train de se transdifférencier. De plus, des expériences ont montré que ce cycle nécessite une température d’au moins 22°C, et que si on refroidit l’eau, le cycle s’interrompt pour reprendre en cas de réchauffement. Cette capacité de résurrection semble être sans limite puisque des chercheurs ont obtenu au moins dix répétitions de ce cycle en deux ans chez un même organisme. Ce qui est d’autant plus incroyable c’est que la transdifférenciation est capable de démarrer à tous les stades de croissance de la méduse. Pas besoin d’être jeune ou adulte pour pouvoir ressusciter.',
      ' Originaire de méditerranée, <i>Turritopsis dohrnii</i>  a attiré l’attention de nombreux chercheurs car les mécanismes cellulaires lui permettant de rajeunir pourraient faire avancer la recherche contre le cancer. Pour plus aller plus loin sur les processus biologiques cellulaires derrière la transdifférenciation, je vous invite à jeter un œil aux sources bibliographiques citées en bas de cette page.',
      'Statut UICN (liste rouge des espèces menacées) : NE : Non évalué..'],
    bibliography: [
      '« Immortal » Jellyfish Swarm World’s Oceans, 2009. Animals [en ligne]. [Consulté le 16 février 2022]. Disponible à l’adresse : <a href="https://www.nationalgeographic.com/animals/article/immortal-jellyfish-swarm-oceans-animals">https://www.nationalgeographic.com/animals/article/immortal-jellyfish-swarm-oceans-animals</a>',
      'LISA-ANN GERSHWIN, 2017. Méduses et autres organismes gélatineux. Ulmer. 24 rue de Mogador 75009 Paris.',
      'MATSUMOTO, Yui, PIRAINO, Stefano et MIGLIETTA, Maria Pia, 2019. Transcriptome Characterization of Reverse Development in Turritopsis dohrnii (Hydrozoa, Cnidaria). G3: Genes|Genomes|Genetics [en ligne]. 16 octobre 2019. Vol. 9, n° 12, pp. 4127‑4138. [Consulté le 16 février 2022]. DOI 10.1534/g3.119.400487. Disponible à l’adresse : <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6893190/">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6893190/</a>',
      ],
    img_article_header : 'bandeau méduses.png',
    img_article_1 : 'Immortelle.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
 id : 7,
    title : 'La méduse œuf au plat,',
    subTitle : 'Cotylorhiza tuberculata',
    content : [
      'Cette méduse tire son nom de la forme de son ombrelle. Elle est de couleur blanchâtre sauf au centre où elle est bombée et jaune orangé. Celle-ci peut mesurer jusqu’à 40cm de circonférence.',
      'Sous cette ombrelle, il y a de nombreux tentacules terminés par de petits disques violets. Cette couleur est due à la présence d’algues unicellulaires dans les tissus de la méduse. Ces algues s’appellent des zooxanthelles. <i>Cotylorhiza tuberculata</i> vit en symbiose avec des algues dans ses tentacules, tout comme la méduse à l’envers <i>Cassiopea andromeda</i>.',
      'La symbiose c’est lorsque deux organismes ont une interaction bénéfique pour eux deux. Ce qui rend cette interaction tout particulière, c’est que les organismes impliqués sont incapables de vivre l’un sans l’autre. Ici il s’agit d’une endosymbiose car l’algue est située dans les tissus de la méduse. Dans cette interaction : l’algue va fournir à la méduse de la nourriture, et la méduse va fournir un abri à l’algue. <i>Cotylorhiza tuberculata</i> se nourrit de plancton de petite taille pour compléter les apports énergétiques apportés par les zooxanthelles.',
      'La méduse œuf au plat est endémique de Méditerranée. Cela signifie qu’on ne la retrouve qu’à cet endroit de la planète. Elle est sans danger pour l’homme, car très peu urticante.',
      'Statut UICN (liste rouge des espèces menacées) : NE : Non évalué.',],
    bibliography: [
      'LISA-ANN GERSHWIN, 2017. Méduses et autres organismes gélatineux. Ulmer. 24 rue de Mogador 75009 Paris.',
      'REGUIEG Aedwina, ZIEMSKI Frédéric, SITTLER Alain-Pierre in : DORIS, 30/11/2021 : Cotylorhiza tuberculata (Macri, 1778), https://doris.ffessm.fr/ref/specie/307',
      'STEVEN, WEINBERG, 2015. Découvrir la vie sous-marine Méditerranée. 2 rue du Marais - ZAC du Puits d’Ordet 73190 CHALLES-LES-EAUX FRance : GAP. ISBN 978-2-7417-0533-8.',
      'NATURELLE, Museum national d’Histoire, [sans date]. Cotylorhiza tuberculata (Macri, 1778). Inventaire National du Patrimoine Naturel [en ligne]. Disponible à l’adresse : https://inpn.mnhn.fr/espece/cd_nom/7400',
      ],
    img_article_header : 'bandeau méduses.png',
    img_article_1 : 'M_oeuf1.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  }
const title = 'Connaissance Abyssale';
const image_home_page = 'bandeau_site_internet.jpg';

export {title, NO_IMAGE, Article, APropos, articles, image_home_page, TYPE_ARTICLE, a_propos} ;
