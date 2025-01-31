import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionService } from 'src/app/service/prescription/prescription.service';

@Component({
  selector: 'app-prescription-pad',
  templateUrl: './prescription-pad.component.html',
  styleUrls: ['./prescription-pad.component.scss']
})
export class PrescriptionPadComponent implements OnInit {
  constructor(
    private prescriptionService: PrescriptionService, private http: HttpClient,
    private route: ActivatedRoute
  ) { }


  
    ngOnInit(): void {
      this.Addnewrow();
     }
   
     title = 'FormArray';
     items!: FormArray;
     reactform = new FormGroup({
       name: new FormControl('', Validators.required),
       age: new FormControl('', Validators.required),
       phone: new FormControl('', Validators.required),
       sex: new FormControl('', Validators.required),
       medicines: new FormArray([]),
      investigations: new FormArray([]),
      diagnosis: new FormArray([]),
      complaints:new FormArray([]),
      advice: new FormControl('', Validators.required),
      followup: new FormControl('', Validators.required),
     });
   
   
     Addnewrow() {
       this.items = this.reactform.get("medicines") as FormArray;
       this.items.push(this.Genrow())
     }

     Addnewrow1() {
      this.items = this.reactform.get("investigations") as FormArray;
      this.items.push(this.Genrow1())
    }

    Addnewrow2() {
      this.items = this.reactform.get("diagnosis") as FormArray;
      this.items.push(this.Genrow2())
    }

    Addnewrow3() {
      this.items = this.reactform.get("complaints") as FormArray;
      this.items.push(this.Genrow3())
    }

     Removeitem(index:any){
       this.items = this.reactform.get("medicines") as FormArray;
       this.items.removeAt(index)
     }
   
     Removeitem1(index:any){
      this.items = this.reactform.get("investigations") as FormArray;
      this.items.removeAt(index)
    }

    Removeitem2(index:any){
      this.items = this.reactform.get("diagnosis") as FormArray;
      this.items.removeAt(index)
    }

    Removeitem3(index:any){
      this.items = this.reactform.get("complaints") as FormArray;
      this.items.removeAt(index)
    }

     get medicines(){
       return this.reactform.get("medicines") as FormArray;
     }

     get investigations(){
      return this.reactform.get("investigations") as FormArray;
    }

    get diagnosis(){
      return this.reactform.get("diagnosis") as FormArray;
    }
    
    get complaints(){
      return this.reactform.get("complaints") as FormArray;
    }
    
     Genrow(): FormGroup {
       return new FormGroup({
        medicine:new FormControl('',Validators.required),
        dosage:new FormControl('',Validators.required),
        frequency:new FormControl('',Validators.required),
        duration:new FormControl('',Validators.required)
      });
     }
   
     Genrow1(): FormGroup {
      return new FormGroup({
        investigations:new FormControl('',Validators.required)
       
     });
    }

    Genrow2(): FormGroup {
      return new FormGroup({
        diagnosis:new FormControl('',Validators.required)
       
     });
    }

    Genrow3(): FormGroup {
      return new FormGroup({
        complaints:new FormControl('',Validators.required)
       
     });
    }

    medicine: any[] = [];

    fetchMedicines() {
      this.http.get<any[]>('http://localhost:9090/api/medicines').subscribe((data: any[]) => {
        this.medicine = data;
      });
    }



    ProceedSave() {
      if (this.reactform.valid) {
        const formData = this.reactform.value;
        console.log('Form data:', formData);
        
  
        this.prescriptionService.savePrescription(formData).subscribe({
          next: (response) => {
            alert('Prescription saved successfully!');
            console.log(response);
            this.reactform.reset(); // Reset form after successful submission
          },
          error: (error) => {
            alert('Error saving prescription.');
            console.error(error);
          }
        });
      } else {
        alert('Please fill all required fields.');
      }
    }
  }
  
