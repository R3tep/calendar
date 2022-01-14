import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCurrentDate } from './general-state.action';
import { selectCurrentDate } from './general-state.selector';

@Injectable({ providedIn: 'root' })
export class GeneralStateFacade {
  constructor(private store: Store) {}

  public selectCurrentDate$ = this.store.select(selectCurrentDate);

  public setCurrentDate(date: Date) {
    this.store.dispatch(setCurrentDate({ date }));
  }
}
