import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss'],
})
export class UsuarioLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onLogin() {
    if (this.email && this.password) {
      this.usuarioService.setUsuario({
        email: this.email,
        nome: 'Usuário:',
      });
      this.router.navigate(['/principal']);
    }
  }
}
