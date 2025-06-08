import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugares } from './lugares';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  baseUrl:string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  salvar(lugar: Lugares): Observable<Lugares>{
    return this.http.post<Lugares>(`${this.baseUrl}/lugares`, lugar);
  }

  obterTodos(): Observable<Lugares[]>{
    return this.http.get<Lugares[]>(`${this.baseUrl}/lugares`);
  }

  filtrar(nome:string, categoria: string): Observable<Lugares[]>{
    let params = new HttpParams();

    if(categoria && categoria === '-1')
      return this.obterTodos();
    else if (nome){
      params = params.set('nome_like', nome);
    }else if(categoria){
      params = params.set('categoria', categoria)
    }

    return this.http.get<Lugares[]>(`${this.baseUrl}/lugares`,{
      params
    });
  }
}
