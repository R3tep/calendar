import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventComponent } from './event.component';

@NgModule({
  declarations: [EventComponent],
  exports: [EventComponent],
  imports: [CommonModule],
})
export class EventModule {}
