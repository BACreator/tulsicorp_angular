import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http:HttpClient) { }
  getData(){
    let url = "https://raw.githubusercontent.com/BACreator/tulsicorp/main/lib/json/data.json";
    return this.http.get(url);
  }
}
