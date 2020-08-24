import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  private link = 'https://economia.awesomeapi.com.br/json/list/USD-BRL?';

  constructor(private httpClient: HttpClient) { }

  public obterDado(ano: string, mes: string, dia: string): Observable<object> {
    const dataConcatenada = ano + mes + dia;
    const linkFinal = `${this.link}start_date=${dataConcatenada}&end_date=${dataConcatenada}`;

    return this.httpClient.get(linkFinal);
  }

}
