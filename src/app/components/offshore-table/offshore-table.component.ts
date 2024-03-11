import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OffshoreSourceService } from 'src/app/services/OffshoreSource.service'; 
import { OffShoreSource } from 'src/app/models/OffshoreSource'; 

@Component({
  selector: 'app-offshore-table',
  templateUrl: './offshore-table.component.html',
  styleUrls: ['./offshore-table.component.css']
})
export class OffshoreTableComponent implements OnInit {
  dataSource: MatTableDataSource<OffShoreSource>;
  displayedColumns: string[] = ['Entity', 'Jurisdiction', 'LinkedTo','DataFrom']; 
  searchQuery: string = ''; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private offshoreSourceService: OffshoreSourceService) {
    this.dataSource = new MatTableDataSource<OffShoreSource>();
  }

  ngOnInit(): void {

  }

  search() {
    if (!this.searchQuery) return; 
    this.offshoreSourceService.getOffshoreSources(this.searchQuery).subscribe(data => {
      console.log(data); 
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}
