import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private httpClient: HttpClient) { }
  
  
  private apiUrl = "http://localhost:9090/api/doctorAppointments"

  

  addData(user: any) {
    return this.httpClient.post(this.apiUrl, user)
  } 

  // getAll() {
  //   return this.httpClient.get(this.apiUrl)
  // }
  
  getAll() {
    return this.httpClient.get(this.apiUrl+"/patients/29")
  }

  deleteById(id: any) {
    return this.httpClient.delete(this.apiUrl+ "/"+ id)
  }

  getById(id: any){
    return this.httpClient.get(this.apiUrl+ "/"+ id)
  }

  updateData(user: any){
    console.log(user);
    
    return this.httpClient.put(this.apiUrl+ "/"+ user.id, user)
  }
}
