import { StoreModule } from '@ngrx/store';
import { coffeeReducer } from './state/coffee.reducer';
import { CoffeeEffects } from './state/coffee.effects';
import { EffectsModule } from '@ngrx/effects';
import { COFFEE_STATE_NAME } from './state/coffee.selector';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: CoffeeListComponent
  },
  {
    path: 'details/:id',
    component: CoffeeDetailsComponent,
  },
];
@NgModule({
  declarations: [CoffeeListComponent, CoffeeDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COFFEE_STATE_NAME, coffeeReducer),
    EffectsModule.forFeature([CoffeeEffects]),
  ],
})
export class CoffeeModule { }
