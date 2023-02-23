import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';
import {HttpClientModule}  from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ContactsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
