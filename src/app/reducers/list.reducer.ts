
import { ListActions, ListActionTypes } from '../actions/list.actions';
import { createSelector } from '@ngrx/store';


export interface ListState {
  list: any[];
}

export const initialListState: ListState = {
  list: []
};

export const selectListFeature = (state: any) => state.list;

export function reducer(state = initialListState, action: ListActions): ListState {
  switch (action.type) {

    case ListActionTypes.LoadLists:
      return { ...state, list: ['one added'] };

    default:
      return state;
  }
}
