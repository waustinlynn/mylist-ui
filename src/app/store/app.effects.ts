import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { DocService } from '../doc.service';
import * as appStore from './';

@Injectable()
export class AppEffects {

    @Effect()
    loadDocs$ = this.actions$
        .pipe(ofType(appStore.ActionTypes.GetDocsByType),
        mergeMap((action: any) => {
            return this.docService.getAll(action.payload.docType).pipe(map(r => new appStore.GetDocsByTypeSuccess(r)));
        }
        )
        );
    constructor(
        private actions$: Actions,
        private docService: DocService,
        private store$: Store<any>
    ) { }
}