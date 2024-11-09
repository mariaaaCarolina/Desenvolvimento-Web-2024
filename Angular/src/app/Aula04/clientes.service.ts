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
  adicionarCliente(cliente: any) {
    return fetch(this.link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    }).then((res) => res.json());
  }
}
