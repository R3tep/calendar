import { dateToStringKey } from '@app/shared/utils';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventsState, EVENTS } from './events.state';

const selectEvents = createFeatureSelector<EventsState>(EVENTS);

export const selectShowManageEvent = createSelector(
  selectEvents,
  (state: EventsState) => state.showManageEvent
);

export const selectSelectedEvent = createSelector(selectEvents, (state: EventsState) => state.selectedEvent);

export const selectEventsByDate = (date: Date) => {
  const dateString = dateToStringKey(date);
  return createSelector(selectEvents, (state: EventsState) => state.events[dateString]);
};

export const selectEventByDateAndIndex = (dateKey: string, index: number) => {
  return createSelector(selectEvents, (state: EventsState) => state.events[dateKey][index]);
};
