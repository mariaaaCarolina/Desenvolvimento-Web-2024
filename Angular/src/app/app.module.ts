import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './Aula01/primeiro-componente/primeiro-componente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperiorComponent } from './Aula01/menu-superior/menu-superior.component';
import { RodapeComponent } from './Aula01/rodape/rodape.component';
import { PaiComponent } from './Aula01/pai/pai.component';
import { Filho1Component } from './Aula01/pai/filho1/filho1.component';
import { Filho2Component } from './Aula01/pai/filho2/filho2.component';
import { Aula02Module } from './aula02/aula02.module';
import { LoginComponent } from './lista01/login/login.component';
import { PrincipalComponent } from './lista01/principal/principal.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './lista02/calculadora/calculadora.component';
import { CadastroAlunoComponent } from './lista02/cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './lista02/apolice-seguro/apolice-seguro.component';
import { CalcularMediaComponent } from './lista02/calcular-media/calcular-media.component';
import { DiretivasEstruturaisComponent } from './Aula04/diretivas-estruturais/diretivas-estruturais.component';
import { ClientesComponent } from './Aula04/clientes/clientes.component';
import { DiretivaNgIfComponent } from './Aula04/diretiva-ng-if/diretiva-ng-if.component';
import { DiretivaNgForComponent } from './Aula04/diretiva-ng-for/diretiva-ng-for.component';
import { ClienteService } from './lista03/cliente.service';
import { UsuarioService } from './lista03/usuario.service';
import { ClienteComponent } from './lista03/cliente/cliente.component';
import { UsuarioLoginComponent } from './lista03/usuario-login/usuario-login.component';
import { CadClienteComponent } from './Aula05/cad-cliente/cad-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    MenuSuperiorComponent,
    RodapeComponent,
    PaiComponent,
    Filho1Component,
    Filho2Component,
    LoginComponent,
    PrincipalComponent,
    CalculadoraComponent,
    CadastroAlunoComponent,
    ApoliceSeguroComponent,
    CalcularMediaComponent,
    DiretivasEstruturaisComponent,
    ClientesComponent,
    DiretivaNgIfComponent,
    DiretivaNgForComponent,
    ClienteComponent,
    UsuarioLoginComponent,
    CadClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Aula02Module,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), ClienteService, UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
