import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatDialog ,MatDialogConfig ,MatDialogRef} from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn=false; 
  constructor
   (public dialog: MatDialog, 
    public dialogRef: MatDialogRef<HeaderComponent>,
    private authenticationService:AuthenticationService   
    ) { }
  ngOnInit(): void {
      this.authenticationService.isLoggedIn$.subscribe((isLoggedIn)=>{
      this.isLoggedIn=isLoggedIn;
    })
  }


  openSignInDialog(): void {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '744px',
      panelClass: 'sign-In'
    });
  }

  openSignUpDialog(): void {

    const dialogRef = this.dialog.open(SignUpComponent,{
      width:'744px',
      panelClass:'sign-Up'
    });
  }


  
}
