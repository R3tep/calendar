import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weekly-day',
  templateUrl: './weekly-day.component.html',
  styleUrls: ['./weekly-day.component.scss'],
})
export class WeeklyDayComponent {
  @Input() day!: Date;
  @Input() current!: Date;
}
