import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormatPipe } from './format.pipe';
import { JoinPipe } from './join.pipe';
import { RootPipe } from './root.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormatPipe,
    JoinPipe,
    RootPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
