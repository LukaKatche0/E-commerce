import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length <= 50) {
      return value;
    } else {
      return value.slice(0, 50) + '...';
    }
  }

}
