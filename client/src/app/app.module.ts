import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';

import { HttpService } from './http.service';
import { HomeComponent } from './home/home.component';
import { EditPartialComponent } from './edit-partial/edit-partial.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent,
    EditPartialComponent,
    QuotesComponent,
    AddQuoteComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
