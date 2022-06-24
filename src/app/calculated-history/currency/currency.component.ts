import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../shared/currency.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TouchedErrorStateMatcher } from '../touched-error-state.matcher';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [{ provide: ErrorStateMatcher, useClass: TouchedErrorStateMatcher }]
})
export class CurrencyComponent implements OnInit {
  code1 : string[]= [];
  rate : number = 0;
  calculatedNumber : number = 0;
  source: string ="";
  matcher = new TouchedErrorStateMatcher();
  sourceCurrency: string= "";
  destinationCurrency: string= "";


  constructor(public currencyService : CurrencyService, fb : FormBuilder) {}

  form : FormGroup = new FormGroup({
    $key: new FormControl(null),
    valueToBeCalculated : new FormControl('',Validators.required),
    sourceCurrency: new FormControl('', Validators.required),
    destinationCurrency: new FormControl('',Validators.required),
    calculatedValue: new FormControl('')
  });


  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe( c => {
     this.code1 = Object.keys(c.currencies) as string[];
    })
  }

  onSubmit() {
    let source=this.form.get('sourceCurrency')?.value;
    let destination=this.form.get('destinationCurrency')?.value;
    let number = this.form.get('valueToBeCalculated')?.value;
   if (this.form.valid) {
      this.currencyService.getExchangeRate(source,destination,number).subscribe(num => {
        console.log(num);
       this.calculatedNumber = num;
       this.form.get('calculatedValue')?.setValue(this.calculatedNumber);
       console.log("Form Submitted!");
      })
    }
  }
  

}
