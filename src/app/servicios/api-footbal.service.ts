
// Servicio encargado de optener datos de la API "api-footbal"

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFootbalService {

  public baseUrl: string;

  constructor(
    public _Http: HttpClient
  ) {
    this.baseUrl = 'https://api-football-v1.p.rapidapi.com';
  }

  public extractData(res: Response) {
    let body = res;
    return body || [];
  }

  getPartidosA() {
    const httpHeaders = new HttpHeaders({
      'X-RapidAPI-Key': 'd7e487848bmshb02f0ea66906464p1f6186jsn027e23601104'
    });
    return this._Http.get(this.baseUrl + '/leagueTable/285', { headers: httpHeaders })
      .pipe(map(this.extractData));
  };

  getPartidosB() {
    const httpHeaders = new HttpHeaders({
      'X-RapidAPI-Key': 'd7e487848bmshb02f0ea66906464p1f6186jsn027e23601104'
    });
    return this._Http.get(this.baseUrl + '/leagueTable/293', { headers: httpHeaders })
      .pipe(map(this.extractData));
  };

  getfixturesA() {
    const httpHeaders = new HttpHeaders({
      'X-RapidAPI-Key': 'd7e487848bmshb02f0ea66906464p1f6186jsn027e23601104'
    });
    return this._Http.get(this.baseUrl + '/fixtures/league/285 ', { headers: httpHeaders })
      .pipe(map(this.extractData));
  };
//Not Started
}
