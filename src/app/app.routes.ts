import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VaultPageComponent } from './pages/vault-page/vault-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StoryPageComponent } from './pages/story-page/story-page.component';
import { SpecialPageComponent } from './pages/special-page/special-page.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomePageComponent
    },
    {
        path:'vault',
        component:VaultPageComponent
    },
    {
        path:'story',
        component:StoryPageComponent
    },
    {
        path:'contact',
        component:ContactPageComponent
    },
    {
        path:'special',
        component:SpecialPageComponent
    },
    {
        path:'**',
        component:NotFoundPageComponent
    }
];
