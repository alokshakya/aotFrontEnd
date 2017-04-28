import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(object, args:any) : any {
    let keys = [];
    for (let key in object) {
      keys.push({key: key, value: object[key]});
    }
    return keys;
  }
}
