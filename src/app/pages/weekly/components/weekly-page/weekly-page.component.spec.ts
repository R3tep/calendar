import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EventModule } from '@app/shared/components';
import { EventsFacade } from '@app/store/events';
import { GeneralStateFacade } from '@app/store/general-state';
import { of } from 'rxjs';
import { WeeklyDayComponent } from '..';

import { WeeklyPageComponent } from './weekly-page.component';

describe('WeeklyPageComponent', () => {
  let component: WeeklyPageComponent;
  let fixture: ComponentFixture<WeeklyPageComponent>;

  beforeEach(
    waitForAsync(() => {
      return TestBed.configureTestingModule({
        declarations: [WeeklyPageComponent, WeeklyDayComponent],
        imports: [EventModule],
        providers: [
          {
            provide: GeneralStateFacade,
            useValue: {
              selectCurrentDate$: of(new Date('11-11-2011')),
            },
          },
          {
            provide: EventsFacade,
            useValue: {
              selectEventsByDate$: () => of(null),
            },
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define the correct monday', () => {
    expect(component.monday).toEqual(new Date('11/7/2011'));
  });

  it('should define the correct days', () => {
    expect(component.days).toEqual([
      new Date('11/7/2011'),
      new Date('11/8/2011'),
      new Date('11/9/2011'),
      new Date('11/10/2011'),
      new Date('11/11/2011'),
      new Date('11/12/2011'),
      new Date('11/13/2011'),
    ]);
  });
});
