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

  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class DoctorsModule { }
