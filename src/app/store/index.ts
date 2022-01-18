import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { EventsEffects } from './events/events.effects';
import { eventsReducer } from './events/events.reducer';
import { EVENTS, EventsState, initialState as eventsInitialState } from './events/events.state';
import { GeneralStateEffects } from './general-state/general-state.effects';
import { generalStateReducer } from './general-state/general-state.reducer';
import {
  initialState as generalInitialState,
  GeneralState,
  GENERAL_STATE,
} from './general-state/general-state.state';

export interface AppState {
  [GENERAL_STATE]: GeneralState;
  [EVENTS]: EventsState;
}

export const initialAppState: AppState = {
  [GENERAL_STATE]: generalInitialState,
  [EVENTS]: eventsInitialState,
};

export function getInitialState(): AppState {
  return localStorage.getItem('state')
    ? (JSON.parse(localStorage.getItem('state') as string) as AppState)
    : initialAppState;
}

export const appReducers: ActionReducerMap<any, any> = {
  [GENERAL_STATE]: generalStateReducer,
  [EVENTS]: eventsReducer,
};

function localStorageSyncReducer(reducer: ActionReducer<any, Action>): ActionReducer<any, Action> {
  return localStorageSync({
    keys: [GENERAL_STATE, EVENTS],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<any, any>[] = [localStorageSyncReducer];

export const appEffects: any[] = [GeneralStateEffects, EventsEffects];
