import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cssId'
})
export class CssIdPipe implements PipeTransform {

    transform(value: string, args?: any): any {
        var a = value.slice(0, 3);
        return a;
    }

}
