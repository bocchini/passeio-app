import { LugarService } from './../lugar.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(private categoriaSevice: CategoriaService, private service: LugarService){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required)
    })
  }
  ngOnInit(): void {
    this.categoriaSevice.obterTodas().subscribe({
      next: (listarCategorias => this.categorias = listarCategorias)
    })
  }

  salvar(){
    this.camposForm.markAllAsTouched();
    if(this.camposForm.valid){
      this.service.salvar(this.camposForm.value).subscribe({
        next: (resultado) => {
          console.log('Salvo com sucesso', resultado),
          this.camposForm.reset();
        },
        error: erro => console.error(erro)
      });
    }
  }

  estaInvalido(nomeCampo: string): boolean{
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched
           && campo?.errors?.['required']|| false;
  }
}
