import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/eventos.model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  evento: Eventos = {
    cantidad: 0,
    origenevento: '',
    fecha: ''
  };
  submitted = false;
  constructor(private eventosService: EventosService) { }
  ngOnInit(): void {
  }
  saveEvento(): void {
    const data = {
      cantidad: this.evento.cantidad,
      origenevento: this.evento.origenevento,
      fecha:this.evento.fecha
    };
    this.eventosService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newEvento(): void {
    this.submitted = false;
    this.evento = {
      cantidad: 0,
      origenevento: '',
      fecha: ''
    };
  }

}
