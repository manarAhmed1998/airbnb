import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material.module';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatDialog ,MatDialogConfig ,MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<HeaderComponent>) { }


  openSignInDialog(): void {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '800px'
    });
  }

  openSignUpDialog(): void {

    const dialogRef = this.dialog.open(SignUpComponent,{
      width:'800px',
    });
  }
}
