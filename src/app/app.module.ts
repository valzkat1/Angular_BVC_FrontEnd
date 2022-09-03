import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEventoComponent } from './components/add-evento/add-evento.component';
import { DetalleEventosComponent } from './components/detalle-eventos/detalle-eventos.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddEventoComponent,
    DetalleEventosComponent,
    ListaEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
