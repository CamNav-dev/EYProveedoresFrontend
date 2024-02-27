
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningComponent } from './screening/screening.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';


const routes: Routes = [

  { path: 'proveedores', component: ProveedoresComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
