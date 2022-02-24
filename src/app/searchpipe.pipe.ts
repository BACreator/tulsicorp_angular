import { Pipe, PipeTransform } from '@angular/core';
import {filter} from 'rxjs/operators'
import{SearchComponent} from '../app/share/search/search.component'
import {SearchServiceService} from '../app/service/search-service.service'
//import { link } from 'fs';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(tablet: any[],searchValue: string):any[] {
    if(!tablet||!searchValue){
      return tablet;
    }
    return tablet.filter(list =>list.itemName.toLocaleLowerCase().includes(
      searchValue.toLocaleLowerCase()));
      
  }

}
