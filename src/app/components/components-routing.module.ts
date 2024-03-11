
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningComponent } from './screening/screening.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { OfacTableComponent } from './ofac-table/ofac-table.component';
import { OffshoreTableComponent } from './offshore-table/offshore-table.component';
import { EditarProveedoresComponent } from './proveedores/editar-proveedores/editar-proveedores.component';
import { TheworldbankTableComponent } from './theworldbank-table/theworldbank-table.component';


const routes: Routes = [
  { path: 'ofac-table', component: OfacTableComponent },
  { path: 'offshore-table', component: OffshoreTableComponent},
  { path: 'theworldbank-table', component: TheworldbankTableComponent},
  { path: 'screening', component: ScreeningComponent},
  {
    path: 'proveedores',
    component: ProveedoresComponent,
    children: [
      { path: 'nuevo', component: EditarProveedoresComponent },
      { path: 'ediciones/:id', component: EditarProveedoresComponent },
    ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
