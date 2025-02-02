import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-role-set',
  templateUrl: './role-set.component.html',
  styleUrls: ['./role-set.component.scss']
})
export class RoleSetComponent implements OnInit {
  apiUrl = 'http://localhost:9090/api/users';

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private userServiceService: UserServiceService) {}

  userName!: any;
  userData: any;
  userList! : any;
  // Initial user object structure
  user = {
    username: '',
    userFirstName: '',
    userLastName: '',
    email: '',
    password: '',
    role: new Set<string>() // Using a Set to avoid duplicate roles
  };

  // Array of available roles
  availableRoles = ['ROLE_ADMIN', 'ROLE_MODERATOR', 'ROLE_USER'];

  // Initialize the form group
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(),
    userFirstName: new FormControl(),
    userLastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    role: new FormControl() // Add role control for the form
  });

  // onSubmit method to handle form submission
  onSubmit() {
    // Ensure the role is correctly assigned in the form before submission
    this.signupForm.value.role = Array.from(this.user.role); // Convert the Set to an array

    // Submit the form data
    this.addData(this.signupForm.value).subscribe((val: any) => {
      console.log("User updated successfully");
      this.router.navigateByUrl('/login');
    });
  }

  // Method to reset the form
  resetForm() {
    this.user = {
      username: '',
      userFirstName: '',
      userLastName: '',
      email: '',
      password: '',
      role: new Set<string>()
    };
  }

  // HTTP PUT request to submit data
  addData(signup: any) {
    return this.http.put(this.apiUrl, signup);
  }

  // ngOnInit to fetch user data based on the username
  ngOnInit(): void {
    this.userName = this.route.snapshot.params['userName']
    this.userServiceService.getById(this.userName).subscribe((val: any) => {
      this.userList = val;

      // Set form values
      this.signupForm.setValue({
        username: val.username,
        userFirstName: val.userFirstName,
        userLastName: val.userLastName,
        email: val.email,
        password: val.password,
        role: val.role // Role field should match with what the backend returns
      });
    });
  }
}
