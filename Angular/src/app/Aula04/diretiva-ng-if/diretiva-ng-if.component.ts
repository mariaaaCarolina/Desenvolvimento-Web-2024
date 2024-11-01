import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrl: './diretiva-ng-if.component.scss',
})
export class DiretivaNgIfComponent {
  mostraExemplo1: boolean = false;
  exemplo1() {
    this.mostraExemplo1 = !this.mostraExemplo1;
  }
  mostraExemplo2: boolean = false;
  exemplo2() {
    this.mostraExemplo2 = !this.mostraExemplo2;
  }
  mostraExemplo3: boolean = false;
  exemplo3() {
    this.mostraExemplo3 = !this.mostraExemplo3;
  }

  // global: string = '';

  // constructor(private serv: ClientesService) {
  //   this.global = serv.varGlobal;
  // }
}
