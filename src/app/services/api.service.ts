
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl ='http://localhost:3000/contacts'

  //dependency injection
  constructor(private http:HttpClient) { }

  //function for get all contacts
    getAllContacts():Observable<MyContact>{
      return this.http.get(this.baseUrl)//request 
    }

  //api call for fetch particular contact details
  viewContacts(contactId:string){
                        //http://localhost:3000/contacts/c2
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }
  
  //api call for fetch group names
  getGroupName(groupId:string){
      return this.http.get('http://localhost:3000/groups/'+groupId)
  }
  //api call for fetch group details
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }
  //api call for adding new contact to the server
  addContact(contactBody:any){
      return this.http.post(this.baseUrl,contactBody)
  }
    //api call for deleting a contact in the server
    deleteContact(contactId:any){
                              //http://localhost:3000/contacts/c2
      return this.http.delete(`${this.baseUrl}/${contactId}`) 
    }

    updateContact(contactId:any,contactBody:any){
     return this.http.put(`${this.baseUrl}/${contactId}`,contactBody) 
    }
}
