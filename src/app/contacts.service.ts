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

    //Headers 
    //const httpHeaders = new HttpHeaders();
    //httpHeaders.append('content-type','application/json');
    let httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'ARCTutorialsdfdfdfdfdf12345',
      'timeOutSeconds':'3000'
    });
    //Headers are Immutable
    //custom headers
    httpHeaders = httpHeaders.set('arc-tutorial-id','118');
   let time =  httpHeaders.get('timeOutSeconds');
   if(time === '3000'){
    //at the Api - we can check if Authorization is empty - redirect to login screen
    //some custom logic
    httpHeaders.set('Authorization','');
   }
    return this.httpClient.get("http://localhost:3000/contacts",{headers:httpHeaders});
  }

  callingFromTemplate(){
    console.log("calling from template directly");
    
  }
  //Method for POST Method

  createContact(createResource:any){
    return this.httpClient.post("http://localhost:3000/contacts",createResource);
  }

//Method for PUT method
 updateContact(id:any,updatedBody:any){
  const httpHeaders = new HttpHeaders();
  httpHeaders.append('content-type','application/json');
  const endpointURL = "http://localhost:3000/contacts/"+id;
  return this.httpClient.put(endpointURL,updatedBody);
}


//Method for delete HTTP Request
deleteContact(contactId:any){
  const endPointUrl = "http://localhost:3000/contacts/" + contactId;
  return this.httpClient.delete(endPointUrl);
}

//get contact by ID
getContactById(){
  const httpParams = new HttpParams({
    fromObject :{
      id : ['2','3']
    }
  });

 


  //http://localhost:3000/contacts?query=mark
  return this.httpClient.get('http://localhost:3000/contacts',{params:httpParams});
}

}
