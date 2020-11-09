import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus:string = "No server was created yet!";
  serverName:string = "teste";
  username:string = null;
  serverCreated:boolean = false;
  serverList:Array<ServerComponent> = null;

  constructor() {
    this.serverList = new Array<ServerComponent>();
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverList.push(new ServerComponent());
    this.serverCreationStatus = "Server was created!";
    this.serverCreated = true;
  }

  onInputTextChange(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUnsetUsername() {
    this.username = null;
  }

}
