 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: string, args?: any): any {
  	let number = value.replace('%','');
  	let a = parseInt(number);
    return Math.round(a)+'%';
  }

}
