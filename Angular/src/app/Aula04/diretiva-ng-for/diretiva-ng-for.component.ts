import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrl: './diretiva-ng-for.component.scss',
})
export class DiretivaNgForComponent {
  listaGeral: any = ['carol', 30, true];
  listaPessoas: any = [
    { nome: 'Carol', idade: 19, ativo: true },
    { nome: 'Maria', idade: 20, ativo: false },
    { nome: 'Ana', idade: 21, ativo: false },
  ];
}
