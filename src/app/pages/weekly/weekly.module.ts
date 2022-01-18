import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventModule } from '@app/shared/components';
import { WeeklyPageComponent, WeeklyDayComponent } from './components';
import { WeeklyRoutingModule } from './weekly-routing.module';

@NgModule({
  declarations: [WeeklyPageComponent, WeeklyDayComponent],
  imports: [CommonModule, WeeklyRoutingModule, EventModule],
})
export class WeeklyModule {}
