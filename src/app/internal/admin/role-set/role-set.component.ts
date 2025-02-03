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

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private userServiceService: UserServiceService
  ) {}

  userName!: string;
  userList: any;
  availableRoles = ['ROLE_ADMIN', 'ROLE_MODERATOR', 'ROLE_USER'];

  // Initialize the form group
  signupForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    userFirstName: new FormControl(''),
    userLastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl([]) // Ensure roles are stored as an array
  });

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['userName'];
    this.userServiceService.getByuserName(this.userName).subscribe((val: any) => {
      this.userList = val;

      // Convert roles to an array before updating the form
      const roleArray = Array.isArray(val.role) ? val.role : [val.role];

      this.signupForm.patchValue({
        ...val,
        role: roleArray
      });
    });
  }

  // Submit form and update user
  onSubmit() {
    const updatedData = this.signupForm.value;

    this.addData(updatedData).subscribe(
      (val: any) => {
        console.log('User updated successfully');
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  // HTTP PUT request to submit updated data
  addData(signup: any) {
    return this.http.put(`${this.apiUrl}/${this.userName}`, signup);
  }

  // Handle role selection with checkboxes
  toggleRole(role: string) {
    const selectedRoles = this.signupForm.controls['role'].value || [];
    
    if (selectedRoles.includes(role)) {
      this.signupForm.controls['role'].setValue(selectedRoles.filter((r: string) => r !== role));
    } else {
      this.signupForm.controls['role'].setValue([...selectedRoles, role]);
    }
  }
}
