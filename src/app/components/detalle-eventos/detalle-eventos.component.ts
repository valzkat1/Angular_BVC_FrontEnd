import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Eventos } from 'src/app/models/eventos.model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-detalle-eventos',
  templateUrl: './detalle-eventos.component.html',
  styleUrls: ['./detalle-eventos.component.css']
})
export class DetalleEventosComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentEvento: Eventos = {
    origenevento: '',
    cantidad: 0,
    fecha: ''
  };
  
  message = '';
  constructor(
    private eventosService: EventosService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }
  getTutorial(id: string): void {
    this.eventosService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEvento = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      origenevento: this.currentEvento.origenevento,
      fecha: this.currentEvento.fecha,
      cantidad: this.currentEvento.cantidad
    };
    this.message = '';
    this.eventosService.update(this.currentEvento.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
       //   this.currentEvento.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateTutorial(): void {
    this.message = '';
    this.eventosService.update(this.currentEvento.id, this.currentEvento)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteTutorial(): void {
    this.eventosService.delete(this.currentEvento.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }
}
