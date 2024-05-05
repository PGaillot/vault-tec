import { JobType } from '../enums/job-type'
import { PerksType } from '../enums/perks-type'
import { Perk } from '../models/perk.model'

export const PERKS: Perk[] = [
  {
    char: 'S',
    name: PerksType.S,
    job_type:JobType.S,
    desc:
    "Vous aimez soulevez des gros cailloux ou des gens que vous n'aimez guère ? La Force est déterminé par la circonférence de votre biceps en contraction.",
  },
  {
    char: 'P',
    name: PerksType.P,
    job_type:JobType.P,
    desc:
    "Toujours un oeil dans le dos, vous sentez les mouvements autour de vous ? Vous avez un 6ème sens ou un troisième oeil, la Perception est votre atout !",
  },
  {
    char: 'E',
    name: PerksType.E,
    job_type:JobType.E,
    desc:
    "Les femmes gardent un bon souvenir de vos amplitudes d'effort et/ou un marathon ressemble à une balade de mamie pour digérer le repas du dimanche midi ? L'Endurance c'est votre truc, ça ne fait aucun doute.",
  },
  {
    char: 'C',
    name: PerksType.C,
    job_type:JobType.C,
    desc:
    "Don Juan n'a quà bien se tenir, vous êtes le poète que Jean de la Fontaine n'a jamais été. Vous obtenez ce que vous voulez par la parole. Charimastique est la qualité qui vous défini c'est certain.",
  },
  {
    char: 'I',
    name: PerksType.I,
    job_type:JobType.I,
    desc:
    "Les plus grands génies des dernières decénnies disent avoir tout appris rien qu'en passant du temps avec vous. Vous transpirez des équations et des encyclopédies. Vous êtes quelqu'un d'Inteliggent c'est indéniable.",
  },
  {
    char: 'A',
    name: PerksType.A,
    job_type:JobType.A,
    desc:
    "Vous pratiquez régulièrement des triples saltos arrière, en haut des buildings du coin. Il est aisé pour vous de vous déplacer dans n'importe quel environnement ? Vous êtes Agile, bravo.",
  },
  {
    char: 'L',
    name: PerksType.L,
    job_type:JobType.L,
    desc:
    "Le loto ? Vous l'avez gagné quatre fois le mois dernier. Souvent vous trouvez 50 balles sur le pas de votre porte, ou un accès pour nos abris Vault-Tec. Veinard vous êtes la Chance en personne."
  },
]
