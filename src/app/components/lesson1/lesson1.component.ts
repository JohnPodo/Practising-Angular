import { Component, OnInit } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css'],
})
export class Lesson1Component implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer: boolean = true;
  serverCreation: string = '';
  serverName: string = '';
  username: string = '';
  repeatList = ['Takis', 'Sakis', 'Makis'];

  constructor() {
    setTimeout(() => (this.allowNewServer = false), 2000);
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit(): void {}

  GetServerStatus() {
    return this.serverStatus;
  }

  OnCreateServer() {
    this.serverCreation = 'Server was created. Name is ' + this.serverName;
    this.repeatList.push(this.serverName);
  }

  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  GetColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
