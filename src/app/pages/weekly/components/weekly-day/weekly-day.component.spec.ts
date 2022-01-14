import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyDayComponent } from './weekly-day.component';

describe('WeeklyDayComponent', () => {
  let component: WeeklyDayComponent;
  let fixture: ComponentFixture<WeeklyDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyDayComponent],
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
});
