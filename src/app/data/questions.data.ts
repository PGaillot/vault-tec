import { JobType } from "../enums/job-type";
import { Question } from "../models/question.model";

export const QUESTIONS:Question[] = [

    /** strength */

    {
        type:JobType.S,
        title:'Une question de FORCE',
        answers:[
            {
                id:1,
                title:'La meilleur reponse',
                points:3
            },
            {
                id:2,
                title:'une reponse corect',
                points:2
            },
            {
                id:3,
                title:'une reponse ok tier',
                points:1
            },
            {
                id:4,
                title:'La mauvaise reponse',
                points:0
            }
        ]
    },


    /** perception */

    {
        type:JobType.P,
        title:'Une question de PERCEPTION',
        answers:[
            {
                id:1,
                title:'La meilleur reponse',
                points:3
            },
            {
                id:2,
                title:'une reponse corect',
                points:2
            },
            {
                id:3,
                title:'une reponse ok tier',
                points:1
            },
            {
                id:4,
                title:'La mauvaise reponse',
                points:0
            }
        ]
    },

    /** endurence */

    {
        type:JobType.E,
        title:'Une question de ENDURENCE',
        answers:[
            {
                id:1,
                title:'La meilleur reponse',
                points:3
            },
            {
                id:2,
                title:'une reponse corect',
                points:2
            },
            {
                id:3,
                title:'une reponse ok tier',
                points:1
            },
            {
                id:4,
                title:'La mauvaise reponse',
                points:0
            }
        ]
    },

    /** endurence */

    {
        type:JobType.C,
        title:'Une question de CHARISME',
        answers:[
            {
                id:1,
                title:'La meilleur reponse',
                points:3
            },
            {
                id:2,
                title:'une reponse corect',
                points:2
            },
            {
                id:3,
                title:'une reponse ok tier',
                points:1
            },
            {
                id:4,
                title:'La mauvaise reponse',
                points:0
            }
        ]
    },



    /** endurence */

    {
        type:JobType.I,
        title:'Une question de INTELLIGENCE',
        answers:[
            {
                id:1,
                title:'La meilleur reponse',
                points:3
            },
            {
                id:2,
                title:'une reponse corect',
                points:2
            },
            {
                id:3,
                title:'une reponse ok tier',
                points:1
            },
            {
                id:4,
                title:'La mauvaise reponse',
                points:0
            }
        ]
    },




    /** agility */

    {
        type:JobType.A,
        title:'Une question de AGILITE',
        answers:[
            {
                id:1,
                title:'La meilleur reponse',
                points:3
            },
            {
                id:2,
                title:'une reponse corect',
                points:2
            },
            {
                id:3,
                title:'une reponse ok tier',
                points:1
            },
            {
                id:4,
                title:'La mauvaise reponse',
                points:0
            }
        ]
    },




    /** luck */

    {
        type:JobType.L,
        title:'Une question de CHANCE',
        answers:[
            {
                id:1,
                title:'La meilleur reponse',
                points:3
            },
            {
                id:2,
                title:'une reponse corect',
                points:2
            },
            {
                id:3,
                title:'une reponse ok tier',
                points:1
            },
            {
                id:4,
                title:'La mauvaise reponse',
                points:0
            }
        ]
    },







]