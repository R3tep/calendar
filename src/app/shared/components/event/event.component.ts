import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent {
  @Input() events: { title: string; description: string; index: number }[] = [];

  @Output() sendManageEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() sendAddEvent: EventEmitter<void> = new EventEmitter<void>();

  public showEvents = false;

  public toggleDisplayEvent(): void {
    this.showEvents = !this.showEvents;
  }

  public addEvent(): void {
    this.sendAddEvent.emit();
  }

  public manageEvent(index: number): void {
    this.sendManageEvent.emit(index);
  }
}
