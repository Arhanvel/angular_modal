import { Pipe, PipeTransform } from '@angular/core';
import { Bank } from './bank';

@Pipe({
  name: 'bankFilter'
})
export class BankFilterPipe implements PipeTransform {

  transform(items: Bank[], searchText: string): Bank[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
