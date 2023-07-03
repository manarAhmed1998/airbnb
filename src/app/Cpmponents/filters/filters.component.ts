import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements AfterViewInit {
  
    
      constructor() { }
    
      ngAfterViewInit() {

        const buttons = document.querySelectorAll('#proberties button');

        buttons.forEach(button => {
          button.addEventListener('click', () => {
            button.classList.toggle('selected');
          });
        });

        
        // Get the range slider and the price input
        const priceRange: HTMLInputElement = document.getElementById("priceRange") as HTMLInputElement;
        const priceInput: HTMLInputElement = document.getElementById("minPriceInput") as HTMLInputElement;
    
        // Update the price input when the range slider changes
        priceRange.addEventListener('input', function(this: HTMLInputElement) {
            priceInput.value = this.value;
        });
    
        // Update the range slider when the price input changes
        priceInput.addEventListener('input', function(this: HTMLInputElement) {
            if (parseInt(this.value) >= parseInt(priceRange.min) && parseInt(this.value) <= parseInt(priceRange.max)) {
                priceRange.value = this.value;
            }
        });
      }
    
      applyFilters() {
        // Get the range slider and the price input
        const priceRange: HTMLInputElement = document.getElementById("priceRange") as HTMLInputElement;
        const priceInput: HTMLInputElement = document.getElementById("minPriceInput") as HTMLInputElement;
      
        // Get the value of the input field
        const value: number = parseInt(priceInput.value);
      
        // Check if the value is valid
        if (value >= 1 && value <= 10000) {
          // Update the range slider and the input field
          priceRange.value = value.toString();
          priceInput.value = value.toString();
      
          // Close the modal
          const modalBackdrop: HTMLElement = document.querySelector('.modal-backdrop') as HTMLElement;
          const modal: HTMLElement = document.getElementById("myModal") as HTMLElement;
      
          if (modalBackdrop.parentElement) {
            modalBackdrop.parentElement.removeChild(modalBackdrop);
          }
      
          modal.classList.remove('show');
        } else {
          // Display an error message
          const errorDiv: HTMLElement = document.getElementById("errorDiv") as HTMLElement;
          if (value < 1) {
            errorDiv.innerText = "Invalid number. Please enter a number greater than or equal to 1.";
          } else if (value > 10000) {
            errorDiv.innerText = "Invalid number. Please enter a number more than 1 and  less than  10000  .";
         
        }
        
    }
      
    }
    
    
    
}