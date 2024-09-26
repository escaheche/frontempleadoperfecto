import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verifica si el token de acceso está presente
    const token = sessionStorage.getItem('access_token');
    if (token) {
      return true;  // Permite la navegación
    } else {
      // Redirige al login si no hay token
      this.router.navigate(['/login']);
      return false;
    }
  }
}


