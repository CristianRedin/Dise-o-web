import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { CardsComponent } from './cards/cards.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MatricezComponent } from './matricez/matricez.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveComponent,
    CardsComponent,
    MatricezComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
