import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup = this.fb.group({
  });

  constructor(private userService : UserService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]},
      { validators: this.confirmPasswordValidator }
      );
  }

  onSubmit() {
    this.userService.connect(this.username.value, this.password.value)
    this.router.navigate(["home"])
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  validForm() : Boolean {
    return this.registrationForm.valid;
  }

  confirmPasswordValidator: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true, errors: "not godd" }
  }
  

}
