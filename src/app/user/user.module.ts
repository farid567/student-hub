import { NgModule } from '@angular/core';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes =[
    { path: "dashboard", component: UserDashboardComponent }
]

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserDashboardComponent]
})
export class UserModule { }
