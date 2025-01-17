import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';



const routes: Routes = [

    { path: '', redirectTo: 'admin_dashboard', pathMatch: 'full' },
      {path:"admin_dashboard", component:DashboardComponent},
    {path:"doctors", component:DoctorsComponent},
  //   {path:"appointment", component:AppointmentComponent},
  //   {path:"prescription/:pId", component:PrescriptionCreateComponent},
  //   {path:"prescription", component:PrescriptionCreateComponent},
  //   {path:"prescription_pad", component:PrescriptionPadComponent},
  //   {path:"note", component:NotepadComponent},
  //   {path:"to_do", component:ToDoListComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
