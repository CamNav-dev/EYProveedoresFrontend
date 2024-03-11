import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TheWorldBankSource } from './../models/TheWorldBankSource';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TheWorldBankSourceService {
  private baseUrl = `${environment.base}/FuentesHighRisk/world-bank`;

  constructor(private http: HttpClient) {}

  public getWorldBankSources(): Observable<TheWorldBankSource[]> {
    let token = sessionStorage.getItem('token');
    return this.http.get<TheWorldBankSource[]>(this.baseUrl, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
