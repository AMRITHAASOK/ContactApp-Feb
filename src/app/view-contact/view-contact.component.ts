import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
    //to hold contact id
    contactId: string='';
    //to hold particular contact details
    contact:any=[]
    //to hold particular group id
    groupId:string='';
    //to hold particular group name
    groupName:any;
    constructor(private activatedroute:ActivatedRoute,private api:ApiService){}

    ngOnInit(): void {
      //get particular contact id
      this.activatedroute.params.subscribe((data:any)=>{
        console.log(data);//{contactId: 'c2'}
        this.contactId=data.contactId;
        console.log(this.contactId);//c2  

      //get particular contact details
        this.api.viewContacts(this.contactId).subscribe((data:any)=>{
          console.log(data);
          this.contact=data//contact details  
          this.groupId=data.groupId//c2
          console.log(this.groupId);

      //get particular group name
       this.api.getGroupName(this.groupId).subscribe((data:any)=>{
        console.log(data);//group details
        this.groupName=data.name
        console.log(this.groupName);
      })
      })

      })
    }
}
