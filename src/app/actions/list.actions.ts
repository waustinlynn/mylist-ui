import { Action } from '@ngrx/store';

export enum ListActionTypes {
  LoadLists = '[List] Load Lists',
  SaveList = '[List] Save List'
}

export class LoadLists implements Action {
  readonly type = ListActionTypes.LoadLists;
}

export class SaveList implements Action {
  readonly type = ListActionTypes.SaveList;
  constructor(public payload: any) { }
}


export type ListActions = LoadLists | SaveList;
