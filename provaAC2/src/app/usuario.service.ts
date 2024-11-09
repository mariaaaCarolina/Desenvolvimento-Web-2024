import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'https://6729633e6d5fa4901b6cfc1d.mockapi.io/usuario';

  constructor(private http: HttpClient) {}

  getUsuarios() {
    return fetch(this.apiUrl).then((res) => res.json());
  }

  getUsuario(email: string, senha: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?email=${email}&senha=${senha}`);
  }
}
