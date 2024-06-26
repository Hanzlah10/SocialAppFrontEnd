import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.routes').then(m => m.loginRoutes)
    },
    {
        path: 'register',
        loadChildren: () => import('./auth/auth.routes').then(m => m.registerRoutes)
    },
    {
        path: 'tweet',
        loadChildren: () => import('./createTweet/createTweet.routes').then(m => m.createTweetRoutes)
    }
];





