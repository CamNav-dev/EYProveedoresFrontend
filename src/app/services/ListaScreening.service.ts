import { ListaScreening } from './../models/ListaScreening';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
    providedIn: 'root',
  })
export class ListaScreeningService {
  private url = `${base_url}/ListaScreening`;
  private listaCambio = new Subject<ListaScreening[]>();
  constructor(private http: HttpClient) {}
  list(): Observable<ListaScreening[]>  {
    let token = sessionStorage.getItem('token');

    return this.http.get<ListaScreening[]>(this.url + '/lista', {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(ListaScreening: ListaScreening) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, ListaScreening, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  setList(listaNueva: ListaScreening[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<ListaScreening>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(ListaScreening: ListaScreening) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, ListaScreening, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  delete(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}