import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: false,
  
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    if (this.nombre && this.correo) {
      alert('Formulario enviado');
    }
  }
}
