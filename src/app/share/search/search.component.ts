import { Component, OnInit, Output } from '@angular/core';
import {SearchServiceService} from '../../service/search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    tablet:any=[];
    searchValue:string='';
    tabName:any;
    //list:any;
    matches:any;
    //searchfield: string ='';
    displayresult:string='';
    

  constructor(private med:SearchServiceService) { 
    this.med.getData().subscribe(medinfo=>{
      //console.warn(data);
     // console.log(med,"medtab");
      this.tablet=medinfo;
      
     // this.tabName = this.tablet.item;
      
      //console.log("url",medinfo);
      //console.log("tab",this.tablet);
     // console.warn(this.tablet.item);
      
     
      //console.warn(this.list,"list");  
    })
  }

  ngOnInit(): void {
  }

  onKey(event: any) { // without type info
    this.tabName = this.tablet.item;

    if(this.searchValue.length === 0){
      this.tabName = [];
      console.log(this.tabName);
    }
    /*this.matches = this.tabName.filter((content:any)=>{
      const regex = new RegExp(`^${this.searchValue}`,`gi`);
      console.log("regex",regex);
      console.log("searchValue",this.searchValue);
      console.log(content,"content");
      console.log(this.tabName,"content");
      return content.itemName.match(regex);
    });*/
    //console.log("tabName",this.tabName);
    //put items in a variable called list
    //this.list = this.data.item;
    //console.log("list",this.list);
    //console.log(medlist,"medlist"); 
    //this.list += event.target.value ;
    /*this.matches = this.list.filter(tab =>{
      const regex = new RegExp(`^${}`)
    })*/

    
    
    console.log("searchValue",this.searchValue);
    //console.log(event);
    //this.displayresult=event;

    const search = document.getElementById('search');
    //const matchList = document.getElementById('match_list');
/*

    const searchStatus = async (searchText:string) => {
      const res = await fetch('https://raw.githubusercontent.com/BACreator/tulsicorp/main/lib/json/data.json').then(
        response =>{
          console.log(searchText,"searchText");
          if(!response.ok){
            throw Error("Error");
          }
          return response.json();
        }
      ).then(data =>{
        let list = data.item;
        console.log(list,"list");

        //lets match with input text
        let matches = list.filter((state:any) =>{
          const regex = new RegExp(`^${searchText}`,`gi`);
          //console.log("state",state);
          //console.log("regex", regex);
          //console.log("searchText", searchText);
          return state.itemName.match(regex);
          
        });
        //Hide all results when input is empty
        /*if(searchText.length === 0){
          matches = [];
         // matchList ='';
        }
        //Hide if no results are found
        if (searchText !== list) {
            matches = [];
          //  matchList.innerHTML = '';
        }
        outputHtml(matches);

      }).catch(error=>{console.log(error);});
      
    };*/
/*
    const outputHtml = (matches:any)=>{
      if (matches.length > 0) {
        console.log("outputhtml");
        const html = matches.map((match:any) => `
            <div class="card card-body mb-1">
                <h4>${match.itemName} (${match.itemMfrCode})</h4>
            </div>
            `).join('');
       // matchList?.innerHTML = html;
    }

    }*/

    //search?.addEventListener('input',()=>searchStatus(search.ariaValueText));

  }

}
