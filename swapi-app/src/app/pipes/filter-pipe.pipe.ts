import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items) return [];
    if (!filter) return items;
    return items.filter(item => this.applyFilter(item, filter));
  }

  applyFilter(item, filter) {
    if (filter.species != '' && filter.movies != '') {
      for (let key in filter) {
        return item.species === filter.species && 
        item.movies.find(film => {
          return item.movies.indexOf(filter.movies) > -1;
        })
      }
    }

    if (filter.species != '') {
      return item.species === filter.species;
    } else if (filter.movies != '') {
      return item.movies.find(film => {
        return item.movies.indexOf(filter.movies) > -1;
      })
    } else {
      return true;
    }
  }
}
