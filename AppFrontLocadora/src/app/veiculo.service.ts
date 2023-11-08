import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from './Veiculo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  apiUrl = 'http://localhost:5230/Veiculo';

  constructor(private http: HttpClient) {}
  buscar(placa: string): Observable<Veiculo>{
    const url = `${this.apiUrl}/buscar/${placa}`;
    return this.http.get<Veiculo>(url);
  }
}
