import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ListActionTypes, ListActions } from '../actions/list.actions';


@Injectable()
export class ListEffects {


  @Effect()
  loadLists$ = this.actions$.pipe(
    ofType(ListActionTypes.LoadLists),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ListActions>) { }

}
