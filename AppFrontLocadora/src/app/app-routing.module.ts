import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosComponent } from'./components/carros/carros.component'
import { AluguelComponent } from './components/aluguel/aluguel.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';

const routes: Routes = [
  {path: 'carros', component:CarrosComponent},
  {path: 'Aluguel', component:AluguelComponent},
  {path: 'Cliente', component:ClienteComponent},
  {path: 'Veiculos', component:VeiculosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
