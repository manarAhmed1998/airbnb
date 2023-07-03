import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Cpmponents/Footer/footer/Footer/footer.component';
import { HeaderComponent } from './Cpmponents/header/header.component';
import { CardsComponent } from './Cpmponents/Cards/cards/cards.component';
import { FiltersComponent } from './Cpmponents/filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './Cpmponents/search/search.component';
import { CardDetailsComponent } from './Cpmponents/card-details/card-details.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardsComponent,
    FiltersComponent,
    SearchComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
