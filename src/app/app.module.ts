import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoListComponent } from './auto-list/auto-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AutoPopupComponent } from './auto-popup/auto-popup.component';
import { FormsModule } from '@angular/forms';
import { CreditPopupComponent } from './credit-popup/credit-popup.component'

@NgModule({
  declarations: [AppComponent, AutoListComponent, AutoPopupComponent, CreditPopupComponent],
  imports: [BrowserModule, ModalModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
