import { Component } from '@angular/core';
import { GeneralStateFacade } from './store/general-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'calendar';
  constructor(public generalFacade: GeneralStateFacade) {}

  public setCurrentDate(date: Date) {
    this.generalFacade.setCurrentDate(date);
  }
}
