import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'coffee',
    loadChildren: () => {
      return import('./coffeePages/coffee.module').then((m) => m.CoffeeModule);
    }
  },
  {
    path: '**',
    redirectTo: 'coffee'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
