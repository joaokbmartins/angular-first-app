import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeDetailGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    var id: number = Number(activatedRouteSnapshot.params['id']);
    if (isNaN(id)) {
      alert('Alert: Recipe not found.');
      this.router.navigate(['/']);
    }
    return true;
  }
  
}