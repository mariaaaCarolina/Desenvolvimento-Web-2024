import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<{
    email: string;
    nome: string;
  } | null>(null);

  constructor() {}

  setUsuario(usuario: { email: string; nome: string }): void {
    this.usuarioSubject.next(usuario);
  }

  getUsuario(): Observable<{ email: string; nome: string } | null> {
    return this.usuarioSubject.asObservable();
  }
}
