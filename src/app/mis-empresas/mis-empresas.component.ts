import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../empresas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mis-empresas',
  templateUrl: './mis-empresas.component.html',
  styleUrls: ['./mis-empresas.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class MisEmpresasComponent implements OnInit {
  empresas: any[] = [];
  nuevaEmpresa = { nombre: '', direccion: '', rut: '', telefono: '' };

  constructor(private empresasService: EmpresasService) {}

  ngOnInit(): void {
    this.obtenerEmpresas();  // Llama al método para obtener las empresas cuando se inicializa el componente
  }

  obtenerEmpresas(): void {
    this.empresasService.getEmpresas().subscribe(
      (data) => {
        this.empresas = data;  // Asigna los datos de empresas obtenidos
      },
      (error) => {
        console.error('Error al obtener empresas:', error);  // Maneja el error si no se pueden obtener las empresas
      }
    );
  }

  crearEmpresa(): void {
    this.empresasService.crearEmpresa(this.nuevaEmpresa).subscribe(
      (data) => {
        this.empresas.push(data);  // Agrega la nueva empresa a la lista
        this.nuevaEmpresa = { nombre: '', direccion: '', rut: '', telefono: '' };  // Reinicia el formulario
      },
      (error) => {
        console.error('Error al crear empresa:', error);  // Maneja el error si no se puede crear la empresa
      }
    );
  }
}