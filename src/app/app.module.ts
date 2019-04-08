import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PrimeraAComponent } from './componentes/primera-a/primera-a.component';
import { PrimeraBComponent } from './componentes/primera-b/primera-b.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    BarraLateralComponent,
    InformacionComponent,
    HomeComponent,
    ErrorComponent,
    PrimeraAComponent,
    PrimeraBComponent,
    TablasComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
