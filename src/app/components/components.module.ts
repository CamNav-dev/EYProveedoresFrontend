import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatCard } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { SignupComponent } from './signup/signup.component';
import { SignupUserComponent } from './signup/signup-user/signup-user.component';
import { SignupclienteComponent } from './signup/signup-cliente/signup-cliente.component';
import { LandingComponent } from './landing/landing.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScreeningComponent } from './screening/screening.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { OfacTableComponent } from './ofac-table/ofac-table.component';
import { OffshoreTableComponent } from './offshore-table/offshore-table.component';
import { ListarProveedoresComponent } from './proveedores/listar-proveedores/listar-proveedores.component';
import { EditarProveedoresComponent } from './proveedores/editar-proveedores/editar-proveedores.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TheworldbankTableComponent } from './theworldbank-table/theworldbank-table.component';
import { ListaScreeningResponseComponent } from './lista-screening-response/lista-screening-response.component';

@NgModule({
  declarations: [
    SignupComponent,
    SignupUserComponent,
    SignupclienteComponent,
    LandingComponent,
    ScreeningComponent,
    ProveedoresComponent,
    OfacTableComponent,
    OffshoreTableComponent,
    ListarProveedoresComponent,
    EditarProveedoresComponent,
    TheworldbankTableComponent,
    ListaScreeningResponseComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatExpansionModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
