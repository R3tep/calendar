import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GeneralState, GENERAL_STATE } from './general-state.state';

const selectGeneralState = createFeatureSelector<GeneralState>(GENERAL_STATE);

export const selectCurrentDate = createSelector(
  selectGeneralState,
  (state: GeneralState) => state.currentDate
);
