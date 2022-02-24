import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      fullname:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.fullname === this.loginForm.value.fullname && a.password === this.loginForm.value.password
      });
      if(user){
        //alert("Login Success!!");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{alert("User not found!!");this.loginForm.reset();}
    },err=>{alert("Something went wrong!!")})
  }
}
