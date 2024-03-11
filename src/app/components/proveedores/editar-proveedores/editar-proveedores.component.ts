import { ProveedoresComponent } from './../proveedores.component';
import { Proveedor } from './../../../models/Proveedor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { ProveedorService } from 'src/app/services/Proveedor.service';
@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css']
})
export class EditarProveedoresComponent implements OnInit {
  proveedor: Proveedor = new Proveedor();
  form: FormGroup = new FormGroup({});
  id: number = 0;
  edicion: boolean = false;
  mensaje: string = '';

  constructor(
    private proveedorService: ProveedorService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edicion = params['id'] != null;
      this.initForm();
    });

    this.form = this.formBuilder.group({
      IdProveedor: [''],
      RazonSocial: ['', Validators.required],
      Nombre: ['', Validators.required],
      IdTributaria: ['', Validators.required],
      Telefono: ['', Validators.required],
      Correo: ['', Validators.required],
      SitioWeb: ['', Validators.required],
      Direccion: ['', Validators.required],
      Pais: ['', Validators.required],
      Facturacion: ['', Validators.required],
      UltimaEdicion: ['', Validators.required]
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.proveedor.IdProveedor = this.form.value.IdProveedor;
      this.proveedor.Nombre = this.form.value.Nombre;
      this.proveedor.Correo = this.form.value.Correo;
      this.proveedor.Direccion = this.form.value.Direccion;
      this.proveedor.Facturacion = this.form.value.Facturacion;
      this.proveedor.IdTributaria = this.form.value.IdTributaria;
      this.proveedor.Pais = this.form.value.Pais;
      this.proveedor.RazonSocial = this.form.value.RazonSocial;
      this.proveedor.SitioWeb = this.form.value.SitioWeb;
      this.proveedor.Telefono = this.form.value.Telefono;
      this.proveedor.UltimaEdicion = this.form.value.UltimaEdicion;
      if (this.edicion) {
        this.proveedorService.update(this.proveedor).subscribe(() => {
          this.proveedorService.list().subscribe((data) => {
            this.proveedorService.setList(data);
          });
        });
      } else {
        this.proveedorService.insert(this.proveedor).subscribe((data) => {
          this.proveedorService.list().subscribe((data) => {
            this.proveedorService.setList(data);
          });
        });
        }
    } else {
        this.mensaje = 'Por favor complete todos los campos obligatorios.';
      }
    }

    obtenerControlCampo(nombreCampo: string): AbstractControl {
      const control = this.form.get(nombreCampo);
      if (!control) {
        throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
      }
      return control;

    }

    initForm(){
      if (this.edicion) {
        this.proveedorService.listId(this.id).subscribe((data) => {
          this.form.patchValue(data);
        });
      }
    }
  }
