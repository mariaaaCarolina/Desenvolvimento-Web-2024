import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.scss',
})
export class TwoWayComponent {
  texto: string = 'Inicial';
  texto2: string = '';

  atualiza(texto: string) {
    this.texto = texto;
  }
}
