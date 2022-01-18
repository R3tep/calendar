import { CalendarEvent, SelectedEvent } from '@app/common';
import { createAction, props } from '@ngrx/store';

export const SET_NEW_EVENT = '[EVENT] set new event';
export const UPDATE_EVENT = '[EVENT] update event';
export const TOGGLE_SHOW_MANAGE_EVENT = '[EVENT] toggle show manage event';
export const SET_SELECTED_EVENT = '[EVENTS] set selected event';

export const setNewEvent = createAction(SET_NEW_EVENT, props<{ event: CalendarEvent }>());
export const updateEvent = createAction(UPDATE_EVENT, props<{ event: CalendarEvent; index: number }>());
export const toggleShowManageEvent = createAction(TOGGLE_SHOW_MANAGE_EVENT);
export const setSelectedEvent = createAction(SET_SELECTED_EVENT, props<{ event: SelectedEvent }>());
