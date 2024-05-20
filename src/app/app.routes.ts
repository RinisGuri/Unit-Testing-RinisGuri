import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [
  {
    title: 'Home',
    path: 'home',
    component: HomeComponent,
  },
  {
    title: 'Contact',
    path: 'contact',
    component: ContactComponent
  },
  {
    title: 'About',
    path: 'about',
    loadComponent: () => import('./component/about/about.component').then(m => m.AboutComponent) 
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];
