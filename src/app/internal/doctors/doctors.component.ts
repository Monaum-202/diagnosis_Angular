import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
       this.time = new Date().toLocaleTimeString();
     }, 1000);

     setInterval(() => {
       const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
       this.date = new Date().toLocaleDateString('en-GB'); // en-GB ensures dd/mm/yyyy format
     }, 1000); // Update every second
     
  }

  time = ""
  date=""

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "";

  }
}
