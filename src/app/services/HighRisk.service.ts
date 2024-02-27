import { OFFACSource } from './../models/OFFACSource';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OffShoreSource } from '../models/OffshoreSource';
const base_url = environment.base;
@Injectable({
    providedIn: 'root',
})
export class HighRiskService {
    private url = `${base_url}`;
    private listaCambio = new Subject<OFFACSource[]>();
    constructor(private http: HttpClient) { }

    ofcaList(company = ""): Observable<OFFACSource[]> {
        let token = sessionStorage.getItem('token');
        return this.http.get<OFFACSource[]>(`${this.url}/ofac/${company}`, {
            headers: new HttpHeaders()
                .set('Authorization', `Bearer ${token}`)
                .set('Content-Type', 'application/json'),
        });
    }

    offshoreList(company = ""): Observable<OffShoreSource[]> {
        let token = sessionStorage.getItem('token');
        return this.http.get<OffShoreSource[]>(`${this.url}/offshore/${company}`, {
            headers: new HttpHeaders()
                .set('Authorization', `Bearer ${token}`)
                .set('Content-Type', 'application/json'),
        });
    }

}