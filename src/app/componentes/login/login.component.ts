import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuariosService]
})
export class LoginComponent implements OnInit {

  public login: Login;
  public usuario;

  constructor(
    public _UsuariosService: UsuariosService
  ) {
    this.login = new Login(null, '');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.login);
    this.obtenerUser();
  }

  obtenerUser(){
    this._UsuariosService.getLogin(this.login).subscribe(
      response => {
        this.usuario = response;
        console.log(this.usuario);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
