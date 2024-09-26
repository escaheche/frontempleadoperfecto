import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';  // Importa el servicio de empleados
import { EmpresasService } from '../empresas.service';  // Importa el servicio de empresas
import { CommonModule } from '@angular/common';  // Necesario para *ngFor
import { FormsModule } from '@angular/forms';  // Necesario para ngModel
import { FilterPipe } from '../../app/pipes/filter.pipe';

@Component({
  selector: 'app-mis-empleados',
  templateUrl: './mis-empleados.component.html',
  styleUrls: ['./mis-empleados.component.css'],
  imports: [CommonModule, FormsModule, FilterPipe],
  standalone: true  // Componente standalone
})
export class MisEmpleadosComponent implements OnInit {
  empleados: any[] = [];  // Lista de empleados
  empresas: any[] = [];   // Lista de empresas para el dropdown
  filtroNombre: string = '';  // Variable para el filtro por nombre
  filtroEmpresa: string = '';  // Variable para el filtro por empresa
  nuevoEmpleado = { nombre_completo: '', rut: '', email: '', password: '', empresa: '' };  // Modelo para el nuevo empleado

  constructor(private empleadosService: EmpleadosService, private empresasService: EmpresasService) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
    this.obtenerEmpresas();  // Llama a obtener las empresas disponibles
  }

  // Obtener todos los empleados
  obtenerEmpleados(): void {
    this.empleadosService.getEmpleados().subscribe(
      (data) => {
        this.empleados = data;
      },
      (error) => {
        console.error('Error al obtener empleados:', error);
      }
    );
  }

  // Obtener todas las empresas
  obtenerEmpresas(): void {
    this.empresasService.getEmpresas().subscribe(
      (data) => {
        this.empresas = data;
      },
      (error) => {
        console.error('Error al obtener empresas:', error);
      }
    );
  }

  // Crear un nuevo empleado
  crearEmpleado(): void {
    // Asegurarte de que el ID de la empresa es un número o un string
    if (!this.nuevoEmpleado.empresa || isNaN(Number(this.nuevoEmpleado.empresa))) {
      console.error('El ID de la empresa no es válido:', this.nuevoEmpleado.empresa);
      return;
    }
  
    const empleadoConEmpresaId = {
      ...this.nuevoEmpleado,
      empresa: this.nuevoEmpleado.empresa  // Aquí debería ser solo el ID
    };
  
    console.log('Payload a enviar:', empleadoConEmpresaId);  // Verifica el payload en la consola
  
    this.empleadosService.crearEmpleado(empleadoConEmpresaId).subscribe(
      (data) => {
        this.empleados.push(data);
        this.nuevoEmpleado = { nombre_completo: '', rut: '', email: '', password: '', empresa: '' };  // Reinicia el formulario
      },
      (error) => {
        console.error('Error al crear empleado:', error);
      }
    );
  }
  
  
  
}



