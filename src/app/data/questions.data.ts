import { JobType } from "../enums/job-type";
import { Question } from "../models/question.model";

export const QUESTIONS:Question[] = [

    /** strength */

    {
        type:JobType.S,
        title:`Vous êtes en charge de la sécurité de l'atelier B78564 et un feu vient de se déclarer ! Les habitants sont coincés derrière une porte. Que faites-vous ?`,
        answers:[
            {
                id:1,
                title:`Utilisez vos compétences en force pour enfoncer la porte et sauver tout le monde.`,
                points:3
            },
            {
                id:2,
                title:`Cherchez un extincteur et tentez d'éteindre le feu depuis l'extérieur.`,
                points:2
            },
            {
                id:3,
                title:`Essayez d'appeler à l'aide par radio pour obtenir de l'assistance`,
                points:1
            },
            {
                id:4,
                title:`Paniquez et courez dans tous les sens sans agir.`,
                points:0
            }
        ]
    },


    /** perception */

    {
        type: JobType.P,
        title: `Vous patrouillez dans les couloirs de l'abri lorsque vous entendez des bruits suspects dans une pièce fermée. Que faites-vous ?`,
        answers: [
          {
            id: 1,
            title: `Utilisez votre sens aigu de la perception pour analyser les sons et déterminer s'il y a un danger.`,
            points: 3
          },
          {
            id: 2,
            title: `Appelez des renforts pour enquêter ensemble sur les bruits suspects.`,
            points: 2
          },
          {
            id: 3,
            title: `Ignorez les bruits et continuez votre patrouille.`,
            points: 1
          },
          {
            id: 4,
            title: `Criez fort pour effrayer toute menace potentielle.`,
            points: 0
          }
        ]
      },

    /** endurence */

    {
        type: JobType.E,
        title: `Les systèmes de ventilation de l'abri sont en panne et il faut les réparer rapidement. Comment réagissez-vous ?`,
        answers: [
          {
            id: 1,
            title: `Commencez immédiatement à effectuer les réparations, peu importe le défi.`,
            points: 3
          },
          {
            id: 2,
            title: `Établissez un plan de travail et demandez de l'aide pour mener à bien la réparation.`,
            points: 2
          },
          {
            id: 3,
            title: `Prenez une pause et attendez que quelqu'un d'autre le fasse.`,
            points: 1
          },
          {
            id: 4,
            title: `Essayez de bricoler quelque chose sans trop comprendre ce que vous faites.`,
            points: 0
          }
        ]
      },
    /** endurence */

    {
        type: JobType.C,
        title: `Vous êtes désigné chef d'équipe pour organiser une fête dans l'abri. Comment motivez-vous les autres à participer ?`,
        answers: [
          {
            id: 1,
            title: `Utilisez votre charisme pour inspirer l'enthousiasme et la participation.`,
            points: 3
          },
          {
            id: 2,
            title: `Distribuez des invitations personnalisées et organisez des activités amusantes.`,
            points: 2
          },
          {
            id: 3,
            title: `Entraînez-vous à jouer de la musique pour divertir les autres.`,
            points: 1
          },
          {
            id: 4,
            title: `Ignorez la fête et partez faire autre chose.`,
            points: 0
          }
        ]
      },



    /** intelligence */

    {
        type: JobType.I,
        title: `Vous découvrez un ancien laboratoire secret dans l'abri. Quelle approche prenez-vous pour étudier son contenu ?`,
        answers: [
          {
            id: 1,
            title: `Analysez méthodiquement chaque équipement et document que vous trouvez.`,
            points: 3
          },
          {
            id: 2,
            title: `Enquêtez auprès des autres habitants pour obtenir des informations supplémentaires.`,
            points: 2
          },
          {
            id: 3,
            title: `Essayez de manipuler des échantillons sans prendre de précautions.`,
            points: 1
          },
          {
            id: 4,
            title: `Ignorez le laboratoire et poursuivez d'autres activités.`,
            points: 0
          }
        ]
      },



    /** agility */

    {
        type: JobType.A,
        title: `Un groupe de radcafards (radcafards mutants) bloque le chemin vers une source d'eau potable. Comment réagissez-vous ?`,
        answers: [
          {
            id: 1,
            title: `Utilisez votre agilité pour contourner les radcafards et atteindre la source d'eau.`,
            points: 3
          },
          {
            id: 2,
            title: `Créez un plan pour attirer les radcafards loin du chemin.`,
            points: 2
          },
          {
            id: 3,
            title: `Utilisez des objets environnants pour construire un pont et traverser sans rencontrer les radcafards.`,
            points: 1
          },
          {
            id: 4,
            title: `Paniquez et essayez de fuir dans une direction aléatoire.`,
            points: 0
          }
        ]
      },




    /** luck */
    {
        type: JobType.L,
        title: `Vous partez en exploration hors de l'abri et rencontrez un groupe de commerçants itinérants. Comment interagissez-vous avec eux ?`,
        answers: [
          {
            id: 1,
            title: `Essayez de négocier des échanges avantageux en utilisant votre chance légendaire.`,
            points: 3
          },
          {
            id: 2,
            title: `Faites confiance à votre instinct pour choisir les meilleures affaires.`,
            points: 2
          },
          {
            id: 3,
            title: `Organisez une fête improvisée pour célébrer la rencontre.`,
            points: 1
          },
          {
            id: 4,
            title: `Fuyez par peur de l'inconnu.`,
            points: 0
          }
        ]
      }







]