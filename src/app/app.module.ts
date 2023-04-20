import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DatePipe} from "@angular/common";
import { ItemListComponent } from './sales/item-list/item-list.component';
import { ReportComponent } from './sales/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
