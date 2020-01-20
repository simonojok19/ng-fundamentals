import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class EventListResolver implements Resolve<any>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return undefined;
  }

}
