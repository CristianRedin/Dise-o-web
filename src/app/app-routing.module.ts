import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveComponent } from './responsive/responsive.component';
import { CardsComponent } from './cards/cards.component';
import { MatricezComponent } from './matricez/matricez.component';
import { BotonesComponent } from './botones/botones.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioComponent } from './formulario/formulario.component';



const routes: Routes = [
  { path: "responsive", component: ResponsiveComponent },
  {path:  "cards", component: CardsComponent},
  {path: "matricez", component:MatricezComponent},
  {path:"boton", component:BotonesComponent},
  {path:"carrusel", component:CarruselComponent},
  {path:"formulario", component:FormularioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
