import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AluguelService } from './../../aluguel.service';
import { Aluguel } from 'src/app/Aluguel';
import { Cliente } from './../../Cliente';
import { Veiculo } from './../../Veiculo';
import { ClienteService } from 'src/app/cliente.service';
import { VeiculoService } from 'src/app/veiculo.service';

@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  styleUrls: ['./aluguel.component.css']
})
export class AluguelComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';
  constructor(private aluguelService : AluguelService,
              private clientesService : ClienteService,
              private veiculoService : VeiculoService
              ){}
  ngOnInit(): void {
      this.tituloFormulario = 'Novo Aluguel';
      this.formulario = new FormGroup({
        id: new FormControl(null),
        cliente: new FormControl(null),
        clienteId: new FormControl(null),
        veiculo: new FormControl(null),
        veiculoId: new FormControl(null)
      })
  }
  enviarFormulario(): void{
    const aluguel : Aluguel = this.formulario.value;
    this.aluguelService.cadastrar(aluguel).subscribe(result =>{
      alert('Aluguel cadastrado')
    })
  }

}
