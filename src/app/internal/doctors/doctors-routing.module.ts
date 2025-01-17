import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PrescriptionCreateComponent } from './prescription-create/prescription-create.component';
import { PrescriptionPadComponent } from './prescription-pad/prescription-pad.component';
import { NotepadComponent } from './notepad/notepad.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'doctor_dashboard', pathMatch: 'full' },
    {path:"doctors", component:DoctorsComponent},
    {path:"appointment", component:AppointmentComponent},
    {path:"prescription/:pId", component:PrescriptionCreateComponent},
    {path:"prescription", component:PrescriptionCreateComponent},
    {path:"prescription_pad", component:PrescriptionPadComponent},
    {path:"note", component:NotepadComponent},
    {path:"to_do", component:ToDoListComponent},
    {path:"doctor_dashboard", component:DashboardComponent},
    
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
