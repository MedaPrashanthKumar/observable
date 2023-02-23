import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient:HttpClient) { }

  getContacts(){
    //http calls
    // const contactList =[
    //   {contactId:1,contactName:'ARC'},
    //   {contactId:2,contactName:'Sri Krishna'},
    //   {contactId:3,contactName:'Arjuna'},
    //   {contactId:4,contactName:'Dharma Raja'},
    //   {contactId:5,contactName:'Bhima'}
    // ]

    // return contactList;

    return this.httpClient.get("http://localhost:3000/contacts");
  }

  callingFromTemplate(){
    console.log("calling from template directly");
    
  }
}
