import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-login',
  standalone: true,  // Componente standalone
  imports: [FormsModule],  // Asegúrate de que FormsModule esté importado
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { username: '', password: '' };  

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Realiza la solicitud al backend para obtener el token
    this.http.post('https://empleadoperfecto.onrender.com/api/token/', this.loginData).subscribe(
      (response: any) => {
        // Almacena los tokens en sessionStorage
        sessionStorage.setItem('access_token', response.access);
        sessionStorage.setItem('refresh_token', response.refresh);

        // Redirige al usuario al home después de un login exitoso
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error de autenticación:', error);
        // Maneja errores de autenticación aquí (mostrar mensaje al usuario)
      }
    );
  }
}




