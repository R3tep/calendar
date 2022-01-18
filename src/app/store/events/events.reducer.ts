import { Action, createReducer, on } from '@ngrx/store';
import { setNewEvent, setSelectedEvent, toggleShowManageEvent, updateEvent } from './events.action';
import { EventsState, initialState } from './events.state';

const _eventsReducer = createReducer(
  initialState,
  on(setNewEvent, (state, action): EventsState => {
    const key = Object.keys(action.event)[0];
    const savedEvents = state.events?.[key] ? state.events[key] : [];
    return {
      ...state,
      events: { ...state.events, [key]: [...savedEvents, ...action.event[key]] },
    };
  }),
  on(updateEvent, (state, action): EventsState => {
    const key = Object.keys(action.event)[0];
    const eventsDate = [...state.events[key]];
    eventsDate[action.index] = action.event[key][0];
    return {
      ...state,
      events: { ...state.events, [key]: eventsDate },
    };
  }),
  on(toggleShowManageEvent, (state): EventsState => {
    return {
      ...state,
      showManageEvent: !state.showManageEvent,
    };
  }),
  on(setSelectedEvent, (state, action): EventsState => {
    return {
      ...state,
      selectedEvent: action.event,
    };
  })
);

export function eventsReducer(state: EventsState, action: Action) {
  return _eventsReducer(state, action);
}
