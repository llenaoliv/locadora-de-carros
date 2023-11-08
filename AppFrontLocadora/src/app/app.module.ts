import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosService } from './carros.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';
import { CarrosComponent } from'./components/carros/carros.component';
import { AluguelComponent } from './components/aluguel/aluguel.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AluguelService } from './aluguel.service';
import { ClienteService } from './cliente.service';
import { VeiculoService } from './veiculo.service';
import { VeiculosComponent } from './components/veiculos/veiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    AluguelComponent,
    ClienteComponent,
    VeiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    
  ],
  providers: [HttpClientModule, CarrosService, 
    AluguelService,VeiculoService, ClienteService],

  bootstrap: [AppComponent]
})
export class AppModule { }
