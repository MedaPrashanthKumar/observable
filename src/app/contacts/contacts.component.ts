import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public contacts:ContactsService) { }
  contactList :any;
  ngOnInit(): void {
    this. contactList = this.contacts.getContacts();

  }

}
