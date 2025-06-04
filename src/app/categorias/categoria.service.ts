import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Categoria } from './categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  salvar(categoria: Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(`${this.baseUrl}/categorias`, categoria);
  }

  obterTodas(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.baseUrl}/categorias`);
  }
}
