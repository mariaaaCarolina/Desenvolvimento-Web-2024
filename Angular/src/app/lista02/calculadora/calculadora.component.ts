import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent {
  number1: number | null = null;
  number2: number | null = null;
  result: number | string = '';
  operation: string = 'add';

  calculate() {
    if (this.number1 === null || this.number2 === null) {
      this.result = 'Por favor, insira ambos os números';
      return;
    }

    if (this.operation === 'divide' && this.number2 === 0) {
      this.result = 'Erro: Divisão por zero';
      return;
    }

    switch (this.operation) {
      case 'add':
        this.result = this.number1 + this.number2;
        break;
      case 'subtract':
        this.result = this.number1 - this.number2;
        break;
      case 'multiply':
        this.result = this.number1 * this.number2;
        break;
      case 'divide':
        this.result = this.number1 / this.number2;
        break;
      default:
        this.result = 'Operação inválida';
    }
  }
}
