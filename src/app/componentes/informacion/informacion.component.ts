import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  public usuario: string;
  public saldo: string;

  constructor() {
    this.usuario = "Usuario";
    this.saldo = "0.00"
   }

  ngOnInit() {
  }

}
