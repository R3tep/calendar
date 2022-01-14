import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      return TestBed.configureTestingModule({
        declarations: [HeaderComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.current = new Date('11-11-2011');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the current month', () => {
    expect(fixture.nativeElement.querySelector('h1').innerText).toEqual('November 2011');
  });

  it('should when trigger setCurrentDate emit the date', () => {
    spyOn(component.sendSetCurrentDate, 'emit');
    component.setCurrentDate('11-11-2011');
    fixture.detectChanges();
    expect(component.sendSetCurrentDate.emit).toHaveBeenCalledWith(new Date('11-11-2011'));
  });
});
