import { Action } from '@ngrx/store';

export enum ActionTypes {
    Login = 'Login',
    GetDocsByType = 'GetDocsByType',
    GetDocsByTypeSuccess = 'GetDocsByTypeSuccess'
}

export class Login implements Action {
    readonly type = ActionTypes.Login;
}

export class GetDocsByType implements Action {
    readonly type = ActionTypes.GetDocsByType;
    constructor(public payload: any) { }
}

export class GetDocsByTypeSuccess implements Action {
    readonly type = ActionTypes.GetDocsByTypeSuccess;
    constructor(public payload: any) { }
}

export type Action = Login
    | GetDocsByType
    | GetDocsByTypeSuccess