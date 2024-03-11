import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OFFACSource } from './../models/OFFACSource';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OffacSourceService {
  private baseUrl = `${environment.base}/FuentesHighRisk/ofac`;

  constructor(private http: HttpClient) {}

  public getOfacSources(company: string): Observable<OFFACSource[]> {
    let token = sessionStorage.getItem('token');
    return this.http.get<OFFACSource[]>(`${this.baseUrl}/${company}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
