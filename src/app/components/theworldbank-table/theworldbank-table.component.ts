import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TheWorldBankSource } from 'src/app/models/TheWorldBankSource';
import { TheWorldBankSourceService } from 'src/app/services/TheWorldBankSource.service';

@Component({
  selector: 'app-theworldbank-table',
  templateUrl: './theworldbank-table.component.html',
  styleUrls: ['./theworldbank-table.component.css']
})
export class TheworldbankTableComponent implements OnInit {
  dataSource: MatTableDataSource<TheWorldBankSource>;
  displayedColumns: string[] = ['IdWbs', 'FirmName', 'Address', 'Country', 'FromDate', 'ToDate', 'Grounds'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private theWorldBankSourceService: TheWorldBankSourceService) {
    this.dataSource = new MatTableDataSource<TheWorldBankSource>();
  }

  ngOnInit(): void {
    this.getWorldBankSources();
    this.dataSource.filterPredicate = (data: TheWorldBankSource, filter: string) => {
      // Customiza esta lógica de filtro según tus necesidades
      const dataStr = data.FirmName.toLowerCase() + ' ' + data.Address.toLowerCase() + ' ' + data.Country.toLowerCase();
      return dataStr.indexOf(filter) != -1;
    };
  }

  getWorldBankSources(): void {
    this.theWorldBankSourceService.getWorldBankSources().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
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
