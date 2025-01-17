import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppointmentService } from 'src/app/service/appointment/appointment.service';

interface Tool {
  toolName: string;
  available: boolean;
  availableAmount: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {constructor(
    private appointmentService : AppointmentService
   ){}

   patientList: any[] = [];

  ngOnInit(): void {
    this.appointmentService.getAll().subscribe((val : any) => {
      this.patientList = val  
    })
   }
  


   

   deletePatient(id : any){
    this.appointmentService.deleteById(id).subscribe((val : any) =>{
      console.log("Data deleted");
      this.ngOnInit()
    })
   }
}
