import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,FormGroup, AbstractControl,ValidationErrors} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule ,MatDialogRef,MatDialogConfig,MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
constructor(private http: HttpClient, public dialog: MatDialog, public dialogRef: MatDialogRef<SignInComponent>){

}
  hide = true;

  // emailControl : new FormControl('', [Validators.required, Validators.email]);
  // phoneCountryControl = new FormControl('', Validators.required);
  // phoneNumberControl = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
  // nationalIdControl = new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]);
  // usernameControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$'), Validators.minLength(3), Validators.maxLength(20)]);

  signUpForm = new FormGroup({
    
    nameControl : new FormControl('', [ Validators.required ,Validators.maxLength(15)   ]  ) , 
    emailControl: new FormControl('', [Validators.required, Validators.email ,Validators.minLength(15)]),
    phoneCountryControl: new FormControl('', Validators.required),
    phoneNumberControl: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    nationalIdControl: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
    usernameControl: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$'), Validators.minLength(5), Validators.maxLength(20)]),
    passwordControl : new FormControl('', [Validators.required, Validators.maxLength(64),Validators.minLength(8)] ),
    passwordConfirmControl : new FormControl ('', [Validators.required]) 
    }, { validators: this.passwordMatch });



  countries = [
    { name: 'Egypt', code: 'EG', dialCode: '20' },
    { name: 'Saudi Arabia', code: 'SA', dialCode: '966' },
    { name: 'United Arab Emirates', code: 'AE', dialCode: '971' },

    { name: 'United States', code: 'US', dialCode: '1' },
    { name: 'Canada', code: 'CA', dialCode: '1' },
    { name: 'Mexico', code: 'MX', dialCode: '52' }


  ];
  getPhoneNumberErrorMessage() {
    if (this.signUpForm.get('phoneNumberControl')?.hasError('required')) {
      return 'You must enter a phone number';
    }
    if (this.signUpForm.get('phoneNumberControl')?.hasError('pattern')) {
      return 'Your phone number must be 10  digits long';
    }
    return '';
  }
getphoneCountryErrorMessage(){
  if (this.signUpForm.get('phoneCountryControl')?.hasError('required')) {
    return 'You Must Choose Country';
  }
  return'';
}
getNameErrorMessage(){
if ( this.signUpForm.get('nameControl')?.hasError('required'))
{ 
  return ' Name is required ';
}

if ( this.signUpForm.get('nameControl')?.hasError('maxLength')){
  return'Max length is 15 Characters' 
}
return'';
}

  getErrorMessage() {
    if (this.signUpForm.get('emailControl')?.hasError('required')) {
      return 'Email is required ! ';
    }
    if (this.signUpForm.get('emailControl')?.hasError('minLength')) {
      return 'minimum Email length is 10 characters ! ';
    }
    if  ( this.signUpForm.get('emailControl')?.hasError('email')) { 'Not a valid email' 
  }
  return '';
  }


  getNationalIdErrorMessage() {
    if (this.signUpForm.get('nationalIdControl')?.hasError('required')) {
      return ' National ID  number is required !';

  }
  if ((this.signUpForm.get('nationalIdControl')?.hasError('minLength') )|| (this.signUpForm.get('nationalIdControl')?.hasError('maxlength'))) {
    return 'Your National ID  number must be 14 digits long';
  }
  return '';




  }

 getPasswordErrorMessage(){
  if (this.signUpForm.get('passwordControl')?.hasError('required')){
    return 'Password is required';
  }
  if ((this.signUpForm.get('passwordControl')?.hasError('minlength')) ||
   (this.signUpForm.get('passwordControl')?.hasError('maxlength'))) {
    return 'password length [8 ~ 64] ';
  }


  return '';
 }

  getUsernameErrorMessage() {
    if (this.signUpForm.get('usernameControl')?.hasError('required')) {
      return 'Username is required';
    }
    if (this.signUpForm.get('usernameControl')?.hasError('pattern')) {
      return 'Username can only contain alphanumeric characters and underscores';
    }
    if (this.signUpForm.get('usernameControl')?.hasError('minlength')) {
      return 'Username must be at least 5 characters long';
    }
    if (this.signUpForm.get('usernameControl')?.hasError('maxlength')) {
      return 'Username cannot be more than 20 characters long';
    }
    return '';
  }


  submitSignUpForm() {
    const formData = {
      emailControl: this.signUpForm.get('emailControl')?.value,
      phoneCountry: this.signUpForm.get('phoneCountryControl')?.value,
      phoneNumber: this.signUpForm.get('phoneNumberControl')?.value,
      nationalId: this.signUpForm.get('nationalIdControl')?.value,
      username: this.signUpForm.get('usernameControl')?.value,
      FullName:this.signUpForm.get('nameControl')?.value,
      countrycode:this.signUpForm.get('phoneCountryControl')
    };

    this.http.post('https://example.com/api/signup', formData)
      .subscribe(
        (result) => {
          console.log('Sign-up successful!', result);
          // navigate to a success page or display a success message
        },
        (error) => {
          console.error('Sign-up failed!', error);
          // display an error message or handle the error in some other way
        }
      );
  }
  passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('passwordControl')?.value;
    const confirmPassword = control.get('passwordConfirmControl')?.value;

    if (password !== confirmPassword) {
      return { 'passwordsDoNotMatch': true };
    }

    return null;
  }


  getpasswordConfirmError(){
    const password = this.signUpForm.get('passwordControl')?.value;
    const confirmPassword = this.signUpForm.get('passwordConfirmControl')?.value;

    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
  
    return '';
  }
  openSignInDialog(): void {
    this.dialogRef.close();
  

    const dialogRef = this.dialog.open(SignInComponent, {
      width: '744px'
    });
  }
}


