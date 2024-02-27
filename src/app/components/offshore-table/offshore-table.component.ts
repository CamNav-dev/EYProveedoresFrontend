import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { OFFACSource } from 'src/app/models/OFFACSource';
import { HighRiskService } from 'src/app/services/HighRisk.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-offshore-table',
  templateUrl: './offshore-table.component.html',
  styleUrls: ['./offshore-table.component.css']
})
export class OffshoreTableComponent {
  dataSource: MatTableDataSource<OFFACSource> = new MatTableDataSource();
  displayedColumns: string[] =
    ['Name', 'Address', 'Type', 'Programs', 'List', 'Score'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private highRiskService: HighRiskService, private route: ActivatedRoute) { }

  name: string = "";

  ngOnInit(): void {

    this.name = this.route.snapshot.paramMap.get('name')!;

    this.highRiskService.offshoreList(this.name).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    }



    );
  }

  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }

}
