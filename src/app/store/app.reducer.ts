import { Action } from '@ngrx/store';
import { ActionTypes } from './app.actions';
import * as model from './app.model';

export const initialState = {
    hasLoggedIn: false
} as model.AppState;

export function appReducer(state: model.AppState = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Login: {
            console.log('in login');

            return { ...state, hasLoggedIn: true };
        }

        default:
            return state;
    }
}