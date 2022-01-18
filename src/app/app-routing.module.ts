import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesEnum } from '@app/common';

const routes: Routes = [
  {
    path: RoutesEnum.WEEKLY,
    loadChildren: () => import('@app/pages/weekly/weekly.module').then((m) => m.WeeklyModule),
  },
  {
    path: RoutesEnum.NOT_FOUND,
    loadChildren: () => import('@app/pages/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: RoutesEnum.NOT_FOUND,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
