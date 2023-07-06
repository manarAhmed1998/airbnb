import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./Cpmponents/Footer/footer/Footer/footer.component";
import { HeaderComponent } from "./Cpmponents/header/header.component";
import { CardsComponent } from "./Cpmponents/Cards/cards/cards.component";
import { FiltersComponent } from "./Cpmponents/filters/filters.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchComponent } from "./Cpmponents/search/search.component";
import { CardDetailsComponent } from "./Cpmponents/card-details/card-details.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { SignInComponent } from "./Cpmponents/sign-in/sign-in.component";
import { SignUpComponent } from "./Cpmponents/sign-up/sign-up.component";
import { MaterialModule } from "./shared/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogRef, MatDialogConfig } from "@angular/material/dialog";
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./Cpmponents/dashboard/dashboard.component";
import { ErrorComponent } from "./Cpmponents/error/error.component";
import { RouterModule,Routes,ROUTES } from "@angular/router";
import { AddPropertyComponent } from "./Cpmponents/add-property/add-property.component";
import { NotFoundComponent } from './Cpmponents/not-found/not-found.component';

let routes:Routes=[
  {path:'',component:CardsComponent},
  {path:'home',component:CardsComponent},
  {path:'cards',component:CardsComponent},
  {path:'cards/:id',component:CardDetailsComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'results-not-found',component:NotFoundComponent},
  //erro should be last
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    FiltersComponent,
    SearchComponent,
    CardDetailsComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MaterialModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }],

  bootstrap: [AppComponent],
})
export class AppModule {}
