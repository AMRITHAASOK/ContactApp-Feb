import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContact';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  
    //To assign group array
    allGroups:any=[]

    contact:MyContact = {}
   
    
    // ContactName:string=''
    // ContactId:string=''
    // ContactPhoto:string=''
    // ContactPhone:string=''
    // ContactEmail:string=''
    // ContactCompany:string=''
    // ContactTitle:string=''

      constructor(private api:ApiService,private router:Router){
        this.contact.groupId="Select A Group"
      }

      ngOnInit(): void {
        this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data);//array of groups
          this.allGroups=data;
        
        })
       
      }

      addContact(){
          this.api.addContact(this.contact).subscribe((data:any)=>{
            this.router.navigateByUrl('')
          })
      }
}
