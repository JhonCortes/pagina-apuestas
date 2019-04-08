import { Component, OnInit } from '@angular/core';
import { ApiFootbalService } from '../../servicios/api-footbal.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
  providers: [ApiFootbalService]
})
export class TablasComponent implements OnInit {

  public titulo: string;
  public prueba;
  public prueba2;
  public Partidos: any = [];
  public partidos2: any = [];

  constructor(
    public _ApiFootbalService: ApiFootbalService
  ) {
    this.titulo = "tablas"
  }

  obtenerTablaA(){
    const prueba = this.prueba.api.standings;
    this.Partidos =prueba[0];
    console.log(this.Partidos);
  };

  obtenerTablaB(){
    const prueba = this.prueba2.api.standings;
    this.partidos2 =prueba[0];
    console.log(this.partidos2);
  };

  obtenerPartidosA() {
    this._ApiFootbalService.getPartidosA().subscribe(
      result => {

        this.prueba = result;
        console.log(this.prueba);

        this.obtenerTablaA();
      },
      error => {
        console.log(<any>error);
      }
    )
  };

  obtenerPartidosB() {
    this._ApiFootbalService.getPartidosB().subscribe(
      result => {

        this.prueba2 = result;
        console.log(this.prueba2);

        this.obtenerTablaB();
      },
      error => {
        console.log(<any>error);
      }
    )
  };

  ngOnInit() {
    this.obtenerPartidosA();
    this.obtenerPartidosB();
  }
}
