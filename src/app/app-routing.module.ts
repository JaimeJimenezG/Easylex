import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorPage } from './pages/error/error.page';
import { FormPage } from './pages/form/form.page';
import { HomePage } from './pages/home/home.page';
import { SendPage } from './pages/send/send.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'form/:question',
    component: FormPage
  },
  {
    path: 'send',
    component: SendPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  //Wild Card Route for 404 request
  {
    path: '**', pathMatch: 'full',
    component: ErrorPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
