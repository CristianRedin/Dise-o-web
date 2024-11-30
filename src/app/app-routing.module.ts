import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveComponent } from './responsive/responsive.component';
import { CardsComponent } from './cards/cards.component';
import { MatricezComponent } from './matricez/matricez.component';

const routes: Routes = [
  { path: "responsive", component: ResponsiveComponent },
  {path:  "cards", component: CardsComponent},
  {path: "matricez", component:MatricezComponent}  // Corregir la ruta aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
