import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../../../models/Users';
import { SignupService } from '../../../services/signup.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css'],
})
export class SignupUserComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: Users = new Users();
  mensaje: string = '';

  constructor(
    private signupService: SignupService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  signup() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.user.Username = this.form.value.Username;
      this.user.Password = this.form.value.Password;

      this.signupService
        .signupAndLogin(this.user, 'signup-cliente')
        .subscribe(() => {
          this.mensaje = 'Usuario registrado con éxito';
          this.snackBar.open(this.mensaje, 'Aviso', { duration: 4000 });
          this.router.navigate(['../signup-cliente'], {
            relativeTo: this.route,
          });
        });
    }
  }
}
