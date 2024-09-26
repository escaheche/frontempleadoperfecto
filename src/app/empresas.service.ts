import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  private apiUrl = 'https://empleadoperfecto.onrender.com/api/empresas/';

  constructor(private http: HttpClient) {}

  // Obtener todas las empresas
  getEmpresas(): Observable<any> {
    const token = sessionStorage.getItem('access_token');  // Asegúrate de tener el token
    if (!token) {
      console.error('No token found');
      return throwError('No token found');
    }

    return this.http.get<any>(this.apiUrl, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`  // Agregar el token a la cabecera
      })
    }).pipe(
      catchError((error) => {
        console.error('Error al obtener empresas:', error);
        return throwError(error);  // Manejar el error
      })
    );
  }

  // Crear nueva empresa
  crearEmpresa(empresa: any): Observable<any> {
    const token = sessionStorage.getItem('access_token');  // Obtener el token
    return this.http.post<any>(this.apiUrl, empresa, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError((error) => {
        console.error('Error al crear empresa:', error);
        return throwError(error);  // Manejar el error
      })
    );
  }
}
