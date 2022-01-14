import { createAction, props } from '@ngrx/store';

export const SET_CURRENT_DATE = '[GENERAL] set current date';

export const setCurrentDate = createAction(SET_CURRENT_DATE, props<{ date: Date }>());
