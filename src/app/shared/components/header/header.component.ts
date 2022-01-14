import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() current!: Date | null;

  @Output() sendSetCurrentDate: EventEmitter<Date> = new EventEmitter<Date>();

  setCurrentDate(date: string) {
    this.sendSetCurrentDate.emit(new Date(date));
  }
}
