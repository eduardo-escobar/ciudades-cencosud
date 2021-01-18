import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiudadComponent } from './components/ciudad/ciudad.component';

const routes: Routes = [
  { path: 'ciudades', component: CiudadComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/ciudades' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
