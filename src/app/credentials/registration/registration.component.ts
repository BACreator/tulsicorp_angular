import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    
  })

  ngOnInit(): void {
  }

  //Create Registration click event
  saveInfo(){}

}
