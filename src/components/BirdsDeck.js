const birdsDeck = [
  {
    name: 'Pigeon',
    image:
      'https://cdn.pixabay.com/photo/2020/02/27/13/21/rock-dove-4884627_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'The domestic pigeon descended from this species. Escaped domestic pigeons have increased the populations of feral pigeons around the world.',
    isExamined: false,
  },
  {
    name: 'Owl',
    image:
      'https://cdn.pixabay.com/photo/2017/10/30/22/50/owl-2903707_960_720.jpg',
    attack: 1,
    hp: 1,
    sound: 'assets/hibou.mp3',
    description:
      'Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight. Exceptions include the diurnal northern hawk-owl and the gregarious burrowing owl. ',
    isExamined: false,
  },
  {
    name: 'Eagle',
    image:
      'https://cdn.pixabay.com/photo/2012/10/25/23/10/bald-eagle-62834_960_720.jpg',
    attack: 1,
    hp: 1,
    sound: 'assets/aigle.mp3',
    description:
      'Eagle is the common name for many large birds of prey of the family Accipitridae. Eagles belong to several groups of genera, some of which are closely related. Most of the 60 species of eagle are from Eurasia and Africa.[1] Outside this area, just 14 species can be found—2 in North America, 9 in Central and South America, and 3 in Australia. ',
    isExamined: false,
  },
  {
    name: 'Turkey',
    image:
      'https://cdn.pixabay.com/photo/2019/05/18/18/56/turkey-of-the-ardennes-4212284_960_720.jpg',
    attack: 1,
    hp: 1,
    sound: 'assets/dinde.mp3',
    description:
      'The turkey is a large bird in the genus Meleagris, native to North America. Males of both turkey species have a distinctive fleshy wattle, called a snood, that hangs from the top of the beak. They are among the largest birds in their ranges. As with many large ground-feeding birds, the male is bigger and much more colorful than the female.',
    isExamined: false,
  },
  {
    name: 'Peacock',
    image:
      'https://cdn.pixabay.com/photo/2017/03/04/10/48/peacock-2115823_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'Peafowl is a common name for three bird species in the genera Pavo and Afropavo within the subtribe Pavonina of the family Phasianidae, the pheasants and their allies. Male peafowl are referred to as peacocks, and female peafowl are referred to as peahens, even though peafowl of either sex are often referred to colloquially as "peacocks".',
    isExamined: false,
  },
  {
    name: 'Seagull',
    image:
      'https://cdn.pixabay.com/photo/2021/08/16/09/21/seagulls-6549872_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'Gulls, or colloquially seagulls are typically medium to large birds, usually grey or white, often with black markings on the head or wings. They typically have harsh wailing or squawking calls; stout, longish bills; and webbed feet. Most gulls are ground-nesting carnivores which take live food or scavenge opportunistically, particularly the Larus species.',
    isExamined: false,
  },
  {
    name: 'Chicken',
    image:
      'https://cdn.pixabay.com/photo/2018/10/05/23/24/chicken-3727097_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'Chickens are one of the most common and widespread domestic animals, with a total population of 23.7 billion as of 2018, up from more than 19 billion in 2011. There are more chickens in the world than any other bird. There are numerous cultural references to chickens – in myth, folklore and religion, and in language and literature. ',
    isExamined: false,
  },
  {
    name: 'Kingfisher',
    image:
      'https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'While kingfishers are usually thought to live near rivers and eat fish, many species live away from water and eat small invertebrates. Like other members of their order, they nest in cavities, usually tunnels dug into the natural or artificial banks in the ground. Some kingfishers nest in arboreal termite nests. A few species, principally insular forms, are threatened with extinction. ',
    isExamined: false,
  },
  {
    name: 'Magpie',
    image:
      'https://cdn.pixabay.com/photo/2019/05/28/15/41/magpie-4235415_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      "Magpies are birds of the Corvidae family. Like other members of their family, they are widely considered to be intelligent creatures. The Eurasian magpie, for instance, is thought to rank among the world's smartest creatures, and is one of the few non-mammal species able to recognize itself in a mirror test.",
    isExamined: false,
  },
  {
    name: 'Vulture',
    image:
      'https://cdn.pixabay.com/photo/2016/02/19/11/36/vulture-1209813_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'A vulture is a bird of prey that scavenges on carrion. There are 23 extant species of vulture (including Condors). A particular characteristic of many vultures is a bald, unfeathered head. This bare skin is thought to keep the head clean when feeding, and also plays an important role in thermoregulation.',
    isExamined: false,
  },
  {
    name: 'Parrot',
    image:
      'https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194__340.jpg',
    attack: 1,
    hp: 1,
    description:
      'Characteristic features of parrots include a strong, curved bill, an upright stance, strong legs, and clawed zygodactyl feet. Many parrots are vividly coloured, and some are multi-coloured. Most parrots exhibit little or no sexual dimorphism in the visual spectrum. ',
    isExamined: false,
  },
  {
    name: 'Swan',
    image:
      'https://cdn.pixabay.com/photo/2017/02/18/13/55/swan-2077219_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'There are six living and many extinct species of swan. Swans usually mate for life, although "divorce" sometimes occurs, particularly following nesting failure, and if a mate dies, the remaining swan will take up with another.',
    isExamined: false,
  },
  {
    name: 'Toucan',
    image:
      'https://cdn.pixabay.com/photo/2019/05/07/09/27/toucan-4185361_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'Toucans are arboreal and typically lay 2–21 white eggs in their nests. They make their nests in tree hollows and holes excavated by other animals such as woodpeckers—the toucan bill has very limited use as an excavation tool. When the eggs hatch, the young emerge completely naked, without any down.',
    isExamined: false,
  },
  {
    name: 'Duck',
    image:
      'https://cdn.pixabay.com/photo/2018/06/16/00/39/mallard-3478011_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'Duck is the common name for numerous species of waterfowl in the family Anatidae. Ducks are generally smaller and shorter-necked than swans and geese, which are also members of the same family. Ducks are mostly aquatic birds, and may be found in both fresh water and sea water. ',
    isExamined: false,
  },
  {
    name: 'Falcon',
    image:
      'https://cdn.pixabay.com/photo/2016/07/27/10/37/falcon-1544985_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'The falcons are the largest genus in the Falconinae subfamily of Falconidae, which itself also includes another subfamily comprising caracaras and a few other species. All these birds kill with their beaks, using a "tooth" on the side of their beaks—unlike the hawks, eagles, and other birds of prey in the Accipitridae, which use their feet.',
    isExamined: false,
  },
  {
    name: 'Dove',
    image:
      'https://cdn.pixabay.com/photo/2018/02/08/19/48/dove-3140179_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'These are stout-bodied birds with short necks, and short slender bills that in some species feature fleshy ceres. They primarily feed on seeds, fruits, and plants. The family occurs worldwide, but the greatest variety is in the Indomalayan and Australasian realms.',
    isExamined: false,
  },
  {
    name: 'Canary',
    image:
      'https://cdn.pixabay.com/photo/2017/08/17/00/26/nature-2649624_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'Canaries were first bred in captivity in the 17th century, having been brought to Europe by Spanish sailors. This bird became expensive and fashionable to breed in courts of Spanish and English kings. Monks started breeding them and only sold the males (which sing). This kept the birds in short supply and drove the price up.',
    isExamined: false,
  },
  {
    name: 'Sparrow',
    image:
      'https://cdn.pixabay.com/photo/2021/08/22/08/54/bird-6564593_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'Many species nest on buildings and the house and Eurasian tree sparrows, in particular, inhabit cities in large numbers, so sparrows are among the most familiar of all wild birds. They are primarily seed-eaters, though they also consume small insects. Some species scavenge for food around cities and will happily eat small quantities of virtually anything. ',
    isExamined: false,
  },
  {
    name: 'Buzzard',
    image:
      'https://cdn.pixabay.com/photo/2019/04/27/03/29/common-buzzard-4159239_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      ' The common buzzard is an opportunistic predator that can take a wide variety of prey, but it feeds mostly on small mammals, especially rodents such as voles. It typically hunts from a perch. Like most accipitrid birds of prey, it builds a nest, typically in trees in this species, and is a devoted parent to a relatively small brood of young.',
    isExamined: false,
  },
  {
    name: 'Crow',
    image:
      'https://cdn.pixabay.com/photo/2018/06/02/11/29/raven-3448199_960_720.jpg',
    attack: 1,
    hp: 1,
    description:
      'There is frequent confusion between the carrion crow and the rook, another black corvid found within its range. The beak of the crow is stouter and in consequence looks shorter, and whereas in the adult rook the nostrils are bare, those of the crow are covered at all ages with bristle-like feathers.',
    isExamined: false,
  },
];
export default birdsDeck;
