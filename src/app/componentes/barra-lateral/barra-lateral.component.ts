import { Component, OnInit } from '@angular/core';
import { ApiFootbalService } from '../../servicios/api-footbal.service';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css'],
  providers: [ApiFootbalService]
})
export class BarraLateralComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
