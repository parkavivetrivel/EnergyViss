import { Component,ElementRef,ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('passwordInput')
  passwordInput!: ElementRef;
  passwordHidden = true;  title = 'internProject';
  email = new FormControl('', [Validators.required, Validators.email]);  
  Password = new FormControl('', [Validators.required, Validators.email]);  
  togglePasswordVisibility() {
    const inputEl: HTMLInputElement = this.passwordInput.nativeElement;
    inputEl.type = this.passwordHidden ? 'text' : 'password';
    this.passwordHidden = !this.passwordHidden;
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter valid email';
    }

    return this.email.hasError('email') ? 'Please enter valid email' : '';
  }
  
  getErrorPassword() {
    if (this.Password.hasError('minlength')) {
      return 'Password should be a minimum of 6 characters';
      
    }
  
    return this.Password.hasError('Password') ? 'Password should be a minimum of 6 characters' : '';
  }
  
  
  login() {
    // Implement your login logic here
  }
}

