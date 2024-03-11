import { Proveedor } from './../models/Proveedor';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base;
@Injectable({
    providedIn: 'root',
  })
export class ProveedorService{
  private url = `${base_url}/Proveedor`;
  private listaCambio = new Subject<Proveedor[]>();
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<Proveedor[]>(this.url + '/lista', {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(Proveedor: Proveedor) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, Proveedor, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  setList(listaNueva: Proveedor[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Proveedor>(`${this.url}/Buscar/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(Proveedor: Proveedor) {
    let token = sessionStorage.getItem('token');

    return this.http.put(`${this.url}/Editar`, Proveedor, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  delete(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/Eliminar/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}