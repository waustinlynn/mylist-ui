import { Action } from '@ngrx/store';
import { ActionTypes } from './app.actions';
import * as model from './app.model';
import * as actions from './app.actions';

export const initialState = {
    hasLoggedIn: false,
    testDocs: undefined
} as model.AppState;

export function appReducer(state: model.AppState = initialState, action: actions.Action) {
    switch (action.type) {
        case ActionTypes.Login: {
            console.log('in login');

            return { ...state, hasLoggedIn: true };
        }

        case ActionTypes.GetDocsByTypeSuccess: {
            return { ...state, testDocs: action.payload }
        }

        default:
            return state;
    }
}