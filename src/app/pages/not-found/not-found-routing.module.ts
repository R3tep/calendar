import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page';

const routes = [{ path: '', component: NotFoundPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}
