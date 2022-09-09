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

export enum MODEL_ARTICLE {
  TYPE_0,
  TYPE_1
}

interface Article{
  id: number;
  modelArticle: MODEL_ARTICLE;
  title:string;
  subTitle?:string;
  content: string | Partie[];
  bibliography?:string;
  img_article_presentation:string;
  img_article_header?:string;
  img_article_1?:string;
  img_article_2?:string;
  types:TYPE_ARTICLE[]|string[];
}

interface Partie {
  img:  string | null;
  legendeImg : string | null;
  disposition : boolean | null;
  text: string | null;
}

interface APropos{
  title:string;
  content:string;
}

const a_propos: APropos = {
  title: "Bienvenue sur Connaissance Abyssale !",
  content : 
    "&#160;&#160;&#160;&#160;&#160;Je m’appelle Camille et je suis actuellement étudiante entre la première et la deuxième année du master Man And Biosphere (MAB) à l’université Paul Sabatier de Toulouse. Cette année de parenthèse dans mes études va me permettre d’approfondir mes connaissances sur le monde marin. Ce milieu étant généralement mal connu, j’ai décidé de vous le présenter à travers différents articles illustrés pour éveiller votre curiosité. J’espère pouvoir vous transmettre à travers les différentes rubriques de ce site, ma passion pour le monde marin !" +
    '<br><br>' + 
    "&#160;&#160;&#160;&#160;&#160;Les différentes rubriques sont les suivantes :" +
    '<br><br>' + 
    "&#160;&#160;&#160;&#160;&#160;« Protection et Conservation » : Aujourd’hui l’ensemble des écosystèmes est menacé et le monde marin n’échappe pas à cette généralité. Dans cette rubrique je vais vous présenter à travers des exemples concrets, ce que l’être humain a mis en place pour tenter de protéger et sauver la biodiversité marine." +
    '<br><br>' + 
    "&#160;&#160;&#160;&#160;&#160;« Les Curiosités » : Les animaux marins ont des caractéristiques qui leur sont propre et cela donne des formes et des couleurs extraordinaires. Je vais ici vous présenter des organismes qui me fascinent." +
    '<br><br>' + 
    "&#160;&#160;&#160;&#160;&#160;« Biomimétisme » : La nature est une source d’inspiration pour l’être humain depuis des milliers d’années. Le monde marin ne fait pas exception. Je vais vous présenter des inventions pour lesquelles l’humain s’est inspiré du fonctionnement des organismes marins." +
    '<br><br>' + 
    "&#160;&#160;&#160;&#160;&#160;« Si j’étais » : Dans cette rubrique je vais vous sensibiliser à la cause des organismes marins. On se sent plus facilement concernés pour la protection d’un mammifère terrestre (au hasard : lion, tigre, panda, ours polaire) que celle d’un animal marin. Pour accroître votre sensibilité au monde marin je vais vous expliquer comment serait votre vie si vous étiez l’un d’entre eux." +
    '<br><br>' + 
    "&#160;&#160;&#160;&#160;&#160;« Arbre Phylogénétique » : L’arbre phyllogénétique est un outil qui permet de visualiser la façon dont les organismes vivants sont classés. Je vais ici vous présenter les grands groupes d’animaux marins et leur classification." +
    '<br><br>' + 
    "&#160;&#160;&#160;&#160;&#160;« Glossaire » : Dictionnaire où vous retrouverez certains mots techniques utilisés dans les articles.",
};

