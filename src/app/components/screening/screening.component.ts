import { ListaScreening } from './../../models/ListaScreening';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListaScreeningService } from 'src/app/services/ListaScreening.service';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css'],
})
export class ScreeningComponent implements OnInit {
  dataSource: MatTableDataSource<ListaScreening>;
  displayedColumns: string[] = ['IdScreening', 'Fecha', 'Tipo', 'OFFACSource', 'TheWorldBankSouce', 'OffshoreSource', 'Cliente', 'Proveedor'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private listaScreeningService: ListaScreeningService) { 
    this.dataSource = new MatTableDataSource(); // Inicializar el MatTableDataSource
  }

  ngOnInit(): void {
    this.listaScreeningService.list().subscribe(data => {
      console.log(data);
      this.dataSource.data = data; // Asumiendo que 'data' ya es un array de ListaScreening
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id: number) {
    this.listaScreeningService.delete(id).subscribe(() => {
      this.listaScreeningService.list().subscribe(data => {
        this.dataSource.data = data;
      });
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
