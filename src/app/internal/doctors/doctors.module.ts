import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { PrescriptionCreateComponent } from './prescription-create/prescription-create.component';
import { RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors.component';
import { PrescriptionPadComponent } from './prescription-pad/prescription-pad.component';
import { NotepadComponent } from './notepad/notepad.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    DoctorsComponent,
    AppointmentComponent,
    PrescriptionCreateComponent,
    PrescriptionPadComponent,
    NotepadComponent,
    ToDoListComponent,
    DashboardComponent,
    DepartmentComponent,
    PrescriptionComponent

  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    BrowserModule,


  
  
 
    
  ]
})
export class DoctorsModule { }
