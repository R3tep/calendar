import { CalendarEvent, SelectedEvent } from '@app/common';

export interface EventsState {
  events: CalendarEvent;
  showManageEvent: boolean;
  selectedEvent: SelectedEvent | null;
}

export const EVENTS = 'events';
export const initialState: EventsState = {
  events: {},
  showManageEvent: false,
  selectedEvent: null,
};
