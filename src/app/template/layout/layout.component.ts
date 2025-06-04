import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
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
    this.router.events
      .pipe(
        filter(() => this.activatedRouted.firstChild !== null),
        map(() => this.obterPropriedadesLayout())
      ).subscribe((props:LayoutProps) => this.props = props );
  }

  obterPropriedadesLayout():LayoutProps{
    let rotaFilha = this.activatedRouted.firstChild;

    while(rotaFilha?.firstChild){
      rotaFilha = rotaFilha.firstChild;
    }
    return rotaFilha?.snapshot.data as LayoutProps;
  }
}
