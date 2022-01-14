import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appEffects, appReducers } from '.';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot(appReducers), EffectsModule.forRoot(appEffects)],
})
export class AppStoreModule {}
