import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ListActionTypes, ListActions } from '../actions/list.actions';
import { ListService } from '../list.service';


@Injectable()
export class ListEffects {


  @Effect()
  loadLists$ = this.actions$.pipe(
    ofType(ListActionTypes.LoadLists),
  );

  @Effect()
  saveList$ = this.actions$;


  constructor(private actions$: Actions<ListActions>, private service: ListService) { }

}
