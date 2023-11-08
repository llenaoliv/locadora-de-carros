import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluguel } from './Aluguel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class AluguelService {
  apiUrl = 'http://localhost:5230/Aluguel';
  constructor(private http: HttpClient) {}
  listar(): Observable<Aluguel[]> {
    const url = this.apiUrl + `/listar`;
    return this.http.get<Aluguel[]>(url);
  }
  buscar(id: string): Observable<Aluguel> {
    const url = `${this.apiUrl}/buscar/${id}`;
    return this.http.get<Aluguel>(url);
  }
  cadastrar(aluguel: Aluguel): Observable<any> {
    const url = this.apiUrl + `/cadastrar`;
    return this.http.post<Aluguel>(url, aluguel, httpOptions);
  }
  atualizar(aluguel: Aluguel): Observable<any> {
    const url = this.apiUrl + `/cadastrar`;
    return this.http.put<Aluguel>(url, aluguel, httpOptions);
  }
  excluir(id: string): Observable<any> {
    const url = `${this.apiUrl}/excluir/${id}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
