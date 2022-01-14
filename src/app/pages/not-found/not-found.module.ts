import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './components';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
