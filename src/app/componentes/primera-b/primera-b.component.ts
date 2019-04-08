import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primera-b',
  templateUrl: './primera-b.component.html',
  styleUrls: ['./primera-b.component.css']
})
export class PrimeraBComponent implements OnInit {

  public titulo: string;

  constructor() {
    this.titulo = "primera b"
  }

  ngOnInit() {
  }

}
