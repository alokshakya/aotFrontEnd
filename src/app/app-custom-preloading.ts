import { PreloadingStrategy, Route } from '@angular/router';

import { Observable,TimeInterval } from 'rxjs';
import * as Rx from 'rxjs';

export class AppCustomPreloding implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
//     if(route.data && route.data.preloading){
//         if(route.data.delay){
//             setTimeout(() => {
//                return load()
//             }, route.data.delay);
//         }
//         else{
//            return load()
//         }
//     }
//     else {
//         return Rx.Observable.of(null);
//     }
    return route.data && route.data.preloading ?load() : Rx.Observable.of(null);
  }



  
}