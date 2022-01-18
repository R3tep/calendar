import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventModule } from '@app/shared/components';
import { EventsFacade } from '@app/store/events';
import { of } from 'rxjs';

import { WeeklyDayComponent } from './weekly-day.component';

describe('WeeklyDayComponent', () => {
  let component: WeeklyDayComponent;
  let fixture: ComponentFixture<WeeklyDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyDayComponent],
      imports: [EventModule],
      providers: [
        {
          provide: EventsFacade,
          useValue: {
            selectEventsByDate$: () => of(null),
            setSelectedEvent: () => {},
            toggleShowManageEvent: () => {},
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyDayComponent);
    component = fixture.componentInstance;
    component.current = new Date('11/11/2011');
    component.day = new Date('11/11/2011');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger addEvent call event facade', () => {
    spyOn((component as any).eventsFacade, 'setSelectedEvent');
    spyOn((component as any).eventsFacade, 'toggleShowManageEvent');
    component.addEvent(12);
    fixture.detectChanges();
    expect((component as any).eventsFacade.setSelectedEvent).toHaveBeenCalled();
    expect((component as any).eventsFacade.toggleShowManageEvent).toHaveBeenCalled();
  });

  it('should trigger manageEvent call event facade', () => {
    spyOn((component as any).eventsFacade, 'setSelectedEvent');
    spyOn((component as any).eventsFacade, 'toggleShowManageEvent');
    component.manageEvent(1, 12);
    fixture.detectChanges();
    expect((component as any).eventsFacade.setSelectedEvent).toHaveBeenCalled();
    expect((component as any).eventsFacade.toggleShowManageEvent).toHaveBeenCalled();
  });
});
