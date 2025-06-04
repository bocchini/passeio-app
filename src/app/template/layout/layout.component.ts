import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  props: LayoutProps = { titulo: '', subtitulo:''};

  constructor(
    private router: Router,
    private activatedRouted: ActivatedRoute
  ){}

  ngOnInit(): void {

  }

  obterPropriedadesLayout():LayoutProps{
    let rotaFilha = this.activatedRouted.firstChild;

    while(rotaFilha?.firstChild){

    }
  }
}
