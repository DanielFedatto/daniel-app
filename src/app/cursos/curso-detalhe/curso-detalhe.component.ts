import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  teste: string;

  cursos: string [] = ['java', 'Angular'];
  
  constructor() {
    this.teste = 'https://danielfedatto.github.io/';
  }

  ngOnInit() {
  }

}
