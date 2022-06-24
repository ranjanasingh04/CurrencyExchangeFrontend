import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './calculated-history/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';
import { CurrencyComponent } from './calculated-history/currency/currency.component';
import {CalculatedHistoryComponent} from './calculated-history/calculated-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TouchedErrorStateMatcher } from './calculated-history/touched-error-state.matcher';
import { ExcludeDropdownValuePipe } from './exclude-dropdown-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalculatedHistoryComponent,
    CurrencyComponent,
    ExcludeDropdownValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: TouchedErrorStateMatcher }],
  bootstrap: [AppComponent]
})
export class AppModule { }
