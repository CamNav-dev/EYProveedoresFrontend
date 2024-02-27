import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { SignupService } from './../../../services/signup.service';
import { LoginService } from './../../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../../../models/Cliente';

@Component({
  selector: 'app-signup-cliente',
  templateUrl: './signup-cliente.component.html',
  styleUrls: ['./signup-cliente.component.css'],
})
export class SignupclienteComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  cliente: Cliente = new Cliente();
  mensaje: string = '';
  username: string = '';

  constructor(
    private signupService: SignupService,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.username = this.loginService.getUsername();
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
    });
  }
  signup() {
    console.log('Signup cliente:', this.form.value);
    if (this.form.valid) {

      this.signupService.findByUsername(this.username).subscribe(
        (user) => {
          if (user) {
            this.cliente.Users = user;
            this.cliente.Nombre = this.form.value.nombre;
            this.cliente.Apellido = this.form.value.apellido;
            this.cliente.Correo = this.form.value.Correo;

            this.signupService.signupCliente(this.cliente).subscribe(
              () => {
                this.mensaje = 'cliente registrado con éxito';
                this.snackBar.open(this.mensaje, 'Aviso', { duration: 4000 });
                this.router.navigate(['components/lista']);
              },
            );
          } else {
            this.mensaje = 'Usuario no encontrado';
            this.snackBar.open(this.mensaje, 'Aviso', { duration: 2000 });
          }
        },
        (error) => {
          this.mensaje = 'Error al recuperar al usuario';
          this.snackBar.open(this.mensaje, 'Aviso', { duration: 4000 });
        }
      );
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

}
