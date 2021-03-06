import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ReleasePipe } from './pipes/release.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ReleasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

