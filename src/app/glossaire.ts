const NO_IMAGE = 'img0';

const glossaire = [
  {
    word : 'Patate',
    definition : 'La pomme de terre ou patate (langage familier, canadianisme et belgicisme), est un tubercule comestible produit par l’espèce Solanum tuberosum, appartenant à la famille des solanacées. Le terme désigne également la plante elle-même, plante herbacée, vivace par ses tubercules mais toujours cultivée comme une culture annuelle. La pomme de terre est une plante qui réussit dans la plupart des sols, mais elle préfère les sols légers légèrement acides. La plante est sujette aux maladies dans des sols calcaires ou manquant d’humus1. La pomme de terre est originaire de la cordillère des Andes (Pérou), dans le Sud-Ouest de l’Amérique du Sud où son utilisation remonte à environ 8 000 ans. Introduite en Europe vers la fin du xvie siècle à la suite de la découverte de l’Amérique par les conquistadors espagnols, elle s’est rapidement diffusée dans le monde et est en 2015 cultivée dans plus de 150 pays sous pratiquement toutes les latitudes habitées. Elle est une source importante de glucides, qui se présentent principalement sous forme de féculeN 1, et selon son mode de cuisson elle peut apporter des quantités notables de protéines et de vitamines. Ses qualités nutritives et sa facilité de culture font qu’elle est devenue l’un des aliments de base de l’humanité : elle figure parmi les légumes et féculents les plus consommés et est la principale denrée alimentaire non céréalière du monde. Cultivée et consommée localement, relativement peu commercialisée sur le marché mondial sous sa forme crue, elle est recommandée par l’ONU pour atteindre la sécurité alimentaire2. C’est aussi la culture alimentaire la plus productive, produisant plus de matière sèche à l’hectare que les céréales ; 85 % de la matière sèche produite par la plante est comestible pour l’homme contre environ 50 % pour les céréales2. Le rendement moyen est d’environ 17 tonnes à l’hectare au niveau mondial, mais se situe entre quarante et cinquante tonnes dans certains pays développés d’Amérique du Nord et d’Europe occidentale. La pomme de terre reste sous-utilisée dans certains pays du Tiers Monde, notamment en Afrique subsaharienne, mais globalement sa consommation progresse dans les pays en développement, tandis que dans les pays développés elle tend à diminuer et à basculer de plus en plus vers des formes transformées (produits appertisés, déshydratés ou surgelés). La fécule de pomme de terre a donné naissance à une industrie de transformation, la féculerie, aux multiples débouchés dans les secteurs agro-alimentaire, cosmétique, pharmaceutique et industriel. Compte tenu de son importance économique, de nombreuses études scientifiques sur la pomme de terre et les espèces apparentées, notamment dans le domaine de la génétique, sont menées par des institutions publiques ou privées de différents pays, coordonnées au niveau mondial, entre autres, par le Centre international de la pomme de terre.',
    img : 'img1.png'
  },
  {
    word : 'Rhododendron',
    definition : 'Les rhododendrons ou azalées (Rhododendron) forment un genre de plantes appartenant à la famille des Éricacées. À l\'exception des groupes tropicaux Azaleastrum et Vireya, les rhododendrons sont essentiellement rustiques. On les rencontre dans les régions montagneuses, telles que les Alpes, les Pyrénées, le Caucase, les Carpates et l\'Himalaya. Beaucoup sont originaires de Chine et du Japon, et beaucoup se sont répandus en Laponie et en Sibérie. Les rhododendrons se rencontrent aussi dans les régions forestières d\'Inde et de Birmanie.',
    img : null
  },
  {
    word : 'fascicule',
    definition : 'En médecine, le terme de fasciculation désigne la contraction brève d\'un groupe de fibres musculaires constitutives d\'une unité motrice, c\'est-à-dire d\'un fascicule musculaire. Ce phénomène indolore et indépendant de la volonté se manifeste en périphérie du muscle concerné par un léger mouvement transmis à la peau, habituellement sans déplacement articulaire. Tous les muscles squelettiques peuvent être le siège de fasciculations qui, si elles deviennent abondantes et généralisées peuvent devenir un symptôme perturbant la qualité de vie.',
    img : 'img2.png'
  },
  {
    word : 'plagiat',
    definition : 'Le plagiat est une faute d\'ordre moral, civil ou commercial, qui peut être sanctionnée au pénal. Elle consiste à copier un auteur ou accaparer l\'œuvre d\'un créateur dans le domaine des arts sans le citer ou le dire, ainsi qu\'à fortement s\'inspirer d\'un modèle que l\'on omet, délibérément ou par négligence, de désigner. Il est souvent assimilé à un vol immatériel. Certains1 opèrent une distinction entre le plagiat, emprunt grossier, et le « démarquage », où le texte subit des modifications variées pour brouiller les pistes. Le « plagiaire » est celui qui s\'approprie indûment ou frauduleusement tout ou partie d\'une œuvre littéraire, technique ou artistique (et certains étendent ceci — par extension — à un style, des idées, ou des faits). Le plagiat diffère de l\'art du pastiche, qui consiste à imiter ou à calquer les codes ou les figures d\'expression d\'un auteur, dans un but d\'ironie, d\'humour ou de dérision.',
    img : null
  },
  {
    word : 'Chat',
    definition : 'Le Chat domestique (Felis silvestris catus) est la sous-espèce issue de la domestication du Chat sauvage (Felis silvestris), mammifère carnivore de la famille des Félidés. Il est l’un des principaux animaux de compagnie et compte aujourd’hui une cinquantaine de races différentes reconnues par les instances de certification. Dans de très nombreux pays, le chat entre dans le cadre de la législation sur les carnivores domestiques à l’instar du chien et du furet. Essentiellement territorial, le chat est un prédateur de petites proies comme les rongeurs ou les oiseaux. Les chats ont diverses vocalisations dont les ronronnements, les miaulements, les feulements ou les grognements, bien qu’ils communiquent principalement par des positions faciales et corporelles et des phéromones.',
    img : 'img1.png'
  },
  {
    word : 'brownie',
    definition : 'Le brownie est un gâteau au chocolat, fondant par endroits, cuit au four. Un glaçage peut être ensuite déposé sur sa surface. Sa crème de préparation peut également être mangée sans être cuite.',
    img : null
  },
  {
    word : 'Orang-outan',
    definition : 'Les Orangs-outans forment un genre (Pongo) appartenant à la super-famille des Hominoïdes et à l\'infra-ordre des Simiiformes. Ce sont des grands singes diurnes, au pelage clairsemé de couleur rouille à orange foncé, qui comme les autres hominoïdes, ne possèdent pas de queue. Ils sont endémiques des forêts tropicales des îles de Sumatra et Bornéo, territoires partagés entre l\'Indonésie et la Malaisie. Le genre Pongo comprend trois taxons distincts qui se différencient difficilement par leur morphologie mais qui occupent des aires de répartition différentes. Les orangs-outans de Bornéo sont légèrement plus petits que les deux autres espèces, orangs-outans de Sumatra et orangs-outans de Tapanuli, qui se répartissent toutes les deux à Sumatra, au nord et au sud du lac Toba. Ce sont les seuls grands singes à ne pas vivre en groupe. Les mâles comme les femelles sont solitaires, mais ces dernières peuvent vivre accompagnées de leur petit, qui reste avec elles pendant ses premières années de vie. Sévèrement menacées par la destruction de leur habitat au profit des activités humaines, les espèces d\'orangs-outans sont toutes les trois classées « en danger critique d\'extinction » et font l\'objet de programmes de conservation.',
    img : 'img3.png'
  },
  {
    word : 'Anémone',
    definition : 'Les anémones (genre Anemone L.) sont des plantes à fleurs de la famille des Renonculacées qui poussent dans les zones tempérées des deux hémisphères. L\'anémone des fleuristes (Anemone coronaria) est appréciée et sélectionnée par les horticulteurs pour ses fleurs aux couleurs vives, notamment sous le nom d\'anémone de Caen et sa forme améliorée par l\'agronomie, la tétranémone1.',
    img : null
  },
  {
    word : 'Civique',
    definition : 'Le service civique est un dispositif français d\'encouragement à l\'engagement de citoyenneté et de soutien public à celle-ci, créé par la loi du 10 mars 20101 par Martin Hirsch. Il est entré en vigueur le 13 mai 20101, il a pour objectif de renforcer la cohésion nationale et de favoriser la mixité sociale et offre la possibilité aux jeunes de 16 à 25 ans de s\'engager pour une durée de 6 à 12 mois dans une mission d\'intérêt général.',
    img : 'img2.png'
  },
  {
    word : 'Remblai',
    definition : 'Un barrage en remblai est un barrage constitué d\'un matériau meuble, qu\'il soit très fin ou très grossier (enrochements).',
    img : null
  },
  {
    word : 'Tanzanite',
    definition : 'La tanzanite est une variété bleue à violette de zoïsite découverte en 1967 en Tanzanie. Elle se rencontre souvent sous forme de gemme transparente. Elle a la même formule chimique que la zoïsite Ca2(Al.OH)Al2(SiO4)3 mais avec des traces de vanadium plus franches. Ce minéral est remarquable du fait de son fort trichroïsme, présentant selon l\'orientation du cristal, des éclats de couleur bleu saphir, violette, ou rouge bourgogne. La plupart des tanzanites du marché ont subi un traitement thermique pour obtenir ou soutenir leurs couleurs.',
    img : 'img1.png'
  }
];

export {glossaire} ;
