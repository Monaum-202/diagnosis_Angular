import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(
    private signService: LoginService,
    private router: Router

  ) { }

  signupForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    pass: new FormControl(),
    Cpass: new FormControl(),
    phone: new FormControl(),
    role: new FormControl(),
  })

  onSubmit() {
    this.signService.addData(this.signupForm.value).subscribe((val: any) => {
      console.log("SignIn successfully");
      this.router.navigateByUrl('/login')

    })
  }

}
