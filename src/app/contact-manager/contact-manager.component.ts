import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

      //To hold all contacts details
      allContacts:MyContact[]=[]
  //to hold data from user
      searchKey:string='';
    // heading:string='Contact Manager Page';

      url="https://a7.pnghunt.com/preview/255/44/978/avatar-icon-3d-character-icon-vector-material.jpg"
        //dependency injection
      constructor(private api:ApiService){}

      ngOnInit(): void { //life cycle hook
      this.getAllContact()
      }
      getAllContact(){
        this.api.getAllContacts().subscribe((result:any)=>{
          console.log(result);//array of contacts found
          this.allContacts=result
        })
      }

      // nameChange(){
      //   alert('name change')
      // }
      search(event:any){
      
        this.searchKey=event.target.value
        console.log(event.target.value);
      }
      deleteContact(contactId:any){
        this.api.deleteContact(contactId).subscribe((result:any)=>{
          alert('contact deleted')
          this.getAllContact()
        });
      }
}
