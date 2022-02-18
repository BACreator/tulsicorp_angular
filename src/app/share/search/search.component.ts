import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../../service/search-service.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    data:any=[];
    list:any;
    matches:any;
    searchfield: string ='';

  constructor(private med:SearchServiceService) { 
    this.med.getData().subscribe(data=>{
      console.warn(data);
      console.log(med,"medtab");
      this.data=data;
      //console.warn(this.data.item);
      console.log("url",data);
      
     
      //console.warn(this.list,"list");  
    })
  }

  ngOnInit(): void {
  }

  onKey(event: any) { // without type info

    //put items in a variable called list
    this.list = this.data.item;
    console.log("list",this.list);
    //console.log(medlist,"medlist"); 
    //this.list += event.target.value ;
    /*this.matches = this.list.filter(tab =>{
      const regex = new RegExp(`^${}`)
    })*/



    

  }

}
