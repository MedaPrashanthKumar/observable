import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  msgTrue = false;
  constructor(private contacts:ContactsService) { }

  ngOnInit(): void {
  }
  updateContact(formRef:any){
    const newFormdata = formRef.value;
    const contactId  = formRef.value.id;
    this.contacts.updateContact(contactId,newFormdata).subscribe(data =>{
      this.msgTrue = true;
        console.log("Updated data"+data);
    });
    
    

  }
}
