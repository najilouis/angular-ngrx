import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Coffee } from './../../models/coffee.model';

export interface CoffeeState extends EntityState<Coffee> {
  currPage: number;
}

export const coffeeAdapter = createEntityAdapter<Coffee>();

export const initialState: CoffeeState = coffeeAdapter.getInitialState({ currPage: 1 });
