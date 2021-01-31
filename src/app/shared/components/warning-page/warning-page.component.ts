import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warning-page',
  templateUrl: 'warning-page.component.html',
})
export class WarningPageComponent {
  warningMessage: string = '404';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.warningMessage = this.route.snapshot.data['warning-message'];
  }
}
