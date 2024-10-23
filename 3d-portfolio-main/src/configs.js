import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Clément Marty',
  subTitle: 'Dev portefolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Clément Marty Portefolio 👨🏻‍💻',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('A PROPOS'),
      title: 'Qui suis-je ?      ',
      infos: [
        "* Je suis un jeune développeur, un penseur curieux qui aime apprendre et comprendre le fonctionnement des choses.",

        '* J’ai commencé ma carrière en tant que développeur front-end en 2021 après une reconversion professionnelle issue du commerce de prêt-à-porter. ',

        '* Je dispose d’un large éventail de compétences mais je suis toujours à la recherche de m’améliorer et je suis toujours content de découvrir ce nouveau monde !',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('INFORMATION PERSONNELLE'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Information personnelle',
      infos : [
        "Je suis actuellement en recherche d'une place en marketing digital ou développement web."
      ],
      footer: 'Tout ce portefolio est codé à la main par moi.',
    },
    {
      scale: 15,
      displayAt: displayAt('SKILLS'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'Et d’autres...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Voici mon CV!',
      footer: 'Cliquez sur l’icône ci-dessus pour voir!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              '',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('CONTACTEZ-MOI'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Contactez-moi !',
      infos : [ 
        "Téléphone : 0672341357",
        "E-mail : clement.marty6@gmail.com",
      ],
      imageList: {
        rows: 1,
        separation: 1,
        leftPadding: 0,
        topPadding: -0.35,
        scale: 0.5,
        items: [
          {
            url: 'icons/cafe.png',
            websiteURL:
              'https://bmc.link/clementmarJ',
          },
        ],
      },
    
    
    },
    {
      scale: 15,
      displayAt: displayAt('RETROUVEZ MOI'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'Vous pouvez me retrouver ici :',
      footer: 'Presque terminé, mais continuez à défiler :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/cl%C3%A9ment-marty-1919a1225/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/MartyClement',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:clement.marty6@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
