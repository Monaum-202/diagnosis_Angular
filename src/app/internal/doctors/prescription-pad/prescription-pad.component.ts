import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionService } from 'src/app/service/prescription/prescription.service';

@Component({
  selector: 'app-prescription-pad',
  templateUrl: './prescription-pad.component.html',
  styleUrls: ['./prescription-pad.component.scss']
})
export class PrescriptionPadComponent implements OnInit {
  constructor(
    private prescriptionService: PrescriptionService,
    private route: ActivatedRoute
  ) { }

  prescriptionList: any[] = [];
  prescription: any
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('pId');
    if (id) {
      this.prescriptionService.getById(id).subscribe((val: any) => {
        this.prescription = val;
        console.log(val);
        
      });
    }
    this.prescriptionService.getAll().subscribe((val: any) => {
      this.prescriptionList = val;
    });
  }





  deletePatient(id: any) {
    this.prescriptionService.deleteById(id).subscribe((val: any) => {
      console.log("Data deleted");
      this.ngOnInit()
    })
  }

}
