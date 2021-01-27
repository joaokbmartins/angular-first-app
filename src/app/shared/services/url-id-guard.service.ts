import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UrlIdGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    var id: number = Number(activatedRouteSnapshot.params['id']);
    if (isNaN(id)) {
      this.router.navigate(['/warning-page']);
    }
    console.log('GUARD');
    return true;
  }

  canActivateChild(
    activatedRouteSnapshot: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(activatedRouteSnapshot);
  }
}
