import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventoComponent } from './components/add-evento/add-evento.component';
import { DetalleEventosComponent } from './components/detalle-eventos/detalle-eventos.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';

const routes: Routes = [
  { path: '', redirectTo: 'eventos', pathMatch: 'full' },
  { path: 'eventos', component: ListaEventosComponent },
  { path: 'eventos/:id', component: DetalleEventosComponent },
  { path: 'add', component: AddEventoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
