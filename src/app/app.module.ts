import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule, routedComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { KeyboardEventService } from './services/keyboard-event.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    routedComponents
  ],
  providers: [
    KeyboardEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
