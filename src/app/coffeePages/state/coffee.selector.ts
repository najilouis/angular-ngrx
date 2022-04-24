import { RouterStateUrl } from '../../store/router/custom-serializer';
import { getCurrentRoute } from '../../store/router/router.selector';
import { coffeeAdapter, CoffeeState } from './coffee.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';

export const COFFEE_STATE_NAME = 'coffee';
const getCoffeeState = createFeatureSelector<CoffeeState>(COFFEE_STATE_NAME);
export const coffeeSelectors = coffeeAdapter.getSelectors();

export const getCoffee = createSelector(getCoffeeState, coffeeSelectors.selectAll);
export const getCoffeeEntities = createSelector(
  getCoffeeState,
  coffeeSelectors.selectEntities
);

export const getCoffeeById = createSelector(
  getCoffeeEntities,
  getCurrentRoute,
  (coffee, route: RouterStateUrl) => {
    return coffee ? coffee[route.params['id']] : null;
  }
);

export const getCurrPage = createSelector(getCoffeeState, (state) => state.currPage);
