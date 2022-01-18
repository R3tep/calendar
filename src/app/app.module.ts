import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderModule, ManageEventModule } from './shared/components';
import { AppStoreModule } from './store/app-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppStoreModule, HeaderModule, ManageEventModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
