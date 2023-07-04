import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,FormGroup} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule ,MatDialogRef,MatDialogConfig,MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<SignInComponent>){

}

hide = true;


signInForm = new FormGroup({
  emailControl: new FormControl('', [Validators.required, Validators.email]),

  // usernameControl: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$'), Validators.minLength(3), Validators.maxLength(20)]),

  passwordControl : new FormControl('', [Validators.required, Validators.maxLength(64),Validators.minLength(8)] )

});


getPasswordErrorMessage(){
  if (this.signInForm.get('passwordControl')?.hasError('required')){
    return 'Password is required';
  }
  if ((this.signInForm.get('passwordControl')?.hasError('minlength')) ||
   (this.signInForm.get('passwordControl')?.hasError('maxlength'))) {
    return 'password length [8 ~ 64] ';
  }


  const errorMessage = '';
  console.log('getPasswordErrorMessage:', errorMessage);
  return errorMessage; }

 getErrorMessage() {
  if (this.signInForm.get('emailControl')?.hasError('required')) {
    return 'You must enter a value';
  }
  const errorMessage = this.signInForm.get('emailControl')?.hasError('email') ? 'Not a valid email' : '';
  console.log('getErrorMessage:', errorMessage);
  return errorMessage;

  // return  this.signInForm.get('emailControl')?.hasError('email') ? 'Not a valid email' : '';


}

// getUsernameErrorMessage() {
//   if (this.signInForm.get('usernameControl')?.hasError('required')) {
//     return 'Username is required';
//   }
//   if (this.signInForm.get('usernameControl')?.hasError('pattern')) {
//     return 'Username can only contain alphanumeric characters and underscores';
//   }
//   if (this.signInForm.get('usernameControl')?.hasError('minlength')) {
//     return 'Username must be at least 3 characters long';
//   }
//   if (this.signInForm.get('usernameControl')?.hasError('maxlength')) {
//     return 'Username cannot be more than 20 characters long';
//   }
//   return '';
// }



submitSignInForm() {
  const formData = {
    emailControl: this.signInForm.get('emailControl')?.value,
    passwordControl: this.signInForm.get('passwordControl')?.value
  };
  console.log('submitSignInForm:', formData);

  this.http.post('https://example.com/api/authenticate', formData)
    .subscribe(
      (response: any) => {
        console.log('Sign-in successful!', response);
        // handle successful authentication (e.g. store the access token or cookie)
      },
      (error) => {
        console.error('Sign-in failed!', error);
        // display an error message or handle the error in some other way
      }
    );
}


openSignUpDialog(): void {
  this.dialogRef.close();
  const dialogRef = this.dialog.open(SignUpComponent,{
    width:'744px'

  });
}
  }


