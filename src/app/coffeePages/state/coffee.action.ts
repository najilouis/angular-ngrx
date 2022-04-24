import { createAction, props } from '@ngrx/store';
import { Coffee } from './../../models/coffee.model';

export const LOAD_COFFEE = '[coffee page] load coffee';
export const LOAD_COFFEE_SUCCESS = '[coffee page] load coffee success';

export const loadCoffee = createAction(LOAD_COFFEE);
export const loadCoffeeSuccess = createAction(
  LOAD_COFFEE_SUCCESS,
  props<{ coffee: Coffee[] }>()
);

export const dummyAction = createAction('[dummy action]');

export const updateCurrPage = createAction('updateCurrPage',
  props<{ currPage: number }>()
);
