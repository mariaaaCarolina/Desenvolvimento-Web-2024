import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.scss'],
})
export class CalcularMediaComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  media: number | null = null;
  resultado: string = '';

  calcularMedia() {
    this.media =
      this.ac1 * 0.15 + this.ac2 * 0.3 + this.ag * 0.1 + this.af * 0.45;
    this.resultado = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
