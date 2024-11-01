import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss'],
})
export class CadastroAlunoComponent {
  alunoForm: FormGroup;
  alunoCadastrado: any | null = null;

  constructor(private fb: FormBuilder) {
    this.alunoForm = this.fb.group({
      ra: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.alunoForm.valid) {
      this.alunoCadastrado = this.alunoForm.value;
      this.alunoForm.reset(); // Limpa o formulário após o cadastro
    }
  }
}
