
// Servicio encargado de optener datos de la API "api-footbal"

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable,} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFootbalService {

  constructor() { }

}
