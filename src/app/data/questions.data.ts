import { JobType } from '../enums/job-type';
import { Question } from '../models/question.model';

export const QUESTIONS: Question[] = [
  /** strength */

  {
    type: JobType.S,
    title: `Vous êtes en charge de la sécurité de l'atelier B78564 et un feu vient de se déclarer ! Les habitants sont coincés derrière une porte. Que faites-vous ?`,
    answers: [
      {
        id: 1,
        title: `Utilisez vos compétences en force pour enfoncer la porte et sauver tout le monde.`,
        points: 3,
      },
      {
        id: 2,
        title: `Cherchez un extincteur et tentez d'éteindre le feu depuis l'extérieur.`,
        points: 2,
      },
      {
        id: 3,
        title: `Essayez d'appeler à l'aide par radio pour obtenir de l'assistance`,
        points: 1,
      },
      {
        id: 4,
        title: `Paniquez et courez dans tous les sens sans agir.`,
        points: 0,
      },
    ],
  },
  {
    type: JobType.S,
    title: `Vous êtes en charge de la sécurité de l'abri quand un radcafard mutant géant s'introduit dans les quartiers résidentiels ! Que faites-vous ?`,
    answers: [
      {
        id: 1,
        title: `Utilisez votre force pour attaquer le radcafard et le neutraliser.`,
        points: 3,
      },
      {
        id: 2,
        title: `Alertez les habitants et guidez-les vers un lieu sûr.`,
        points: 2,
      },
      {
        id: 3,
        title: `Tentez de négocier avec le radcafard en lui offrant de la nourriture.`,
        points: 1,
      },
      {
        id: 4,
        title: `Criez et paniquez sans agir.`,
        points: 0,
      },
    ],
  },

  /** perception */

  {
    type: JobType.P,
    title: `Vous patrouillez dans les couloirs de l'abri lorsque vous entendez des bruits suspects dans une pièce fermée. Que faites-vous ?`,
    answers: [
      {
        id: 1,
        title: `Utilisez votre sens aigu de la perception pour analyser les sons et déterminer s'il y a un danger.`,
        points: 3,
      },
      {
        id: 2,
        title: `Appelez des renforts pour enquêter ensemble sur les bruits suspects.`,
        points: 2,
      },
      {
        id: 3,
        title: `Ignorez les bruits et continuez votre patrouille.`,
        points: 1,
      },
      {
        id: 4,
        title: `Criez fort pour effrayer toute menace potentielle.`,
        points: 0,
      },
    ],
  },
  {
    type: JobType.P,
    title: `Vous observez des mouvements inhabituels dans les conduits d'aération de l'abri. Que faites-vous ?`,
    answers: [
      {
        id: 1,
        title: `Utilisez votre perception pour enquêter et déterminer la nature du problème.`,
        points: 3,
      },
      {
        id: 2,
        title: `Demandez à un expert en maintenance de vérifier les conduits.`,
        points: 2,
      },
      {
        id: 3,
        title: `Ignorez les mouvements et continuez vos activités.`,
        points: 1,
      },
      {
        id: 4,
        title: `Tentez de boucher les conduits avec du ruban adhésif.`,
        points: 0,
      },
    ],
  },

  /** endurence */

  {
    type: JobType.E,
    title: `Les systèmes de ventilation de l'abri sont en panne et il faut les réparer rapidement. Comment réagissez-vous ?`,
    answers: [
      {
        id: 1,
        title: `Commencez immédiatement à effectuer les réparations, peu importe le défi.`,
        points: 3,
      },
      {
        id: 2,
        title: `Établissez un plan de travail et demandez de l'aide pour mener à bien la réparation.`,
        points: 2,
      },
      {
        id: 3,
        title: `Prenez une pause et attendez que quelqu'un d'autre le fasse.`,
        points: 1,
      },
      {
        id: 4,
        title: `Essayez de bricoler quelque chose sans trop comprendre ce que vous faites.`,
        points: 0,
      },
    ],
  },
  {
    type: JobType.E,
    title: `Une fuite d'eau importante menace de submerger une partie de l'abri. Comment réagissez-vous ?`,
    answers: [
      {
        id: 1,
        title: `Organisez une équipe pour réparer la fuite en urgence.`,
        points: 3,
      },
      {
        id: 2,
        title: `Utilisez des barrages improvisés pour contenir l'eau.`,
        points: 2,
      },
      {
        id: 3,
        title: `Ignorez la fuite et espérez qu'elle se résorbe d'elle-même.`,
        points: 1,
      },
      {
        id: 4,
        title: `Panickez et fuyez vers un endroit plus sûr.`,
        points: 0,
      },
    ],
  },
  /** endurence */

  {
    type: JobType.C,
    title: `Vous êtes désigné chef d'équipe pour organiser une fête dans l'abri. Comment motivez-vous les autres à participer ?`,
    answers: [
      {
        id: 1,
        title: `Utilisez votre charisme pour inspirer l'enthousiasme et la participation.`,
        points: 3,
      },
      {
        id: 2,
        title: `Distribuez des invitations personnalisées et organisez des activités amusantes.`,
        points: 2,
      },
      {
        id: 3,
        title: `Entraînez-vous à jouer de la musique pour divertir les autres.`,
        points: 1,
      },
      {
        id: 4,
        title: `Ignorez la fête et partez faire autre chose.`,
        points: 0,
      },
    ],
  },
  {
    type: JobType.C,
    title: `Vous êtes chargé d'organiser une réunion importante avec les représentants d'autres abris. Comment abordez-vous cette tâche ?`,
    answers: [
      {
        id: 1,
        title: `Utilisez votre charisme pour convaincre et unir les participants autour d'objectifs communs.`,
        points: 3,
      },
      {
        id: 2,
        title: `Préparez un ordre du jour détaillé pour la réunion.`,
        points: 2,
      },
      {
        id: 3,
        title: `Demandez à quelqu'un d'autre de gérer la réunion à votre place.`,
        points: 1,
      },
      {
        id: 4,
        title: `Évitez la réunion et prétendez être occupé ailleurs.`,
        points: 0,
      },
    ],
  },

  /** intelligence */

  {
    type: JobType.I,
    title: `Vous découvrez un ancien laboratoire secret dans l'abri. Quelle approche prenez-vous pour étudier son contenu ?`,
    answers: [
      {
        id: 1,
        title: `Analysez méthodiquement chaque équipement et document que vous trouvez.`,
        points: 3,
      },
      {
        id: 2,
        title: `Enquêtez auprès des autres habitants pour obtenir des informations supplémentaires.`,
        points: 2,
      },
      {
        id: 3,
        title: `Essayez de manipuler des échantillons sans prendre de précautions.`,
        points: 1,
      },
      {
        id: 4,
        title: `Ignorez le laboratoire et poursuivez d'autres activités.`,
        points: 0,
      },
    ],
  },
  {
    type: JobType.I,
    title: `Vous découvrez une ancienne console informatique dans les archives de l'abri. Quelle approche adoptez-vous pour l'étudier ?`,
    answers: [
      {
        id: 1,
        title: `Analysez le système informatique avec précaution pour récupérer des données utiles.`,
        points: 3,
      },
      {
        id: 2,
        title: `Consultez les manuels d'instructions et les experts en technologie de l'abri.`,
        points: 2,
      },
      {
        id: 3,
        title: `Appuyez sur des boutons au hasard pour voir ce qui se passe.`,
        points: 1,
      },
      {
        id: 4,
        title: `Ignorez la console et retournez à vos tâches habituelles.`,
        points: 0,
      },
    ],
  },

  /** agility */

  {
    type: JobType.A,
    title: `Un groupe de radcafards (radcafards mutants) bloque le chemin vers une source d'eau potable. Comment réagissez-vous ?`,
    answers: [
      {
        id: 1,
        title: `Utilisez votre agilité pour contourner les radcafards et atteindre la source d'eau.`,
        points: 3,
      },
      {
        id: 2,
        title: `Créez un plan pour attirer les radcafards loin du chemin.`,
        points: 2,
      },
      {
        id: 3,
        title: `Utilisez des objets environnants pour construire un pont et traverser sans rencontrer les radcafards.`,
        points: 1,
      },
      {
        id: 4,
        title: `Paniquez et essayez de fuir dans une direction aléatoire.`,
        points: 0,
      },
    ],
  },
  {
    type: JobType.A,
    title: `Vous devez traverser un terrain accidenté rempli de débris pour récupérer des fournitures vitales. Comment vous y prenez-vous ?`,
    answers: [
      {
        id: 1,
        title: `Utilisez votre agilité pour sauter et grimper par-dessus les obstacles.`,
        points: 3,
      },
      {
        id: 2,
        title: `Élaborez un plan pour contourner les zones les plus dangereuses.`,
        points: 2,
      },
      {
        id: 3,
        title: `Ramassez les débris pour construire un pont improvisé.`,
        points: 1,
      },
      {
        id: 4,
        title: `Abandonnez et rebroussez chemin sans les fournitures.`,
        points: 0,
      },
    ],
  },

  /** luck */
  {
    type: JobType.L,
    title: `Vous partez en exploration hors de l'abri et rencontrez un groupe de commerçants itinérants. Comment interagissez-vous avec eux ?`,
    answers: [
      {
        id: 1,
        title: `Essayez de négocier des échanges avantageux en utilisant votre chance légendaire.`,
        points: 3,
      },
      {
        id: 2,
        title: `Faites confiance à votre instinct pour choisir les meilleures affaires.`,
        points: 2,
      },
      {
        id: 3,
        title: `Organisez une fête improvisée pour célébrer la rencontre.`,
        points: 1,
      },
      {
        id: 4,
        title: `Fuyez par peur de l'inconnu.`,
        points: 0,
      },
    ],
  },
  {
    type: JobType.L,
    title: `Vous trouvez un coffre verrouillé dans une zone déserte de l'abri. Comment espérez-vous l'ouvrir ?`,
    answers: [
      {
        id: 1,
        title: `Utilisez votre chance pour deviner le code ou trouver une clé cachée à proximité.`,
        points: 3,
      },
      {
        id: 2,
        title: `Cherchez des outils appropriés pour forcer la serrure.`,
        points: 2,
      },
      {
        id: 3,
        title: `Faites appel à d'autres habitants pour vous aider à ouvrir le coffre.`,
        points: 1,
      },
      {
        id: 4,
        title: `Ignorez le coffre et continuez votre exploration.`,
        points: 0,
      },
    ],
  },
];
