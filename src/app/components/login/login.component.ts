import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/userService/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  userName = 'this is username'
  constructor(private route: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });

  }
  goToReset() {
    console.log(" calling go to ");

    // jjhjhjhj
    this.route.navigateByUrl('/reset')

  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(" form is valid and call api ");
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }

      this.userService.loginUser(reqData).subscribe((response: any) => {
        console.log(response);

      }, err => {
        console.log(err);

      })


    } else {
      console.log(" form is invalid return here ");
      return;

    }


  }


}
