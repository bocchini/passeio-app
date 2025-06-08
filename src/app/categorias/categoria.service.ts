import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Categoria } from './categoria';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  salvar(categoria: Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(`${this.baseUrl}/categorias`, categoria);
  }

  obterTodas(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.baseUrl}/categorias`);
  }
}
