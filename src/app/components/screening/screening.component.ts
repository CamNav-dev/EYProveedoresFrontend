import { ListaScreening } from './../../models/ListaScreening';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ListaScreeningService } from 'src/app/services/ListaScreening.service';
@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css'],
})
export class ScreeningComponent implements OnInit{
  dataSource: MatTableDataSource<ListaScreening> = new MatTableDataSource();
  displayedColumns: string[] = ['IdScreening', 'Fecha', 'Tipo', 'OFFACSource','TheWorldBankSouce','OffshoreSource','Cliente','Proveedor'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private listaScreeningService: ListaScreeningService) {}
  ngOnInit(): void {
    this.listaScreeningService.list().subscribe((data)=>
    {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.listaScreeningService.getList().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
      });
  }
  eliminar(id: number) {
    this.listaScreeningService.delete(id).subscribe((data) => {
    this.listaScreeningService.list().subscribe((data) => {
    this.listaScreeningService.setList(data);
    });
    });
    }
    filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
    }

}
