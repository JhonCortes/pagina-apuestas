import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public baseUrl: string;

  constructor(
    public _http: HttpClient
  ) {
    this.baseUrl = 'http://localhost/api-apuestas/index.php';
  }

  public extractData(res: Response) {
    let body = res;
    return body || [];
  }

  getLogin(login: Login) {
    let json = JSON.stringify(login);
    let params = 'json=' + json;
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(this.baseUrl + '/usuarioExist', params, { headers: headers })
      .pipe(map(this.extractData));
  }


}
