import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PrimeraAComponent } from './componentes/primera-a/primera-a.component';
import { PrimeraBComponent } from './componentes/primera-b/primera-b.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'primeraA', component: PrimeraAComponent },
  { path: 'primeraB', component: PrimeraBComponent },
  { path: 'tablas', component: TablasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registroUser', component: RegistrarComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
