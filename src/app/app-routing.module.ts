import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListComponent } from './student/list/list.component';
import { AddComponent } from './student/add/add.component';
import { DetailsComponent } from './student/details/details.component';
import { EditComponent } from './student/edit/edit.component';


const routes: Routes = [
  {path:"contactus",component:ContactusComponent},
  {path:"about",component:AboutComponent},
  {path:"",component:HomeComponent},
  
  {path:"student",component:ListComponent,children:[
    {path:"details/:id",component:DetailsComponent}
  ]},
  {path:"student/add",component:AddComponent},
  {path:"student/edit/:id",component:EditComponent},
  
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
