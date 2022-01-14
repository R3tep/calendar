import { Action, createReducer, on } from '@ngrx/store';
import { setCurrentDate } from './general-state.action';
import { GeneralState, initialState } from './general-state.state';

const _generalStateReducer = createReducer(
  initialState,
  on(
    setCurrentDate,
    (state, action): GeneralState => ({
      ...state,
      currentDate: action.date,
    })
  )
);

export function generalStateReducer(state: GeneralState, action: Action) {
  return _generalStateReducer(state, action);
}
