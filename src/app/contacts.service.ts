import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(){
    //http calls
    const contactList =[
      {contactId:1,contactName:'ARC'},
      {contactId:2,contactName:'Sri Krishna'},
      {contactId:3,contactName:'Arjuna'},
      {contactId:4,contactName:'Dharma Raja'},
      {contactId:5,contactName:'Bhima'}
    ]

    return contactList;
  }

  callingFromTemplate(){
    console.log("calling from template directly");
    
  }
}
