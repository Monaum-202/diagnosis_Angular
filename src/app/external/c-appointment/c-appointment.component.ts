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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      date: ['', Validators.required],
      department: ['', Validators.required],
      doctor: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  // Load departments from API
  loadDepartments(): void {
    this.http.get<any[]>('http://localhost:8080/api/department').subscribe(
      (response) => {
        this.departments = response;


      },
      (error) => {
        console.error('Error loading departments:', error);
      }
    );
  }

  // Load doctors based on selected department
  onDepartmentChange(event: Event): void {
    const departmentId = (event.target as HTMLSelectElement).value;
    console.log(departmentId);
    if (!departmentId) {
      this.doctors = [];
      return;
    }
    console.log(departmentId);
    this.http.get<any[]>(`http://localhost:8080/api/doctorAppointments/doctors/by-department/${departmentId}`).subscribe(
      (response) => {
        this.doctors = response;
      },
      (error) => {
        console.error('Error loading doctors:', error);
      }
    );
  }

  // Submit appointment form data to backend API
  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const url = 'http://localhost:8080/api/doctorAppointments'; // Spring Boot backend
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

