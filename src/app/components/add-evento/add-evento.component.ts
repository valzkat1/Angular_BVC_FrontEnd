import { Component, Input, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/eventos.model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  @Input() evento: Eventos = {
    cantidad: 1,
    origenevento: '',
    tipoevento:'',
    fecha: ''
  };
  @Input() submitted = false;
  constructor(private eventosService: EventosService) { }
  ngOnInit(): void {
  }
  saveEvento(): void {
    const data = {
      cantidad: this.evento.cantidad,
      origenevento: this.evento.origenevento,
      fecha:this.evento.fecha,
      tipoevento:this.evento.tipoevento
    };
    console.log(data);
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
      cantidad: 1,
      origenevento: '',
      fecha: '',
      tipoevento:''
    };
  }

}
