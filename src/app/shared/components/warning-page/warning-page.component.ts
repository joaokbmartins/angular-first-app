import { Component } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, RouterState, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warning-page',
  templateUrl: 'warning-page.component.html'
})
export class WarningPageComponent {

  warningMessage: string = '404';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.data['warning-message']);
  }

}