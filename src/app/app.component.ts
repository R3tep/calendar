import { Component, OnInit } from '@angular/core';
import { filter, mergeMap, tap } from 'rxjs';
import { DescEvent, SelectedEvent } from './common';
import { EventsFacade } from './store/events';
import { GeneralStateFacade } from './store/general-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'calendar';
  currentSelectedEvent!: SelectedEvent;
  eventValues!: DescEvent;
  constructor(public generalFacade: GeneralStateFacade, public eventsFacade: EventsFacade) {}

  ngOnInit(): void {
    this.eventsFacade.selectSelectedEvent$
      .pipe(
        tap((event) => {
          if (event) {
            this.currentSelectedEvent = event;
          }
        }),
        filter((event) => typeof event?.index === 'number'),
        mergeMap((event) =>
          this.eventsFacade.selectEventByDateAndIndex$(event?.date || '', event?.index || 0)
        ),
        tap((event) => {
          this.eventValues = {
            title: event.title,
            description: event.description,
          };
        })
      )
      .subscribe();
  }

  public setCurrentDate(date: Date) {
    this.generalFacade.setCurrentDate(date);
  }

  public closeManageEvent(): void {
    this.eventsFacade.toggleShowManageEvent();
    this.eventValues = { title: '', description: '' };
  }

  public saveEvent(event: DescEvent): void {
    const eventToSave = {
      [this.currentSelectedEvent.date]: [
        {
          hour: event.hour,
          title: event.title,
          description: event.description,
        },
      ],
    };
    if (typeof this.currentSelectedEvent.index === 'number') {
      this.eventsFacade.updateEvent(eventToSave, this.currentSelectedEvent.index);
    } else {
      this.eventsFacade.setNewEvent(eventToSave);
    }
    this.closeManageEvent();
  }
}
