import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: IProduct[], searchText: string): IProduct[] {
    if (!items) {
      return [];
    }

    if(!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(p => {
      return p.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
