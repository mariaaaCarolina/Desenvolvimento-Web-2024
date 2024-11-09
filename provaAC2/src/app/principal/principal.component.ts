import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
  usuarios: any = [];
  filteredUsuarios: any = [];
  nomeFiltro: string = '';
  // private usuarioService = inject(UsuarioService);

  constructor(private serv: UsuarioService) {
    this.serv.getUsuarios().then((data) => {
      console.log(data);
      this.usuarios = data;
      this.filteredUsuarios = data;
    });
  }

  pesquisar() {
    this.filteredUsuarios = this.usuarios.filter((usuario: any) => {
      return usuario.nome.toLowerCase().includes(this.nomeFiltro.toLowerCase());
    });
  }
}
