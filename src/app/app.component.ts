import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  // Importa el servicio Router
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,CommonModule, RouterModule],  // Asegúrate de que NavbarComponent esté importado
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // Método para verificar si estamos en la página de login
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
