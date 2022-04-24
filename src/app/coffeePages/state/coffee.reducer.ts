import {
  loadCoffeeSuccess, updateCurrPage
} from './coffee.action';
import { Action, createReducer, on } from '@ngrx/store';
import { initialState, coffeeAdapter, CoffeeState } from './coffee.state';

const _coffeeReducer = createReducer(
  initialState,

  on(loadCoffeeSuccess, (state, action) => {
    return coffeeAdapter.setAll(action.coffee, {
      ...state
    });
  }),

  on(updateCurrPage, (state, action) => {
    console.log(action)
    return {
      ...state,
      currPage: action.currPage,
    };
  }),
);

export function coffeeReducer(state: CoffeeState, action: Action) {
  return _coffeeReducer(state, action);
}
