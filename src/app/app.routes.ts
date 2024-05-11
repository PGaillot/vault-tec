import { Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { VaultPageComponent } from './pages/vault-page/vault-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component'
import { SpecialPageComponent } from './pages/special-page/special-page.component'
import { SpecialFormComponent } from './components/special-form/special-form.component'
import { SpecialHomePageComponent } from './pages/special-home-page/special-home-page.component'
import { DataFormComponent } from './components/data-form/data-form.component'
import { ConsentFormComponent } from './components/consent-form/consent-form.component'
import { JobFormComponent } from './components/job-form/job-form.component'
import { JobPageComponent } from './pages/job-page/job-page.component'
import { JobHomePageComponent } from './pages/job-home-page/job-home-page.component'
import { TerminalGameComponent } from './components/terminal-game/terminal-game.component'
import { MessagePageComponent } from './pages/message-page/message-page.component'
import { QuestionComponent } from './components/question/question.component'
import { LuckGamePageComponent } from './pages/games/luck-game-page/luck-game-page.component'
import { EndurenceGamePageComponent } from './pages/games/endurence-game-page/endurence-game-page.component'
import { StrengthGamePageComponent } from './pages/games/strength-game-page/strength-game-page.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'vault',
    component: VaultPageComponent,
  },
  {
    path: 'job',
    component: JobPageComponent,
    children:[
      {
        path:"",
        component:JobHomePageComponent
      },
      {
        path:'error',
        component:TerminalGameComponent
      },
      {
        path:"find-a-job",
        component:JobFormComponent,
      }
    ]
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'strength-exercise',
    component: StrengthGamePageComponent,
  },
  {
    path: 'perception-exercise',
    component: LuckGamePageComponent,
  },
  {
    path: 'endurance-exercise',
    component: EndurenceGamePageComponent,
  },
  {
    path: 'charisma-exercise',
    component: LuckGamePageComponent,
  },
  {
    path: 'intelligence-exercise',
    component: TerminalGameComponent,
  },
  {
    path: 'agility-exercise',
    component: LuckGamePageComponent,
  },
  {
    path: 'luck-exercise',
    component: LuckGamePageComponent,
  },
  {
    path: 'special',
    component: SpecialPageComponent,
    children: [
      { path: '', component: SpecialHomePageComponent },
      { path: 'data', component: DataFormComponent },
      { path: 'become-special', component: SpecialFormComponent },
      { path: 'consent', component: ConsentFormComponent },
      { path: 'email-send', component: MessagePageComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
]
