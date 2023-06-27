import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //http://localhost:4200 -> '' path for redirection -- http://localhost:4200/contact/admin
  {
    path:'',redirectTo:'contact/admin',pathMatch:'full'
  },
  {
    //path for contact manager
    path:'contact/admin',component:ContactManagerComponent

  },
  {
    //path for add contact
    path:'contact/add',component:AddContactComponent
  },
  {//path for update contact
    path:'contact/update/:Id',component:UpdateContactComponent 
  },
  {
  path:'contact/view/:contactId',component:ViewContactComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
