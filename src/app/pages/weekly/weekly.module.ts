import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WeeklyPageComponent, WeeklyDayComponent } from './components';
import { WeeklyRoutingModule } from './weekly-routing.module';

@NgModule({
  declarations: [WeeklyPageComponent, WeeklyDayComponent],
  imports: [CommonModule, WeeklyRoutingModule],
})
export class WeeklyModule {}
