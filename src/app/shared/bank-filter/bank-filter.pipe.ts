import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankFilter'
})
export class BankFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldName?: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    if (!fieldName) {
      fieldName = 'name';
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it[fieldName].toLocaleLowerCase().includes(searchText);
    });
  }

}
