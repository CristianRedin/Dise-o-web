import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { CardsComponent } from './cards/cards.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MatricezComponent } from './matricez/matricez.component';
import { BotonesComponent } from './botones/botones.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CarouselModule } from 'primeng/carousel';
import { FormularioComponent } from './formulario/formulario.component';

// Módulos de Angular
import { FormsModule } from '@angular/forms';  // Para formularios con ngModel
import { ReactiveFormsModule } from '@angular/forms'; // Si utilizas formularios reactivos

// Módulos de PrimeNG para formularios y mensajes
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveComponent,
    CardsComponent,
    MatricezComponent,
    BotonesComponent,
    CarruselComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    FormsModule,  // Necesario para formularios basados en ngModel
    ReactiveFormsModule,  // Si usas formularios reactivos
    InputTextModule,  // Para los campos de texto de PrimeNG
    MessagesModule,   // Para los mensajes de error/success
    MessageModule     // Para el componente de mensajes individuales
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
