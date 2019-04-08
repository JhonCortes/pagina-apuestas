import { Component, OnInit } from '@angular/core';
import { ApiFootbalService } from '../../servicios/api-footbal.service';

@Component({
  selector: 'app-primera-a',
  templateUrl: './primera-a.component.html',
  styleUrls: ['./primera-a.component.css'],
  providers: [ApiFootbalService]
})
export class PrimeraAComponent implements OnInit {

  public titulo: string;
  public prueba;
  public prueba2;
  public Partidos: any = [];
  public partidos2: any = [];

  constructor(
    public _ApiFootbalService: ApiFootbalService
  ) {
    this.titulo = "primera a"
  }

  obtenerFixturesA() {
    const prueba = this.prueba.api.fixtures;
    this.Partidos = prueba;
    console.log(this.Partidos);
  };

  obtenerPartidosA() {
    this._ApiFootbalService.getfixturesA().subscribe(
      result => {

        this.prueba = result;
        console.log(this.prueba);

        this.obtenerFixturesA();
      },
      error => {
        console.log(<any>error);
      }
    )
  };

  ngOnInit() {
    this.obtenerPartidosA();
  }


}
