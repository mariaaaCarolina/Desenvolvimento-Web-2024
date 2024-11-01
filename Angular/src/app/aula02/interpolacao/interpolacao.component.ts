import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrl: './interpolacao.component.scss',
})
export class InterpolacaoComponent {
  nome: string = 'Edson Martin Feitosa';
  turno = 'noite';
}
