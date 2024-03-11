import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OFFACSource } from 'src/app/models/OFFACSource';
import { OffacSourceService } from 'src/app/services/OFFACSource.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ofac-table',
  templateUrl: './ofac-table.component.html',
  styleUrls: ['./ofac-table.component.css']
})
export class OfacTableComponent implements OnInit{
  dataSource: MatTableDataSource<OFFACSource>;
  displayedColumns: string[] = [ 'Name', 'Address', 'Type', 'Programs', 'List', 'Score'];
  searchQuery: string = ''; 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private offacSourceService: OffacSourceService, private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource<OFFACSource>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  search() {
    if (!this.searchQuery) return; 
    this.offacSourceService.getOfacSources(this.searchQuery).subscribe(data => {
      console.log(data); 
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}
