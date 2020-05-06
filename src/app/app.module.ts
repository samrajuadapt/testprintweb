import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';
import { NgxPrinterModule } from 'ngx-printer'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    NgxPrinterModule.forRoot({printOpenWindow:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
