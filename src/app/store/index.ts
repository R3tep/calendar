import { ActionReducerMap } from '@ngrx/store';
import { GeneralStateEffects } from './general-state/general-state.effects';
import { generalStateReducer } from './general-state/general-state.reducer';
import {
  initialState as generalInitialState,
  GeneralState,
  GENERAL_STATE,
} from './general-state/general-state.state';

export interface AppState {
  [GENERAL_STATE]: GeneralState;
}

export const initialAppState: AppState = {
  [GENERAL_STATE]: generalInitialState,
};

export function getInitialState(): AppState {
  return localStorage.getItem('state')
    ? (JSON.parse(localStorage.getItem('state') as string) as AppState)
    : initialAppState;
}

export const appReducers: ActionReducerMap<any, any> = {
  [GENERAL_STATE]: generalStateReducer,
};

export const appEffects: any[] = [GeneralStateEffects];
