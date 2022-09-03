import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/eventos.model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {


  eventos?: Eventos[];
  currentEvento: Eventos = {};
  currentIndex = -1;
  origenevento = '';

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.retrieveEventos();
  }

  retrieveEventos(): void {
    this.eventosService.getAll()
      .subscribe({
        next: (data) => {
          this.eventos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveEventos();
    this.currentEvento = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Eventos, index: number): void {
    this.currentEvento = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.eventosService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchPlataforma(): void {
    this.currentEvento = {};
    this.currentIndex = -1;

    this.eventosService.findByOrigenevento(this.origenevento)
      .subscribe({
        next: (data) => {
          this.eventos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
