

import {Cliente} from "./Cliente";
import { Veiculo } from "./Veiculo";
export class Aluguel {
    Id: string = '';
    ClienteCpf: string = '';
    Cliente: Cliente | undefined;
    VeiculoPlaca: string = '';
    Veiculo: Veiculo | undefined;
}