import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Baitap1Module } from './baitap1/baitap1.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Baitap1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
