import { Component } from '@angular/core';

@Component({
  selector: 'app-aula-property-binding',
  templateUrl: './aula-property-binding.component.html',
  styleUrl: './aula-property-binding.component.scss',
})
export class AulaPropertyBindingComponent {
  valorPadrao = 'Teste';
  desabilitado = false;
  tipoInput = 'password';
}
