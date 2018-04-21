import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  hide = true;

  user_type:string;
  selectValue:string="";
  // redioOption:string;


  

constructor(private router:Router) { }

  ngOnInit() {
  //  this.selectValue='';
  }
 
  logindashboard(redioOptionG) {
    //console.log("thee   "+JSON.stringify(redioOptionG.value.user))
    //redioOptionG.value.user_type
    // console.log(JSON.stringify(redioOptionG.value))
    if(redioOptionG.value.userpp==="user"){
      // console.log("this user  "+redioOptionG.value.userpp)
      this.router.navigate(["user/dashboard"]);
      
    }
    else   if(redioOptionG.value.userpp==="admin"){
      //console.log("this admin   "+redioOptionG.value.userpp)
      this.router.navigate(["admin/dashboard"]);
    }
      // console.log(redioOptionG.value.userpp)
    // this.selectValue = this.usertype;
    //  if(this.redioOption === "user"){
    //    console.log("user")
    //  }
    //  else if(this.selectValue === "admin"){
    //    console.log("admin")
    //  }
   }

  
}

