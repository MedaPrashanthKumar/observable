import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  msgTrue = false;
  constructor(public contacts:ContactsService) { }
  contactList :any;
  ngOnInit(): void {
    //this. contactList = this.contacts.getContacts();
    //Get the HTTP get Method 
    this.contacts.getContacts().subscribe(data =>{
      this.contactList = data ;
    })

  }


  //Method for POST request
  addNewContact(formRef:NgForm){
    //mock the form data that will get from the form 
    // let userObj = formRef.value;
    // console.log(userObj);
    const newFormdata = formRef.value;
    // const newFormdata = {
    //   "userId": 1,
    //   "id": 7,
    //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    // }
    this.contacts.createContact(newFormdata).subscribe(data =>{
        this.msgTrue = true;
        console.log(data);
    });
  }

  //this contactId will be dynamic and will usually come from the UI click
  deleteContact(contactId:any){
    this.contacts.deleteContact(contactId).subscribe(data =>{
      console.log(data);
      
    });
  }

}
