import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DolarComponent } from './dolar/dolar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DolarService } from './dolar/dolar.service';

@NgModule({
  declarations: [
    AppComponent,
    DolarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ DolarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
