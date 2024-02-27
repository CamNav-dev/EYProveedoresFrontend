import { MatPaginator } from '@angular/material/paginator';
import { Proveedor } from './../../models/Proveedor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProveedorService } from 'src/app/services/Proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  dataSource: MatTableDataSource<Proveedor> = new MatTableDataSource();
  displayedColumns: string[] =
    ['IdProveedor', 'RazonSocial', 'Nombre'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private proveedoresService: ProveedorService) { }

  ngOnInit(): void {
    this.proveedoresService.list().subscribe((data) => {
      if(data.length){console.log(data)
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;}
      
    });
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
}
