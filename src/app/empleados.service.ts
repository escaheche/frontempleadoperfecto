import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private apiUrl = 'https://empleadoperfecto.onrender.com/api/empleados/';  // Asegúrate de que la URL termine con una barra

  constructor(private http: HttpClient) {}

  // Obtener todos los empleados
  getEmpleados(): Observable<any> {
    const token = sessionStorage.getItem('access_token');
    return this.http.get<any>(this.apiUrl, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }).pipe(
      catchError((error) => {
        console.error('Error al obtener empleados:', error);
        return throwError(error);
      })
    );
  }

  // Crear un nuevo empleado
 // Crear un nuevo empleado
crearEmpleado(empleado: any): Observable<any> {
  const token = sessionStorage.getItem('access_token');
  
  // Asegúrate de enviar el ID de la empresa directamente, ya que es el valor que captura el frontend
  const empleadoData = {
    nombre_completo: empleado.nombre_completo,
    rut: empleado.rut,
    email: empleado.email,
    password: empleado.password,
    empresa: empleado.empresa  // Envía directamente el ID de la empresa
  };
  
  return this.http.post<any>(this.apiUrl, empleadoData, {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    })
  }).pipe(
    catchError((error) => {
      console.error('Error al crear empleado:', error);
      return throwError(error);
    })
  );
}

  
}

