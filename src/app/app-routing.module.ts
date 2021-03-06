import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'todo-form',
    loadChildren: './todo-form/todo-form.module#TodoFormPageModule'
  },
  {
    path: 'register-page',
    loadChildren: './register-page/register-page.module#RegisterPagePageModule'
  },
  {
    path: 'login-form-page', 
    loadChildren: './login-form-page/login-form-page.module#LoginFormPagePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
