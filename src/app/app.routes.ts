import { provideRouter, RouterConfig } from '@angular/router';

const routes: RouterConfig = [
  { path: 'login', component: LoginComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];