import { Component,NgModule,OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators, FormsModule, ReactiveFormsModule,  FormArray} from '@angular/forms';
import {BreakpointObserver,Breakpoints} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgSwitch, NgSwitchCase, AsyncPipe} from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatOptionModule } from '@angular/material/core'
 

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'] ,


})

export class AddPropertyComponent implements OnInit {



  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  propertyTypes = ['House', 'Apartment'];
  countries = [
    { value: 'Egypt', name: 'Egypt' },
    { value: 'UAE', name: 'UAE' }
  ];
  cities: any = {

    'Egypt': ['Cairo', 'Alexandria', 'Luxor', 'Aswan', 'Hurghada'],
  'UAE': ['Dubai', 'Abu Dhabi', 'Sharjah'],
  'India': ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'],
  'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
  };
  amenities = ['WiFi', 'AC', 'TV', 'Kitchen'];
  houseRules = ['No smoking', 'No parties', 'No pets'];



  stepperOrientation!: Observable<StepperOrientation>;


  constructor(private _formBuilder: FormBuilder, private breakpointObserver: BreakpointObserver) { }
  
  




ngOnInit(): void {
  


  this.firstFormGroup = this._formBuilder.group({
    propertyType: ['', Validators.required],
    propertyTitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    pricePerNight: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)(\.\d+)?$/)]],
    insuranceTax: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)(\.\d+)?$/)]],
    description: ['', Validators.maxLength(250)],
   
   
    houseRules: this._formBuilder.group({
      noSmoking: [false, Validators.required],
      noParties: [false, Validators.required],
      noPets: [false, Validators.required]
    })
  });
  this.secondFormGroup = this._formBuilder.group({
    country: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    // Define the form controls for the second step here
  });
  this.thirdFormGroup = this._formBuilder.group({
    
      amenities: this._formBuilder.array(this.amenities.map(() => this._formBuilder.control(false)))
   
      ,details: ['', Validators.required],
  
  });

  this.createAmenitiesCheckboxes();




  this.stepperOrientation = this.getStepperOrientation();

}
  

// createAmenitiesFormControls(): { [key: string]: any } {
//   const amenitiesFormControls: { [key: string]: any } = {};
//   this.amenities.forEach((amenity) => {
//     amenitiesFormControls[amenity] = [false, Validators.required];
//   });
//   return amenitiesFormControls;
// }


createAmenitiesFormControls() {
  this.amenities.forEach(() => {
    const control = this._formBuilder.control(false);
    (this.thirdFormGroup.get('amenities') as FormArray).push(control);
  });
}
  createAmenitiesCheckboxes() {
    const amenitiesFormGroup = this.thirdFormGroup.get('amenities') as FormGroup;
    this.amenities.forEach((amenity) => {
      amenitiesFormGroup.addControl(amenity, this._formBuilder.control(false));
    });




  
}
get amenitiesFormArray() {
  return this.thirdFormGroup.get('amenities.amenities') as FormArray;
}
  getCities(country: string) {
    return this.cities[country]



  }

onCountrySelected(countryValue: string) {
  this.cities = this.getCities(countryValue);
}

  // ngOnInit() {
  //   this.firstFormGroup = this._formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', Validators.email],
  //     phone: ['', Validators.required],
  //     address: ['', Validators.required],
  //   });
  //   this.secondFormGroup = this._formBuilder.group({
  //     propertyName: ['', Validators.required],
  //     propertyType: ['', Validators.required],
  //     price: ['', Validators.required],
  //     description: ['', Validators.required],
  //   });
  //   this.thirdFormGroup = this._formBuilder.group({
  //     image: ['', Validators.required],
  //   });

    


    
  


  private getStepperOrientation(): Observable<StepperOrientation> {
    return this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Handset])
      .pipe(
        map((result) => {
          if (result.matches) {
            return 'vertical';
          } else {
            return 'horizontal';
          }
        })
      );
  }
  


}
@NgModule({
  declarations: [AddPropertyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatOptionModule ,
    MatSelectModule 
  ]
}) 
export class AddPropertyModule{

}