import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DadosGeraisComponent } from './dados-gerais/dados-gerais.component';
import { BarService } from './bar.service';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, DadosGeraisComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BarService]
})
export class AppModule { }
