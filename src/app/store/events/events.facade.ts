import { Injectable } from '@angular/core';
import { CalendarEvent, DescEvent, SelectedEvent } from '@app/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setNewEvent, setSelectedEvent, toggleShowManageEvent, updateEvent } from './events.action';
import {
  selectEventsByDate,
  selectEventByDateAndIndex,
  selectSelectedEvent,
  selectShowManageEvent,
} from './events.selector';

@Injectable({ providedIn: 'root' })
export class EventsFacade {
  public selectShowManageEvent$ = this.store.select(selectShowManageEvent);
  public selectSelectedEvent$ = this.store.select(selectSelectedEvent);

  constructor(private store: Store) {}

  public selectEventsByDate$(date: Date): Observable<DescEvent[]> {
    return this.store.select(selectEventsByDate(date));
  }

  public selectEventByDateAndIndex$(dateKey: string, index: number): Observable<DescEvent> {
    return this.store.select(selectEventByDateAndIndex(dateKey, index));
  }

  public setNewEvent(event: CalendarEvent) {
    this.store.dispatch(setNewEvent({ event }));
  }

  public updateEvent(event: CalendarEvent, index: number) {
    this.store.dispatch(updateEvent({ event, index }));
  }

  public setSelectedEvent(event: SelectedEvent) {
    this.store.dispatch(setSelectedEvent({ event }));
  }

  public toggleShowManageEvent() {
    this.store.dispatch(toggleShowManageEvent());
  }
}
