import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TablaAlumnosComponent } from './tabla-alumnos/tabla-alumnos.component';
import { TablaCursosComponent } from './tabla-cursos/tabla-cursos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablaAlumnosComponent, TablaCursosComponent, NgIf],
  template: `<div *ngIf="visible">Hi</div>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cursos: boolean = true;

  handleCambio() {
    this.cursos = !this.cursos;
  }
}
