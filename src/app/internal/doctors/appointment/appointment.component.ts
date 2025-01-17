import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit{
  constructor(
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
