import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddPropertyDto } from '../types/AddPropertyDto';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  propertyForm!: FormGroup;
  countries: string[] = ['Egypt', 'USA', 'India']; // Add more countries as needed
  cities: { [key: string]: string[] } = {
    Egypt: ['Cairo', 'Alexandria', 'Luxor', 'Aswan', 'Hurghada'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
    India: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata']
  };
  filteredCities: string[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.propertyForm = this.formBuilder.group({
      propertyType: ['', Validators.required],
      pricePerNight: ['', Validators.required],
      insuranceTax: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(25)]],
      guestNumbers: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: [''],
      noOfBeds: ['', [Validators.pattern('[0-9]+')]],
      noOfBedRooms: ['', [Validators.pattern('[0-9]+')]],
      noOfBathRooms: ['', [Validators.pattern('[0-9]+')]], 
      image: [''] 
    });

    // Set the initial cities based on the first country in the list
    this.filteredCities = this.cities[this.countries[0]];
  }

  onCountryChange(): void {
    const selectedCountry = this.propertyForm.get('country')?.value;
    this.filteredCities = this.cities[selectedCountry];
    this.propertyForm.get('city')?.setValue('');
  }

  onSubmit(): void {
    if (this.propertyForm.valid) {
      // Create the payload to send to the API
      const addApartment: AddPropertyDto = {
        // Map the form values to the AddPropertyDto properties
        propertyType: this.propertyForm.value.propertyType,
        pricePerNight: this.propertyForm.value.pricePerNight,
        insuranceTax: this.propertyForm.value.insuranceTax,
        description: this.propertyForm.value.description,
        guestNumbers: this.propertyForm.value.guestNumbers,
        country: this.propertyForm.value.country,
        city: this.propertyForm.value.city,
        street: this.propertyForm.value.street,
        noOfBeds: this.propertyForm.value.noOfBeds,
        noOfBedRooms: this.propertyForm.value.noOfBedRooms,
        noOfBathRooms: this.propertyForm.value.noOfBathRooms,
        propertyTitle: '',
        hostId: ''
      };
      console.log(addApartment);
      // Send an HTTP POST request to the API endpoint with the addApartment payload
      this.http.post('your-api-endpoint', addApartment).subscribe({
        next:(res)=>{

        },
        error:(err)=>{

        }
      }
        
      );
    } else {
      // Handle invalid form
    }
  }
}
