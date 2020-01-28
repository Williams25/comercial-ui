import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CdkVirtualForOfContext } from "@angular/cdk/scrolling";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { MessageService } from 'primeng/api';
import {FieldsetModule} from 'primeng/fieldset'

import { FormsModule } from "@angular/forms";
import { PainelNegociacaoComponent } from './painel-negociacao/painel-negociacao.component';
@NgModule({
  declarations: [
    AppComponent,
    PainelNegociacaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FieldsetModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
