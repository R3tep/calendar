import { Component, OnDestroy, OnInit } from '@angular/core';
import { firstWeekDayByDate } from '@app/shared/utils/date.utils';
import { GeneralStateFacade } from '@app/store/general-state';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-weekly-page',
  templateUrl: './weekly-page.component.html',
  styleUrls: ['./weekly-page.component.scss'],
})
export class WeeklyPageComponent implements OnInit, OnDestroy {
  monday!: Date;
  current!: Date;
  stop = new Subject();

  days: Date[] = [];

  constructor(private generalFacade: GeneralStateFacade) {}

  ngOnInit(): void {
    this.generalFacade.selectCurrentDate$
      .pipe(
        takeUntil(this.stop),
        tap((date) => {
          this.current = date;
          this.monday = firstWeekDayByDate(this.current);
          const weekDay = new Date(this.monday);
          this.days = Array.apply(null, Array(7)).map(
            (_, index) => new Date(weekDay.setDate(weekDay.getDate() + +(index !== 0)))
          );
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.stop.next(null);
    this.stop.complete();
  }
}
