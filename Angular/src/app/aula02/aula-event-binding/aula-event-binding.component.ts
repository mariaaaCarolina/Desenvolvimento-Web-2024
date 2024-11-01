import { Component } from '@angular/core';

@Component({
  selector: 'app-aula-event-binding',
  templateUrl: './aula-event-binding.component.html',
  styleUrl: './aula-event-binding.component.scss',
})
export class AulaEventBindingComponent {
  valor: string = '';
  textoDigitado(texto: KeyboardEvent) {
    this.valor = (texto.target as HTMLInputElement).value;
    console.log(texto);
  }

  mensagem() {
    alert('Botão clicado!');
  }
}
