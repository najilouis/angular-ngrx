import { AppState } from './../../store/app.state';
import { getCoffee } from './coffee.selector';
import { getErrorMessage } from './../../store/Shared/shared.selector'
import { Store } from '@ngrx/store';
import {
  catchError,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import {

  loadCoffee,
  loadCoffeeSuccess,
  dummyAction,
} from './coffee.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CoffeeService } from './../../services/coffee.service';
import { setErrorMessage, setLoadingSpinner } from './../../store/Shared/shared.actions';

@Injectable()
export class CoffeeEffects {
  constructor(
    private actions$: Actions,
    private coffeeService: CoffeeService,
    private store: Store<AppState>
  ) { }

  loadCoffee$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCoffee),
      withLatestFrom(this.store.select(getCoffee)),
      mergeMap(([action, coffee]) => {
        if (!coffee.length || coffee.length === 1) {
          return this.coffeeService.getCoffeeList().pipe(
            map((coffee) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              return loadCoffeeSuccess({ coffee });
            }), catchError((errResp) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              const errorMessage = getErrorMessage(
                errResp.error.error.message
              );
              return of(setErrorMessage({ message: errorMessage }));
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

}
