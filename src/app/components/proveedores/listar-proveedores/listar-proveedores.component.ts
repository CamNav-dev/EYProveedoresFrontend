import { MatPaginator } from '@angular/material/paginator';
import { Proveedor } from '../../../models/Proveedor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProveedorService } from 'src/app/services/Proveedor.service';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: 'app-listar-proveedores',
  templateUrl: './listar-proveedores.component.html',
  styleUrls: ['./listar-proveedores.component.css']
})
export class ListarProveedoresComponent {
  dataSource: MatTableDataSource<Proveedor> = new MatTableDataSource();
  displayedColumns: string[] =
    ['IdProveedor', 'RazonSocial', 'Nombre', 'IdTributaria', 'Telefono', 'Correo', 'SitioWeb', 'Direccion', 'Pais', 'Facturacion', 'action01', 'action02'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private proveedoresService: ProveedorService, private router: Router) { }

  ngOnInit(): void {
    this.proveedoresService.list().subscribe((data: any) => {
      console.log(data);
      console.log(data?.response);
      if (data?.response && data?.response?.length > 0) {
        this.dataSource = new MatTableDataSource(data?.response);
        this.dataSource.paginator = this.paginator;
      }
    }
    );
    this.proveedoresService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    });
  }
  eliminar(id: number) {
    this.proveedoresService.delete(id).subscribe((data) => {
      this.proveedoresService.list().subscribe((data) => {
        this.proveedoresService.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
  buscarOFAC(){
    this.router.navigateByUrl('components/ofac-table')
  }
  buscarOFFSHORE(){
    this.router.navigateByUrl('components/offshore-table')
  }
  buscarTWBS(){
    this.router.navigateByUrl('components/theworldbank-table')
  }
  ListaScreening(){
    this.router.navigateByUrl('components/screening')
  }
}
