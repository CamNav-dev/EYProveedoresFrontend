import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OffShoreSource } from './../models/OffshoreSource';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OffshoreSourceService {
  private baseUrl = `${environment.base}/FuentesHighRisk/offshore`;

  constructor(private http: HttpClient) {}

  public getOffshoreSources(company: string): Observable<OffShoreSource[]> {
    let token = sessionStorage.getItem('token');
    return this.http.get<OffShoreSource[]>(`${this.baseUrl}/${company}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
