import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesService } from '../../Aula04/clientes.service';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrl: './cad-cliente.component.scss',
})
export class CadClienteComponent implements OnInit {
  activeModal = inject(NgbActiveModal);

  @Input() name: string = '';
  @Input() cliente: any = null;
  formulario = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    rg: new FormControl(''),
    cpf: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl(''),
    celular: new FormControl(''),
    cep: new FormControl(''),
    endereco: new FormControl(''),
    numero: new FormControl(''),
    complemento: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl('', [Validators.required, Validators.maxLength(2)]),
  });
  constructor(private serv: ClientesService) {}
  ngOnInit(): void {
    if (this.cliente) {
      this.formulario.setValue(this.cliente);
    }
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.serv.adicionarCliente(this.formulario.value).then((data) => {
      console.log(data);
      this.activeModal.close('Close click');
    });
  }
}
