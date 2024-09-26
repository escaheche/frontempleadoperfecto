import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { AuthInterceptor } from './app/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './app/auth.guard';  // Importa el AuthGuard
import { EmpresasService } from './app/empresas.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Las rutas
    provideHttpClient(withInterceptorsFromDi()),  // Configuración del HttpClient con interceptores
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },  // Interceptor para JWT
    FormsModule,
    EmpresasService,
    AuthGuard  // Asegúrate de proveer AuthGuard aquí
  ]
}).catch(err => console.error(err));
