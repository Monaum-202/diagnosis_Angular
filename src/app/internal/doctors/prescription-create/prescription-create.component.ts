import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionService } from 'src/app/service/prescription/prescription.service';

@Component({
  selector: 'app-prescription-create',
  templateUrl: './prescription-create.component.html',
  styleUrls: ['./prescription-create.component.scss']
})
export class PrescriptionCreateComponent {
    constructor(
       private http: HttpClient,
      private route: ActivatedRoute
    ) { }
  selectedBranch: string = ''; // Currently selected branch

  // Form control for product name input
  testNameControl = new FormControl('');
  selectedTest: string = ''; // Selected test name
  selectedTests: any[] = []; // List of selected tests
  tests: any[] = []; // List of tests from API

  filteredTests: any[] = []; // Filtered list for autocomplete suggestions





  printOptions = [
    { name: 'productName', label: 'Product Name', selected: true },
    { name: 'productPrice', label: 'Product Price', selected: true },
    { name: 'vat', label: 'VAT', selected: false },
    { name: 'expiredDate', label: 'Expired Date', selected: false }
  ];

  // Fetch tests from API on component initialization
  ngOnInit() {
    this.fetchTests();
    this.fetchDoctors();
  }

  fetchTests() {
    this.http.get<any[]>('http://localhost:9090/api/diagnostic').subscribe(
      (data) => {
        this.tests = data || []; // Ensure tests is initialized
      },
      (error) => {
        console.error('Error fetching tests:', error);
        alert('Failed to load test data.');
      }
    );
  }

  // Filter tests for autocomplete suggestions
  filterTests() {
    const input = this.testNameControl.value?.trim().toLowerCase() || '';
    if (input === '') {
      this.filteredTests = [];
    } else {
      this.filteredTests = this.tests.filter((test) =>
        test.name.toLowerCase().includes(input)
      );
    }
  }

  // Select a test from suggestions
  selectTest(test: any) {
    if (!this.selectedTests.some((t) => t.name === test.name)) {
      this.selectedTests.push({ ...test});
    } else {
      alert('Test is already added.');
    }
    this.testNameControl.setValue(''); // Clear input
    this.filteredTests = []; // Clear suggestions
  }

  // Remove a test from the list
  removeTest(test: any) {
    this.selectedTests = this.selectedTests.filter((t) => t.name !== test.name);
  }

  // Search for a specific test
  searchTest() {
    const searchTerm = this.testNameControl.value?.trim().toLowerCase();
    if (!searchTerm) {
      alert('Please enter a test name to search.');
      return;
    }

    this.filteredTests = this.tests.filter((test) =>
      test.name.toLowerCase().includes(searchTerm)
    );

    if (this.filteredTests.length === 0) {
      alert('No tests found.');
    }
  }



  doctorNameControl = new FormControl(''); // Form control for doctor name input
  selectedDoctor: string = ''; // Selected test name
  selectedDoctors: any[] = []; // List of selected tests
  doctors: any[] = []; // List of tests from API

  filteredDoctors: any[] = [];



  fetchDoctors() {
    this.http.get<any[]>('http://localhost:9090/api/doctor').subscribe(
      (data) => {
        this.doctors = data || []; // Ensure doctors list is initialized
      },
      (error) => {
        console.error('Error fetching doctors:', error);
        alert('Failed to load doctor data.');
      }
    );
  }
  
  // Filter doctors for autocomplete suggestions
  filterDoctors() {
    const input = this.doctorNameControl.value?.trim().toLowerCase() || '';
    if (input === '') {
      this.filteredDoctors = [];
    } else {
      this.filteredDoctors = this.doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(input)
      );
    }
  }
  
  // Select a doctor and set its name in the input box
  selectDoctor(doctor: any) {
    this.doctorNameControl.setValue(doctor.name); // Set selected doctor name in input
    this.filteredDoctors = []; // Clear suggestions
  }
  
}