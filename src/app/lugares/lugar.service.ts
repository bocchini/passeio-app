import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugares } from './lugares';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  salvar(lugar: Lugares): Observable<Lugares>{
    return this.http.post<Lugares>(`${this.baseUrl}/lugares`, lugar);
  }

  obterTodos(): Observable<Lugares[]>{
    return this.http.get<Lugares[]>(`${this.baseUrl}/lugares`);
  }
}
