import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = { 
    titulo : 'Learning JavaScript Data Structures and Algorithms: Hone your skills by learning classic data structures and algorithms in JavaScript, 2nd Edition',
    rating : 4.54321,
    preco : 44.99,
    numeroPaginas : 314,
    dataLancamento : new Date(2016, 5, 23),
    url : 'http://a.co/glqjpRP'
   };

   livros: string[] = ['Java', 'Angular 2']

   filtro: string;

   valorAsync = new Promise((resolve, reject) => {
     setTimeout(() => resolve('Valor Assíncrono'), 2000)
   });

   valorAsync2 = interval(2000)
   .pipe(
     map(valor => 'Valor assíncrono 2')
   );

  constructor() { }

  ngOnInit() {
  }

  addCurso(valor) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){
    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
        return this.livros;
    }

    return this.livros.filter(
      v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
   );
  }
}
