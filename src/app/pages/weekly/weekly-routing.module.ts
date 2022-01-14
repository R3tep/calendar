import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeeklyPageComponent } from './components/weekly-page';

const routes = [{ path: '', component: WeeklyPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyRoutingModule {}
