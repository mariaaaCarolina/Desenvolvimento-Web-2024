import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onLogin(): void {
    this.usuarioService.getUsuario(this.email, this.password).subscribe(
      (usuario) => {
        if (usuario) {
          this.router.navigate(['/principal']);

          this.email = '';
          this.password = '';
        } else {
          this.errorMessage = 'E-mail ou senha inválido!';
        }
      },
      (error) => {
        console.error('Erro ao buscar o usuário:', error);
        this.errorMessage = 'Ocorreu um erro ao realizar o login.';
      }
    );
  }
}