const articles: Article[] = [
  {
    id : 0,
    modelArticle: MODEL_ARTICLE.TYPE_0,
    title : 'Article non trouvé',
    content : 'Nous n\'avons pas trouvé l\'article spécifié.',
    img_article_presentation : NO_IMAGE,
    types : [TYPE_ARTICLE.NO],
  },{
    id : 4,
    modelArticle: MODEL_ARTICLE.TYPE_0,
    title : 'Pelagie, acalèphe brillante,',
    subTitle : 'Pelagia noctiluca',
    content : 
      '&#160;&#160;&#160;&#160;&#160;L’acalèphe brillante tire son nom de sa capacité à émettre sa propre lumière, on dit qu’elle est bioluminescente. Son ombrelle en forme de champignon mesure entre 7 et 17 cm, les quatre gros tentacules entre 10 et 15 cm et les plus fin peuvent mesurer jusqu’à un demi-mètre. Les verrues mauves que l’on retrouve sur cet organisme contiennent des cellules urticantes, les cnidocytes.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;La Pélagie se nourrit de crustacés, d’autres méduses et des fois de petits poissons qu’elle capture à l’aide de ses cnidocytes. Un film de mucus ramène les proies sous l’ombrelle où se trouve la cavité gastrique et où se passera la digestion.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Cette espèce est celle que les baigneurs rencontrent le plus souvent en mer Méditerranée. Cependant <i>Pelagia noctiluca</i> est cosmopolite, on la retrouve un peu partout dans les mers et océans du globe. Elle nage le plus souvent près de la surface dans les premiers mètres de la colonne d’eau et affectionne les zones chaudes et tempérées.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Statut UICN (liste rouge des espèces menacées) : NE : Non évalué.',
    bibliography:
      'ZIEMSKI Frédéric, GOY Jacqueline, SITTLER Alain-Pierre in : DORIS, 07/11/2020 : Pelagia noctiluca (Forsskål, 1775), <a href="https://doris.ffessm.fr/ref/specie/87">https://doris.ffessm.fr/ref/specie/87</a>' +
      '<br><br>' + 
      'Microplastic ingestion in jellyfish Pelagia noctiluca (Forsskal, 1775) in the North Atlantic Ocean, 2021. Marine Pollution Bulletin [en ligne]. Vol. 166, pp. 112266. [Consulté le 1 février 2022]. DOI 10.1016/j.marpolbul.2021.112266. Disponible à l’adresse : <a href="https://www-sciencedirect-coms.docadis.univ-tlse3.fr/science/article/pii/S0025326X21003003">https://www-sciencedirect-coms.docadis.univ-tlse3.fr/science/article/pii/S0025326X21003003</a>' +
      '<br><br>' + 
      'Pelagia noctiluca | DORIS, [sans date]. [en ligne]. [Consulté le 1 février 2022]. Disponible à l’adresse : <a href="https://doris.ffessm.fr/Especes/Pelagia-noctiluca-Pelagie-87">https://doris.ffessm.fr/Especes/Pelagia-noctiluca-Pelagie-87</a>' +
      '<br><br>' + 
      'STEVEN, WEINBERG, 2015. Découvrir la vie sous-marine Méditerranée. 2 rue du Marais - ZAC du Puits d’Ordet 73190 CHALLES-LES-EAUX FRance : GAP. ISBN 978-2-7417-0533-8.',
    img_article_header : 'bandeau méduses.png',
    img_article_1 : 'M_piqueusemauve.png',
    img_article_presentation : 'M_piqueusemauve.png',
    types : [TYPE_ARTICLE.CURIOSITE]
  },{
    id : 5,
    modelArticle: MODEL_ARTICLE.TYPE_0,
    title : 'La méduse à l’envers Indo-Pacifique,',
    subTitle : 'Cassiopea andromeda',
    content :
      '&#160;&#160;&#160;&#160;&#160;Cette espèce de méduse a la capacité de nager mais elle est la plus part du temps le dos posé sur le sédiment. En effet, cet organisme a la particularité de vivre à l’envers : ombrelle sur le fond et les tentacules dirigés vers la surface.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;La raison à cette drôle de posture vient du fait que la majorité des besoins alimentaires de la méduse sont comblés par des micro-algues présentes dans ses tentacules. C’est pourquoi les tentacules sont déployés à l’horizontal pour maximiser l’exposition au soleil et ainsi la production d’énergie de la part des micro-algues.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;On retrouve <i>Cassiopea andromeda</i>  principalement de l’ouest de l’océan Indien à l’ouest de l’océan Pacifique. Elle vit dans les eaux calmes et relativement chaudes. Elle nage majoritairement dans les dix premiers mètres de la colonne d’eau, zone où la luminosité est la plus forte.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Statut UICN (liste rouge des espèces menacées) : LC : peu concernée.',
    bibliography:
      'Cassiopea andromeda | DORIS, [sans date]. [en ligne]. [Consulté le 1 février 2022]. Disponible à l’adresse : <a href="https://doris.ffessm.fr/Especes/Cassiopea-andromeda-Meduse-a-l-envers-indo-pacifique-2417">https://doris.ffessm.fr/Especes/Cassiopea-andromeda-Meduse-a-l-envers-indo-pacifique-2417</a>' +
      '<br><br>' + 
      'LISA-ANN GERSHWIN, 2017. Méduses et autres organismes gélatineux. Ulmer. 24 rue de Mogador 75009 Paris.',
    img_article_header : 'bandeau méduses.png',
    img_article_presentation : 'M_alenvers.png',
    img_article_1 : 'M_alenvers.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },{
    id : 6,
    modelArticle: MODEL_ARTICLE.TYPE_0,
    title : 'La méduse immortelle,',
    subTitle : 'Turritopsis dohrnii',
    content :
      '&#160;&#160;&#160;&#160;&#160;<i>Turritopsis dohrnii</i> a une ombrelle qui fait moins d’un centimètre de haut, en forme de dés à coudre et qui est bordée de nombreux tentacules très fin. Cette méduse est le premier organisme connu capable d’immortalité. Chez la plus part des organismes vivants, le vieillissement est unidirectionnel : les cellules sont programmées pour aller de la jeunesse à la vieillesse. L’immortalité de cette méduse est due à sa capacité à faire rajeunir ses cellules.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;En général, les méduses possèdent plusieurs stades de vies. Quand elles sont jeunes elles vivent fixées et ne sont pas capables de se reproduire. Il s’agit de la phase polype. En grandissant elles atteignent le stade méduse, libre dans la colonne d’eau et capable de se reproduire. Quand une méduse Turritopsis meurt, au lieu de se désintégrer comme la majorité des êtres vivants, ses cellules se réagrègent par un processus appelé transdifférenciation et reforment un polype. Et c’est le début d’un nouveau cycle de vie. Pour le dire avec d’autres mots, c’est un peu comme si une grenouille à l’agonie voyait ses cellules se ré-agréger pour former un têtard.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Il se trouve que le stress est un stimulant essentiel pour déclencher ce cycle, aucune méduse non stressée n’a été observée en train de se transdifférencier. De plus, des expériences ont montré que ce cycle nécessite une température d’au moins 22°C, et que si on refroidit l’eau, le cycle s’interrompt pour reprendre en cas de réchauffement. Cette capacité de résurrection semble être sans limite puisque des chercheurs ont obtenu au moins dix répétitions de ce cycle en deux ans chez un même organisme. Ce qui est d’autant plus incroyable, c’est que la transdifférenciation est capable de démarrer à tous les stades de croissance de la méduse. Pas besoin d’être jeune ou adulte pour pouvoir ressusciter.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Originaire de méditerranée, <i>Turritopsis dohrnii</i>  a attiré l’attention de nombreux chercheurs car les mécanismes cellulaires lui permettant de rajeunir pourraient faire avancer la recherche contre le cancer. Pour plus aller plus loin sur les processus biologiques cellulaires derrière la transdifférenciation, je vous invite à jeter un œil aux sources bibliographiques citées en bas de cette page.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Statut UICN (liste rouge des espèces menacées) : NE : Non évalué.',
    bibliography:
      '« Immortal » Jellyfish Swarm World’s Oceans, 2009. Animals [en ligne]. [Consulté le 16 février 2022]. Disponible à l’adresse : <a href="https://www.nationalgeographic.com/animals/article/immortal-jellyfish-swarm-oceans-animals">https://www.nationalgeographic.com/animals/article/immortal-jellyfish-swarm-oceans-animals</a>' +
      '<br><br>' + 
      'LISA-ANN GERSHWIN, 2017. Méduses et autres organismes gélatineux. Ulmer. 24 rue de Mogador 75009 Paris.' +
      '<br><br>' + 
      'MATSUMOTO, Yui, PIRAINO, Stefano et MIGLIETTA, Maria Pia, 2019. Transcriptome Characterization of Reverse Development in Turritopsis dohrnii (Hydrozoa, Cnidaria). G3: Genes|Genomes|Genetics [en ligne]. 16 octobre 2019. Vol. 9, n° 12, pp. 4127‑4138. [Consulté le 16 février 2022]. DOI 10.1534/g3.119.400487. Disponible à l’adresse : <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6893190/">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6893190/</a>',
    img_article_header : 'bandeau méduses.png',
    img_article_presentation : 'Immortelle.png',
    img_article_1 : 'Immortelle.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },{
    id : 7,
    modelArticle: MODEL_ARTICLE.TYPE_0,
    title : 'La méduse œuf au plat,',
    subTitle : 'Cotylorhiza tuberculata',
    content : 
      '&#160;&#160;&#160;&#160;&#160;Cette méduse tire son nom de la forme de son ombrelle. Elle est de couleur blanchâtre sauf au centre où elle est bombée et jaune orangé. Celle-ci peut mesurer jusqu’à 40cm de circonférence.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Sous cette ombrelle, il y a de nombreux tentacules terminés par de petits disques violets. Cette couleur est due à la présence d’algues unicellulaires dans les tissus de la méduse. Ces algues s’appellent des zooxanthelles. <i>Cotylorhiza tuberculata</i> vit en symbiose avec des algues dans ses tentacules, tout comme la méduse à l’envers <i>Cassiopea andromeda</i>.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;La symbiose c’est lorsque deux organismes ont une interaction qui est bénéfique pour eux deux. Ce qui rend cette interaction tout particulière, c’est que les organismes impliqués sont incapables de vivre l’un sans l’autre. Ici il s’agit d’une endosymbiose car l’algue est située dans les tissus de la méduse. Dans cette interaction : l’algue va fournir à la méduse de la nourriture, et la méduse va fournir un abri à l’algue. <i>Cotylorhiza tuberculata</i> se nourrit de plancton de petite taille pour compléter les apports énergétiques apportés par les zooxanthelles.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;La méduse œuf au plat est endémique de Méditerranée. Cela signifie qu’on ne la retrouve qu’à cet endroit de la planète. Elle est sans danger pour l’homme, car très peu urticante.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Statut UICN (liste rouge des espèces menacées) : NE : Non évalué.',
    bibliography:
      'LISA-ANN GERSHWIN, 2017. Méduses et autres organismes gélatineux. Ulmer. 24 rue de Mogador 75009 Paris.' +
      '<br><br>' + 
      'REGUIEG Aedwina, ZIEMSKI Frédéric, SITTLER Alain-Pierre in : DORIS, 30/11/2021 : Cotylorhiza tuberculata (Macri, 1778), https://doris.ffessm.fr/ref/specie/307' +
      '<br><br>' + 
      'STEVEN, WEINBERG, 2015. Découvrir la vie sous-marine Méditerranée. 2 rue du Marais - ZAC du Puits d’Ordet 73190 CHALLES-LES-EAUX FRance : GAP. ISBN 978-2-7417-0533-8.' +
      '<br><br>' + 
      'NATURELLE, Museum national d’Histoire, [sans date]. Cotylorhiza tuberculata (Macri, 1778). Inventaire National du Patrimoine Naturel [en ligne]. Disponible à l’adresse : https://inpn.mnhn.fr/espece/cd_nom/7400',
    img_article_header : 'bandeau méduses.png',
    img_article_presentation : 'M_oeuf1.png',
    img_article_1 : 'M_oeuf1.png',
    types : [TYPE_ARTICLE.CURIOSITE],
  },{
    id : 8,
    modelArticle: MODEL_ARTICLE.TYPE_0,
    title : 'La Céphée,',
    subTitle : 'Cephea cephea',
    content : 
      '&#160;&#160;&#160;&#160;&#160;L’ombrelle mesure entre 50 et 60cm de diamètre et présente de nombreuses aspérités qui la font ressembler à une couronne. Elle se nourrit de crevettes, de poissons, de zooplanctons et d’algues. La durée de vie est courte entre 3 et 6 mois.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;En plus d’avoir une apparence unique, cette méduse a la capacité d’émettre de la lumière. Elle produit de la lumière lorsqu’elle est touchée par quelquechose car elle se sent attaquée. On pense que ce mécanisme de défense est utilisé pour éblouir ses prédateurs.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Cette méduse fait parti des espèces les plus venimeuses connues, pourtant elle ne représente pas un danger pour l’humain. En Asie du Sud-Est elle est même récoltée pour être consommée.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Cette espèce affectionne les eaux froides et sombres. Elle vit principalement dans les eaux profondes le jour et remonte à la surface pendant la nuit.  On la retrouve dans les eaux de différentes mers et océans de la planète comme l’océan Indo-Pacifique, la Mer Rouge, au large de l‘Atlantique.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Statut UICN (liste rouge des espèces menacées) : NE : non évalué.',
    bibliography: 
      '21 Crown Jellyfish Facts You’ll Never Forget. Disponible à l’adresse : https://kidadl.com/animal-facts/crown-jellyfish-facts' +
      '<br><br>' + 
      'Cephea cephea, Crowned jellyfish : fisheries. Disponible à l’adresse : https://www.sealifebase.ca/summary/Cephea-cephea.html' +
      '<br><br>' + 
      'Crown Jellyfish. Exotic Aquaculture. Disponible à l’adresse : https://www.exoticaquaculture.com/crown-jellyfish',
    img_article_header : 'bandeau méduses.png',
    img_article_1 : 'cephea cephea.jpg',
    img_article_presentation : 'cephea cephea.jpg',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
    id : 9,
    title : 'La méduse cristal,',
    modelArticle: MODEL_ARTICLE.TYPE_0,
    subTitle : 'Aequorea victoria',
    content : 
      '&#160;&#160;&#160;&#160;&#160;Cet organisme est essentiellement transparent, d’où son appellation sous le nom de méduse cristal. Son ombrelle est en forme de dôme plat, avec une centaine de canaux rayonnants et d’où partent jusqu’à 150 tentacules.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Cette méduse consomme des larves, du plancton et des crustacés. Elle utilise ses tentacules collants pour injecter du venin dans le corps de la proie. Elle est capable de s’attaquer à des proies d’environ la moitié de sa propre taille. La durée de vie du stade adulte (méduse) est de six mois, du printemps à l’automne. <i>Aequorea victoria</i> vie essentiellement près de la côte ouest de l’Amérique du Nord.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Cette espèce de méduse a été découverte en 1902. Ce qui a attiré l’attention des scientifiques c’est sa capacité à produire des flash lumineux à la base de ses tentacules. Même si la fonction biologique de cette émission de lumière reste toujours inconnue, cet organisme a été largement étudié pendant plus d’un siècle. Notamment une des molécules impliquée dans ce phénomène appelée « protéine fluorescente verte » ou GFP.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;C’est une molécule qui est étudiée à travers le monde de la biologie cellulaire aujourd’hui et qui permet au chercheur de localiser et étudier les gènes du monde vivant. Cette molécule présente de nombreuses applications médicales comme par exemple : elle permet de  marquer les cellules cancéreuses, de cartographier la propagation du virus du sida ou encore d’examiner comment le cerveau traduit les signaux sensoriels en réponses motrices. Les découvreurs de cette molécule, Osamu Shimomura et ses collègues, ont remporté le prix Nobel de chimie en 2008 pour leurs travaux sur la GFP.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Depuis le début des années 60, et pendant plusieurs décennies, la méduse <i>Aequorea victoria</i>  a été intensément récoltée.  Aucune étude n’a été faite sur l’état de la population de cette espèce. Il est donc difficile d’affirmer si <i>Aequorea victoria</i>  a fortement souffert de tous les prélèvements qui ont été fait, et dans quel état est la population aujourd’hui. À l’heure actuelle, aucun effort de conservation n’est mis en place pour cet organisme.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Statut UICN (liste rouge des espèces menacées) : NE : non évalué.',
    bibliography: 
      '&#160;&#160;&#160;&#160;&#160;Bioluminescence of Aequorea. Disponible à l’adresse : https://faculty.washington.edu/cemills/Aequorea.html' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Crystal Structure of the Aequorea victoria Green Fluorescent Protein on JSTOR. Disponible à l’adresse : https://www-jstor-org-s.docadis.univ-tlse3.fr/stable/2891419' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Green Fluorescent Protein - GFP Timeline. Disponible à l’adresse : https://www.conncoll.edu/ccacad/zimmer/GFP-ww/timeline.html' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;JELLYFISH, BioExpedition |, 2012. Aequorea Victoria. BioExpedition. Disponible à l’adresse : https://www.bioexpedition.com/aequorea-victoria/' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;LISA-ANN GERSHWIN, 2017. Méduses et autres organismes gélatineux. Ulmer. 24 rue de Mogador 75009 Paris.',
    img_article_header : 'bandeau méduses.png',
    img_article_1 : 'M_aequorea victoria.png',
    img_article_presentation: 'M_aequorea victoria.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
    id : 10,
    modelArticle: MODEL_ARTICLE.TYPE_0,
    title : 'La méduse Aurélie,',
    subTitle : 'Aurelia aurita',
    content :
      '&#160;&#160;&#160;&#160;&#160;<i> Aurelia aurita</i>  est l’organisme modèle souvent utilisé dans les cours de biologie pour parler des méduses. On l’appelle méduse commune, mais aussi méduse bleue ou méduse lune. Elle doit ses surnoms à sa couleur bleutée translucide. ' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Cet organisme est facilement identifiable la présence de quatre fers à cheval clairs qui sont situés sous son ombrelle. Il s’agit des gonades. Ce sont des organes sexuels qui produisent les gamètes (spermatozoïdes ou ovules). L’ombrelle peut mesurer entre 5 et 40 cm et est bordée de nombreux tentacules fins qui peuvent être au nombre de 1200. La bouche, située sous l’ombrelle, est entourée de quatre bras buccaux plus ou moins développés. Comme chez les autres méduses, la bouche, unique orifice digestif, sert aussi d’anus. Le régime alimentaire de cette méduse est composé principalement de larves de hareng et de petits crustacés. Elle peut également manger d’autres méduses et même ses propres larves. Afin d’assurer sa croissance et sa reproduction, une méduse doit consommer plusieurs fois son poids en nourriture par jour. C’est pourquoi, quand elle est jeune cette méduse peut consommer jusqu’à 60 larves de harengs par jours.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;<i>Aurelia aurita</i> vie dans toutes les mers du globe excepté dans les eaux froides des zones polaires, on dit qu’elle est cosmopolite.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Du fait que cette espèce peut être maintenue facilement en aquarium et qu’elle est à la base de la chaîne alimentaire, elle fait l’objet de nombreuses études. Les chercheurs partent du principe que si des effets sont retrouvés chez <i>Aurelia aurita</i>, alors ils pourraient avoir des effets en cascade dans le reste de l’écosystème. Dans cet article j’ai décidé de vous présenter deux types d’études qui ont été menée sur <i>Aurélia aurita</i> : l’influence des paramètres environnementaux et celle des microplastiques sur cet organisme.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Il faut savoir que le cycle de vie de cet animal est rythmé par différents paramètres du milieu, comme la température ou la salinité. Il a été montré que la température peut accélérer ou inhiber certains stades de vie d’<i>Aurélia aurita</i>. Dans le cadre d’un réchauffement global des mers et océans, si la température de l’eau atteint le seuil auquel la croissance de cette méduse est inhibée, cela pourrait s’avérer fatal pour l’espèce.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;D’autres études se sont intéressées à l’effet des microplastiques à court terme sur <i>Aurelia aurita</i>. Ce que l’on appelle microplastiques ce sont des particules de plastiques mesurant mois de cinq millimètres. Il s’agit d’un sujet très important car d’ici 2060, on estime que 265 millions de tonnes de plastique mal géré seront générées chaque année, dont 91 % se retrouveront dans  les océans. Le microplastique présent dans les mers et océans a deux origines : la dégradation de gros morceaux de plastique ou le rejet de microplastiques présents dans les cosmétiques. Cette forme de pollution représente un problème planétaire car il a été signalé que près de 700 espèces marines dans le monde ingèrent ou s’emmêlent dans des débris marins, dont 92 % sont des plastiques. Dans le cadre d’une de ces études il a été montré que la méduse Aurélie peut capturer les microbilles de polystyrène vierge mais aussi les reconnaitre comme des «particules non alimentaires» en les rejetant. Il important de souligner que les microbilles vierges utilisées dans l’étude sont moins nocives que certains microplastiques vieillis retrouvés dans les océans.  Aujourd’hui les études des microplastiques sont faites sur le cours terme, aucune étude n’a montré les effets d’une longue exposition à ces polluants. Des études complémentaires sont donc nécessaires.' +
      '<br><br>' + 
      '&#160;&#160;&#160;&#160;&#160;Statut UICN (liste rouge des espèces menacées) : LC : peu concernée.',
      bibliography: 
        'MARAN Vincent, SCAPS Patrick, GOY Jacqueline, SITTLER Alain-Pierre, ZIEMSKI Frédéric in : DORIS, 05/12/2020 : Aurelia aurita (Linnaeus, 1758), https://doris.ffessm.fr/ref/specie/129' +
        '<br><br>' + 
        '(La méduse Aurélie - Oceanopolis [sans date])COSTA, Elisa, GAMBARDELLA, Chiara, PIAZZA, Veronica, GRECO, Giuliano, LAVORANO, Silvia, BELTRANDI, Martina, BONGIOVANNI, Elisabetta, GNONE, Guido, FAIMALI, Marco et GARAVENTA, Francesca, 2015. Effect of neurotoxic compounds on ephyrae of Aurelia aurita jellyfish. Hydrobiologia [en ligne]. 1 octobre 2015. Vol. 759, n° 1, pp. 75‑84. ' +
        '<br><br>' + 
        'La méduse Aurélie - Oceanopolis, [sans date]. Océanopolis [en ligne]. [Consulté le 8 avril 2022]. Disponible à l’adresse : https://www.oceanopolis.com/nos-animaux/la-meduse' +
        '<br><br>' + 
        'La méduse Aurélie : fiche d’identité, lieu de vie, alimentation, taille, [sans date]. Aquarium Nausicaa : Centre National de la Mer à Boulogne-sur-Mer [en ligne]. ' +
        '<br><br>' + 
        'Limited ingestion, rapid egestion and no detectable impacts of microbeads on the moon jellyfish, Aurelia aurita, 2020. Marine Pollution Bulletin [en ligne]. Vol. 156, pp. 111208. ' +
        '<br><br>' + 
        'SOKOŁOWSKI, Adam, BRULIŃSKA, Dominika, OLENYCZ, Michał et WOŁOWICZ, Maciej, 2016. Does temperature and salinity limit asexual reproduction of Aurelia aurita polyps (Cnidaria: Scyphozoa) in the Gulf of Gdańsk (southern Baltic Sea)? An experimental study. Hydrobiologia [en ligne]. 1 juin 2016. Vol. 773, n° 1, pp. 49‑62. ' +
        '<br><br>' + 
        'SUKHOPUTOVA, A. V. et KRAUS, Yu. A., 2017. Environmental factors inducing the transformation of polyp into medusae in Aurelia aurita (Scyphozoa). Russian Journal of Developmental Biology [en ligne]. mars 2017. Vol. 48, n° 2, pp. 106‑116. ',
      img_article_header : 'bandeau méduses.png',
    img_article_presentation : 'M_Aurelie.png',   
    img_article_1 : 'M_Aurelie.png',
    types : [TYPE_ARTICLE.CURIOSITE, TYPE_ARTICLE.LA_UNE],
  },{
    id : 11,
    modelArticle: MODEL_ARTICLE.TYPE_1,
    title : 'Qu’est-ce que la classification ?',
    img_article_header: 'Bandeau.png',
    img_article_presentation: 'Bandeau.png',
    content : 
    [      
      // Partie 1
      {
        img: null,
        legendeImg: null,
        disposition: false,
        text : 
          '&#160;&#160;&#160;&#160;&#160;Cet article va servir de préambule à la rubrique « Arbre Phylogénétique ». Je vais y définir ce qu’est la classification du vivant, pour que vous puissiez vous approprier plus facilement le contenu qui en parlera.<br>' +
          '<br><br>' + 
          '&#160;&#160;&#160;&#160;&#160;Pourquoi ce besoin de classer ?<br>' +
          'Tout simplement pour pouvoir parler de façon claire du monde du vivant. Comme le dit Professeur Lecointre : « Si vous voulez parler de la nature là dehors, et que chaque arbre porte un prénom, chaque mouche porte un prénom, vous ne pourriez pas parler de la nature de manière générale ». Il y a donc une nécessité de créer des groupes pour pouvoir en parler.<br>' +
          'Quand on parle d’un organisme et que l’on veut le placer sur l’arbre du vivant, on va jouer aux poupées russes. Pour chaque organisme, on attribue une série d’étiquettes qui correspondent aux différentes boîtes dans lesquelles cet organisme est rangé. Ces boîtes sont les niveaux hiérarchiques de la classification scientifique du monde vivant. La plus petite est celle de l’espèce est la plus grande celle du règne. Entre, on a tout un ensemble de boîtes qui forment une pyramide. Les sept principales boîtes sont les suivantes : Espèce – Genre – Famille – Ordre – Classe – Embranchement -  Règne.' + 
          '<br><br>' + 
          '&#160;&#160;&#160;&#160;&#160;La classification du vivant repose sur la phylogénie. Issue des mots grecques phylo- et -genesis, il s’agit de la science qui explique les relations de parentés entre les espèces. On construit alors des arbres phylogénétiques où les branches représentent ces relations. Plus le nombre de croisements de branches (les nœuds) entre deux espèces est important, plus elles sont éloignées.<br>' +
          'Pour construire ces arbres, on regarde les relations de parentés entre les espèces en se demandant qui est le plus proche cousin de qui. La réponse à ce questionnement repose sur différents critères, dont les principaux sont morphologiques et génétique. Il en existe d’autres tels que le comportement mais ils sont moins fiables. La classification du monde du vivant est en constante évolution avec les critères qui changent avec les avancées technologiques.' + 
          '<br><br>' + 
          '&#160;&#160;&#160;&#160;&#160;Maintenant que nous avons défini l’outil qui va nous permettre de parler de parenté entre les différents organismes, nous allons s’intéresser à la classification des animaux marins.<br>' +
          'Sur ce site, j’ai décidé de vous présenter exclusivement la classification des animaux marins. Dans cet article, nous allons aborder succinctement les différents embranchements de cet arbre. Dans les prochains articles de la rubrique « Arbre Phylogénétique », je viendrai parler plus en détail de chacun de ces embranchements.'
      },
      // Partie 2
      {
        img: 'ArbreMondeMarin.png',
        legendeImg: 'Arbre phylogénétique représentant la classification des animaux marins.',
        disposition: false,
        text: 
            '&#160;&#160;&#160;&#160;&#160;L’arbre dont nous allons parler est illustré ci-dessus. Ce qui rend chaque embranchement unique est l’acquisition de certains caractères communs qui sont ici numérotées. Ces caractères s’appellent des synapomorphies.<br>' +
            'Tout d’abord, le point commun à tous ces organismes est qu’ils sont constitués de plusieurs cellules (1).  Les Eponges sont des animaux fixés au substrat qui filtrent l’eau de mer. Les Placozoaires sont des animaux aplatis  sans organes, seulement six types de cellules  ayant chacune un rôle différent. Ces deux premiers embranchements sont les plus simples en termes de complexité du corps de l’organisme.<br>' + 
            'Ensuite, vient l’embranchement des Cnidaires où on trouve notamment les méduses et le corail qui partagent l’acquisition de cellules urticantes : les cnidocytes (2).<br>' +
            'Tous les organismes se trouvant après le nœud n°3 ont un corps avec une symétrie gauche-droite, appelée symétrie bilatérale. Parmi les embranchements suivant le nœud n°3, certains de ces animaux ont la bouche qui se forme avant l’anus durant le développement de l’embryon (4). Chacun de ces embranchements possède ces synapomorphies : les Mollusques comme les nudibranches et pieuvres ont un corps mou (5) ; les Annélides ont aussi un corps mou mais organisé en segments en forme d’anneau (6) ; enfin ce qui caractérise les Arthropodes comme les crabes et araignées de mer est l’acquisition d’un squelette externe et la réalisation de mues au cours de la vie de l’animal (7).<br>' + 
            'Quant aux organismes qui se trouvent après le nœud n°8, ils ont la bouche qui se forme après l’anus.  Parmi eux, les Echinodermes, comme les étoiles de mer et les oursins, partagent le fait d’avoir une symétrie en cinq (pentaradié) et des podia, qui sont des petits pieds à ventouses.<br>' + 
            'Ensuite, les organismes situés après le nœud n°10 possède une colonne vertébrale ou une de ses formes ancestrale appelée la chorde. Les céphalocordés ont la chorde en avant de la bouche (11).  Les Tuniciers sont des animaux fixés qui ressemblent à des éponges, cependant ceux-ci possèdent une corde ainsi que deux siphons pour filtrer l’eau de mer (12).<br>' +
            'Certains organismes ont une chorde qui s’est développée en vertèbres (13). Parmi ces animaux, certains ont un squelette cartilagineux (14) et les autres ont un squelette osseux (15).  Enfin, les deux dernières synapomorphies sont celles des nageoires rayonnées (16) pour les Poissons osseux et celle des quatre membres (17) pour les Tétrapodes.'
      }
    ],
    types : [TYPE_ARTICLE.ARBRE_PHYLO],
  }
];
const title = 'Connaissance Abyssale';
const image_home_page = 'bandeau_site_internet.jpg';

export {title, NO_IMAGE, Article, APropos, articles, image_home_page, TYPE_ARTICLE, a_propos} ;
