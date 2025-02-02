import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabEntryComponent } from './lab-entry.component';
import { DataEntryComponent } from './data-entry/data-entry.component';

const routes: Routes = [

     { path: '', redirectTo: 'LabEntry_dashboard', pathMatch: 'full' },
      {path:"LabEntry_dashboard", component: LabEntryComponent},
    {path:"Data_Entry", component:DataEntryComponent},
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
