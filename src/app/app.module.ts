import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { RainbowcomponentComponent } from './rainbowcomponent/rainbowcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    RainbowDirective,
    RainbowcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
