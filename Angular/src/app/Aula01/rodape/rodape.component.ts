import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../lista03/usuario.service';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
})
export class RodapeComponent implements OnInit {
  usuario: { email: string; nome: string } | null = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe((usuario) => {
      this.usuario = usuario;
    });
  }
}
