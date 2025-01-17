import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-c-appointment',
  templateUrl: './c-appointment.component.html',
  styleUrls: ['./c-appointment.component.scss']
})
export class CAppointmentComponent implements OnInit{

  onSubmit() {
    console.log(this.appointmentForm.value);
    }
    
    
    
      ngOnInit(): void {
       
      }

      appointmentForm: FormGroup = new FormGroup({
        name:new FormControl(''),
        email:new FormControl(''),
        phone:new FormControl(''),
        Dname:new FormControl(''),
        date:new FormControl(''),
        department:new FormControl(''),
        message:new FormControl('')
      })
}
