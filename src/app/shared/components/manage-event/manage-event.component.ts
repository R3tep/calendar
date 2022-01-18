import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DescEvent, SelectedEvent } from '@app/common';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageEventComponent implements OnInit {
  @Input() selectedEvent: SelectedEvent | null = null;
  @Input() eventValues!: DescEvent;

  @Output() sendCloseModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() sendSaveEvent: EventEmitter<DescEvent> = new EventEmitter<DescEvent>();

  public eventForm!: FormGroup;

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl(this.eventValues?.title || '', [Validators.required]),
      description: new FormControl(this.eventValues?.description || ''),
    });
  }

  public closeModal(): void {
    this.sendCloseModal.emit();
  }

  public saveEvent(): void {
    if (this.eventForm.valid) {
      const { title, description } = this.eventForm.getRawValue();
      const event: DescEvent = {
        hour: this.selectedEvent?.hour || 0,
        title,
        description,
      };

      this.sendSaveEvent.emit(event);
    }
  }
}
