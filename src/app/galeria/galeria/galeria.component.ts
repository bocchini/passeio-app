import { Component, OnInit } from '@angular/core';

import { Lugares } from '../../lugares/lugares';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{

  lugares: Lugares[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  ngOnInit(): void {
    this.obterCategorias();
    this.obterLugares();
  }

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ){}


  private obterLugares() {
    this.lugarService.obterTodos()
      .subscribe(lugaresResposta => this.lugares = lugaresResposta);
  }

  private obterCategorias() {
    this.categoriaService.obterTodas().subscribe(categorias => this.categoriasFiltro = categorias
    );
  }

  getTotalEstrelasLugar(lugar:Lugares):string {
    return '&#9733'.repeat(lugar.avaliacao || 0) + '&#9734'.repeat(5 - (lugar.avaliacao|| 0) );
  }

  filtrar(){
    console.log('Valores', this.nomeFiltro, this.categoriaFiltro);
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro)
      .subscribe(resultado => this.lugares = resultado);
  }
}
