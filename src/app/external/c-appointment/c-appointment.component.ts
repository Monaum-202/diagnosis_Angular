import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-c-appointment',
  templateUrl: './c-appointment.component.html',
  styleUrls: ['./c-appointment.component.scss']
})
export class CAppointmentComponent implements OnInit {

  appointmentForm: FormGroup;
  departments: any[] = [];
  doctors: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize form with validators
    this.appointmentForm = this.fb.group({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),
      date: new FormControl('', Validators.required),
      doctor: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      message: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  // Load departments from API
  loadDepartments(): void {
    this.http.get<any[]>('http://localhost:9090/api/department').subscribe(
      (response) => {
        this.departments = response;


      },
      (error) => {
        console.error('Error loading departments:', error);
      }
    );
  }


  onDepartmentChange(event: Event): void {
    const departmentId = (event.target as HTMLSelectElement).value.trim();
  
    // If no department is selected, clear the doctors list and return
    if (!departmentId || departmentId === 'null') {
      this.doctors = [];
      return;
    }
  
    // Call the Spring Boot endpoint to fetch doctors by department
    this.http.get<any[]>(`http://localhost:9090/api/doctorAppointments/doctors/by-department/${departmentId}`)
      .subscribe({
        next: (response) => {
          // Map response to a cleaned-up doctors list
          this.doctors = response.map((doctor: any) => ({
            id: doctor.id,
            name: doctor.name,
            specialization: doctor.specialization
          }));
        },
        error: (error) => {
          console.error('Error loading doctors:', error);
          // Clear doctors list if there's an error
          this.doctors = [];
        }
      });
    }  

  // Submit appointment form data to backend API
  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value,'-------------------------------------');
      
      const url = 'http://localhost:9090/api/doctorAppointments'; // Spring Boot backend
      this.http.post(url, this.appointmentForm.value).subscribe({
        next: (response) => {
          console.log('Appointment submitted successfully', response);
          alert('Appointment created successfully!');
          this.appointmentForm.reset();
        },
        error: (err) => {
          console.error('Error submitting appointment', err);
          alert('Failed to create appointment');
        },
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}

