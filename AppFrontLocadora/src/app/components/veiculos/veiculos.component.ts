import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Veiculo } from 'src/app/Veiculo';
import { VeiculoService } from 'src/app/veiculo.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit{
  formulario: any;
  tituloFormulario: string= '';

  constructor(private veiculosService : VeiculoService){  }
  ngOnInit(): void {
    this,this.tituloFormulario = "Novo Veiculo";
    this.formulario = new FormGroup({
      placa: new FormControl(null),
    })
  }
  enviarFormulario(): void{
    const veiculo : Veiculo = this.formulario.value;
    this.veiculosService.buscar(veiculo.Placa).subscribe(result => {
      alert('Carro encontrado.');
    })
  }

}
