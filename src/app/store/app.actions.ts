import { Action } from '@ngrx/store';

export enum ActionTypes {
    Login = 'Login',
}

export class Login implements Action {
    readonly type = ActionTypes.Login;
}