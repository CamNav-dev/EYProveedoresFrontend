import { Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './../models/Users';
import { Cliente } from './../models/Cliente';
import { environment } from './../../../environments/environment';
import { LoginService } from './login.service';
import { concatMap } from 'rxjs';
import { tap } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private urlUsers = `${base_url}/Users/Crear`;


  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {}

  findByUsername(username: string): Observable<Users> {
    const url = `${this.urlUsers}/buscar/${username}`;
    return this.http.get<Users>(url);
  }

  signupUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.urlUsers, user);
  }

  signupCliente(Cliente: Cliente): Observable<Cliente> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<Cliente>(this.urlUsers, Cliente, { headers: headers });
  }

  signupAndLogin(user: Users, redirectUrl: string): Observable<any> {
    return this.signupUser(user).pipe(
      concatMap(() => this.loginService.login({Username: user.Username, Password: user.Password})),
      tap((data: any) => {
        sessionStorage.setItem('token', data.jwttoken);
        this.router.navigate([redirectUrl]);
      })
    );
  }
}
