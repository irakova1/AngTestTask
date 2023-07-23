import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../model/Trip';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: Trip[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter((item) =>
      item.tripCity?.toLowerCase().includes(searchText)
    );
  }

}
