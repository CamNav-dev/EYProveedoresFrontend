
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningComponent } from './screening/screening.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { OfacTableComponent } from './ofac-table/ofac-table.component';
import { OffshoreTableComponent } from './offshore-table/offshore-table.component';


const routes: Routes = [

  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'ofac-table', component: OfacTableComponent },
  { path: 'offshore-table', component: OffshoreTableComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
