import { Component, OnInit } from '@angular/core';
import { DolarService } from './dolar.service';
import { IDolar } from './domain/dolar.model';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.scss']
})
export class DolarComponent implements OnInit {

  data: string;
  dataDiferente = '';
  valorResultado: string;
  retorno: IDolar[] = [];

  constructor(private dolarService: DolarService) { }

  ngOnInit(): void {
  }

  buscar(dataDesejada: string) {
    this.data = dataDesejada;
    const dataArray = dataDesejada.split('/');
    console.log(dataArray);

    const observer = this.dolarService.obterDado(dataArray[2],dataArray[1],dataArray[0]);
    
    observer.subscribe(
      (dolar: IDolar[]) => this.retorno = dolar,
      (err) => console.error(err),
      () => this.valorResultado = this.retorno[0].ask
      );
    
    console.log(this.retorno[0]);
  }
  obterData() {
    return this.data;
  }

}
