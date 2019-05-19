import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpGetService } from './httpget.service';
import {ModalComponent} from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpGetService],
  bootstrap: [AppComponent]
})

export class AppModule { }
