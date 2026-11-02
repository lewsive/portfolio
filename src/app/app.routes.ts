import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home, title: 'Noah Coe | Software Engineer' },
    {
        path: 'projects',
        loadComponent: ()=> import('./pages/projects/projects').then((m) => m.Projects),
        title: 'Projects | Noah Coe',
    },
    {
        path: 'blog',
        loadComponent: ()=> import('./pages/blog-list/blog-list').then((m) => m.BlogList),
        title: 'Blog | Noah Coe',
    },
    {
        path: 'blog/:slug',
        loadComponent: () => import('./pages/blog-post/blog-post').then((m) => m.BlogPost),
    },
    {
        path: 'contact',
        loadComponent: ()=> import('./pages/contact/contact').then((m) => m.Contact),
        title: 'Contact | Noah Coe',
    },
    {
        path: '**',
        loadComponent: ()=> import('./pages/not-found/not-found').then((m) => m.NotFound),
        title: '404 Not Found | Noah Coe',
    },
];
