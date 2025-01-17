import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabEntryComponent } from './lab-entry.component';

const routes: Routes = [

     { path: '', redirectTo: 'LabEntry_dashboard', pathMatch: 'full' },
      {path:"LabEntry_dashboard", component: LabEntryComponent},
    // {path:"doctors", component:DoctorsComponent},
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
export class LabEntryRoutingModule { }
