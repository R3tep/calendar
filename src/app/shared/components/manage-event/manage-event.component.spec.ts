import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManageEventComponent } from './manage-event.component';
import { ManageEventModule } from '.';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

describe('ManageEventComponent', () => {
  let component: ManageEventComponent;
  let fixture: ComponentFixture<ManageEventComponent>;

  beforeEach(
    waitForAsync(() => {
      return TestBed.configureTestingModule({
        declarations: [ManageEventComponent],
        providers: [FormBuilder],
        imports: [ManageEventModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should when trigger closeModal emit sendCloseModal', () => {
    spyOn(component.sendCloseModal, 'emit');
    component.closeModal();
    fixture.detectChanges();
    expect(component.sendCloseModal.emit).toHaveBeenCalled();
  });

  it('should when trigger saveEvent emit sendSaveEvent', () => {
    const formBuilder = TestBed.inject(FormBuilder);
    component.eventForm = formBuilder.group({
      title: new FormControl(
        {
          value: ['title'],
        },
        Validators.required
      ),
      description: new FormControl({
        value: ['description'],
      }),
    });
    spyOn(component.sendSaveEvent, 'emit');
    component.saveEvent();
    fixture.detectChanges();
    expect(component.sendSaveEvent.emit).toHaveBeenCalled();
  });
});
