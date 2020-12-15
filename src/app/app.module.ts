import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  exports : [
    /* Declaracion de modulos que van a ser consumidos por otros modulos */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
