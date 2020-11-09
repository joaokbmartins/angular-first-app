import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent {

  serverStatus:boolean = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? true : false;
  }

  getStatusColor():string {
    return this.serverStatus ? "lightgreen" : "#ffaaaa";
  }

}