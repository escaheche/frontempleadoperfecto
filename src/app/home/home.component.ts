import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-home',
  standalone: true,  // Especifica que es un componente standalone
  imports: [RouterModule],  // Importa RouterModule para que routerLink funcione
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}

