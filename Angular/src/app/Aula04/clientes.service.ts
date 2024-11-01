import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  link: string = 'http://localhost:3000/clientes';

  constructor() {}
  getClientes() {
    return fetch(this.link).then((res) => res.json());
  }
}
