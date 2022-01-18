import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventComponent } from './event.component';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(
    waitForAsync(() => {
      return TestBed.configureTestingModule({
        declarations: [EventComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should triger toggleDisplayEvent toggle showEvents', () => {
    component.toggleDisplayEvent();
    fixture.detectChanges();
    expect(component.showEvents).toBeTruthy();
  });

  it('should when trigger addEvent emit sendAddEvent', () => {
    spyOn(component.sendAddEvent, 'emit');
    component.addEvent();
    fixture.detectChanges();
    expect(component.sendAddEvent.emit).toHaveBeenCalled();
  });

  it('should when trigger manageEvent emit sendManageEvent', () => {
    spyOn(component.sendManageEvent, 'emit');
    component.manageEvent(1);
    fixture.detectChanges();
    expect(component.sendManageEvent.emit).toHaveBeenCalledWith(1);
  });
});
