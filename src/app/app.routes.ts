import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VaultPageComponent } from './pages/vault-page/vault-page.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomePageComponent
    },
    {
        path:'vault',
        component:VaultPageComponent
    }
];
