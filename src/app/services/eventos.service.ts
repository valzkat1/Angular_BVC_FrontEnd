import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from '../models/eventos.model';
const baseUrl = 'http://ec2-54-84-14-195.compute-1.amazonaws.com/challenge_bvc/api/Eventos';
//const baseUrl = 'http://localhost:8080/api/Eventos';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(baseUrl);
  }
  get(id: any): Observable<Eventos> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByOrigenevento(title: any): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(`${baseUrl}?origenevento=${title}`);
  }
}
