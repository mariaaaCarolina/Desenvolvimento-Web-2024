import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponenteComponent } from './Aula01/primeiro-componente/primeiro-componente.component';
import { PaiComponent } from './Aula01/pai/pai.component';
import { Filho1Component } from './Aula01/pai/filho1/filho1.component';
import { Filho2Component } from './Aula01/pai/filho2/filho2.component';
import { InterpolacaoComponent } from './aula02/interpolacao/interpolacao.component';
import { AulaPropertyBindingComponent } from './aula02/aula-property-binding/aula-property-binding.component';
import { AulaEventBindingComponent } from './aula02/aula-event-binding/aula-event-binding.component';
import { AulaAtributeBindingComponent } from './aula02/aula-atribute-binding/aula-atribute-binding.component';
import { TwoWayComponent } from './aula02/two-way/two-way.component';
import { LoginComponent } from './lista01/login/login.component';
import { PrincipalComponent } from './lista01/principal/principal.component';
import { ApoliceSeguroComponent } from './lista02/apolice-seguro/apolice-seguro.component';
import { CadastroAlunoComponent } from './lista02/cadastro-aluno/cadastro-aluno.component';
import { CalculadoraComponent } from './lista02/calculadora/calculadora.component';
import { CalcularMediaComponent } from './lista02/calcular-media/calcular-media.component';
import { DiretivasEstruturaisComponent } from './Aula04/diretivas-estruturais/diretivas-estruturais.component';
import { ClientesComponent } from './Aula04/clientes/clientes.component';
import { ClienteComponent } from './lista03/cliente/cliente.component';
import { UsuarioLoginComponent } from './lista03/usuario-login/usuario-login.component';

const routes: Routes = [
  { path: 'primeiro', component: PrimeiroComponenteComponent },
  {
    path: 'pai',
    component: PaiComponent,
    children: [
      { path: 'filho1', component: Filho1Component },
      { path: 'filho2', component: Filho2Component },
    ],
  },
  {
    path: 'aula02',
    loadChildren: () =>
      import('./aula02/aula02.module').then((m) => m.Aula02Module),
  },
  { path: 'interpolacao', component: InterpolacaoComponent },
  { path: 'propriedade', component: AulaPropertyBindingComponent },
  { path: 'evento', component: AulaEventBindingComponent },
  { path: 'atributo', component: AulaAtributeBindingComponent },
  { path: 'two', component: TwoWayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'apolice-seguro', component: ApoliceSeguroComponent },
  { path: 'cadastro-aluno', component: CadastroAlunoComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'calcular-media', component: CalcularMediaComponent },
  {
    path: 'diretivas-estruturais',
    component: DiretivasEstruturaisComponent,
  },
  { path: 'clientes', component: ClientesComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'usuario-login', component: UsuarioLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
