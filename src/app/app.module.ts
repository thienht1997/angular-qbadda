import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './caculator/caculator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PetComponent, CalculatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
