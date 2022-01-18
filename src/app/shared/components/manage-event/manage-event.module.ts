import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageEventComponent } from './manage-event.component';

@NgModule({
  declarations: [ManageEventComponent],
  exports: [ManageEventComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ManageEventModule {}
