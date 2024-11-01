import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Aula02RoutingModule } from './aula02-routing.module';
import { OutroComponenteComponent } from './outro-componente/outro-componente.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { AulaPropertyBindingComponent } from './aula-property-binding/aula-property-binding.component';
import { AulaEventBindingComponent } from './aula-event-binding/aula-event-binding.component';
import { AulaAtributeBindingComponent } from './aula-atribute-binding/aula-atribute-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OutroComponenteComponent,
    InterpolacaoComponent,
    AulaPropertyBindingComponent,
    AulaEventBindingComponent,
    AulaAtributeBindingComponent,
    TwoWayComponent,
  ],
  imports: [CommonModule, Aula02RoutingModule, FormsModule],
  exports: [
    OutroComponenteComponent,
    InterpolacaoComponent,
    AulaPropertyBindingComponent,
    AulaEventBindingComponent,
    AulaAtributeBindingComponent,
    TwoWayComponent,
  ],
})
export class Aula02Module {}
