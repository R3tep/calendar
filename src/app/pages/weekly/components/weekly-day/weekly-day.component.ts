import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { dateToStringKey } from '@app/shared/utils';
import { EventsFacade } from '@app/store/events';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-weekly-day',
  templateUrl: './weekly-day.component.html',
  styleUrls: ['./weekly-day.component.scss'],
})
export class WeeklyDayComponent implements OnInit, OnDestroy {
  @Input() day!: Date;
  @Input() current!: Date;
  stop = new Subject();

  public events: { [key: string]: { title: string; description: string; index: number }[] } = {};

  public hours = Array.apply(null, Array(24)).map((_, index) => index);

  constructor(private eventsFacade: EventsFacade) {}

  ngOnInit(): void {
    this.eventsFacade
      .selectEventsByDate$(this.day)
      .pipe(
        takeUntil(this.stop),
        tap((events = []) => {
          this.events = events.reduce(function (
            acc: { [key: string]: { title: string; description: string; index: number }[] },
            cur,
            index
          ) {
            if (cur.hour)
              acc[cur.hour] = acc[cur.hour]
                ? [
                    ...acc[cur.hour],
                    {
                      title: cur.title,
                      description: cur.description,
                      index,
                    },
                  ]
                : [
                    {
                      title: cur.title,
                      description: cur.description,
                      index,
                    },
                  ];
            return acc;
          },
          {});
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.stop.next(null);
    this.stop.complete();
  }

  public addEvent(hour: number): void {
    this.eventsFacade.setSelectedEvent({
      hour,
      date: dateToStringKey(this.day),
    });
    this.eventsFacade.toggleShowManageEvent();
  }

  public manageEvent(index: number, hour: number): void {
    this.eventsFacade.setSelectedEvent({
      hour,
      date: dateToStringKey(this.day),
      index,
    });
    this.eventsFacade.toggleShowManageEvent();
  }
}
