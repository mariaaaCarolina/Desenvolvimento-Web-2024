import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  //obter todos os clientes
  getClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clientes`);
  }

  //obter um cliente pelo id
  getClienteById(clienteId: number): Observable<any> {
    console.log('Buscando cliente com ID:', clienteId);
    return this.http.get(`${this.baseUrl}/clientes/${clienteId}`);
  }

  //inserir um cliente
  setCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/postcliente`, cliente);
  }

  //atualizar um cliente
  atualizaCliente(id: number, cliente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/putclientes/${id}`, cliente);
  }

  //excluir um cliente
  excluiCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/excluirclientes/${id}`);
  }
}
