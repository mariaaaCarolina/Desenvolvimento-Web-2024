import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutroComponenteComponent } from './outro-componente/outro-componente.component';

const routes: Routes = [
  { path: '', redirectTo: 'outroComponente', pathMatch: 'full' },
  { path: 'outroComponente', component: OutroComponenteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aula02RoutingModule {}
