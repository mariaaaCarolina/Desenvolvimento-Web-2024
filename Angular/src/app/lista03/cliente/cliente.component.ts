import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

interface Cliente {
  id?: number;
  nome: string;
  email: string;
  telefone?: string;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  cliente: Cliente = { nome: '', email: '', telefone: '' };
  clienteAtual: Cliente | undefined;
  clienteId: number | undefined;
  editMode: boolean = false;
  telefoneAtual: string = '';

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe((data: Cliente[]) => {
      this.clientes = data;
    });
  }

  editCliente(cliente: Cliente) {
    this.clienteAtual = cliente;
    this.telefoneAtual = cliente.telefone || '';
    this.editMode = true;
  }

  deleteCliente(id: number | undefined): void {
    if (id !== undefined) {
      console.log('Tentando excluir cliente com ID:', id);
      this.clienteService.excluiCliente(id).subscribe(
        (response) => {
          console.log('Resposta da API ao excluir cliente:', response);
          this.getClientes();
        },
        (error) => {
          console.error('Erro ao excluir cliente:', error);
          alert('Erro ao excluir cliente.');
        }
      );
    } else {
      console.error('ID do cliente é indefinido, não é possível excluir.');
    }
  }

  onCreate(): void {
    this.clienteService.setCliente(this.cliente).subscribe(() => {
      this.getClientes();
      this.resetCreateForm();
    });
  }

  fetchClienteById(clienteId: number | undefined): void {
    if (clienteId !== undefined && clienteId > 0) {
      this.clienteService.getClienteById(clienteId).subscribe({
        next: (data: Cliente[]) => {
          if (data.length > 0) {
            console.log('Cliente encontrado:', data[0]);
            this.clienteAtual = data[0];
          } else {
            alert('Cliente não encontrado.');
          }
        },
        error: (err) => {
          console.error('Erro ao buscar cliente:', err);
          alert('Erro ao buscar cliente.');
        },
      });
    } else {
      alert('Por favor, insira um ID válido.');
    }
  }

  onUpdate(): void {
    if (this.clienteAtual && this.clienteAtual.id) {
      this.clienteAtual.telefone = this.telefoneAtual;

      this.clienteService
        .atualizaCliente(this.clienteAtual.id, this.clienteAtual)
        .subscribe(() => {
          this.getClientes();
          this.resetUpdateForm();
        });
    }
  }

  resetCreateForm(): void {
    this.cliente = { nome: '', email: '', telefone: '' };
    this.editMode = false;
  }

  resetUpdateForm(): void {
    this.clienteAtual = undefined;
    this.clienteId = undefined;
    this.telefoneAtual = '';
    this.editMode = false;
  }
}
