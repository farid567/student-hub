import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import {MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule,MatRadioModule} from '@angular/material';

// import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';



let routes: Routes = [
  // {path : 'login', component : LoginComponent}
  { path: "", component: LoginComponent },
  { path: "login", redirectTo: "", pathMatch: "full" },
  {
    path : "user",
    loadChildren:  "app/user/user.module#UserModule"
    
  },
  { path : "admin", loadChildren: "app/admin/admin.module#AdminModule" }
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatRadioModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  }

