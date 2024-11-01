import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.scss'],
})
export class ApoliceSeguroComponent {
  apoliceForm: FormGroup;
  valorApolice: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.apoliceForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sexo: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(0)]],
      valorAutomovel: ['', [Validators.required, Validators.min(0)]],
    });
  }

  calcularApolice(): void {
    const { sexo, idade, valorAutomovel } = this.apoliceForm.value;
    let percentual: number = 0;

    if (sexo === 'masculino') {
      percentual = idade <= 25 ? 0.15 : 0.1;
    } else if (sexo === 'feminino') {
      percentual = 0.08;
    }

    this.valorApolice = valorAutomovel * percentual;
  }

  onSubmit(): void {
    if (this.apoliceForm.valid) {
      this.calcularApolice();
    } else {
      console.log('Formulário inválido');
    }
  }
}
