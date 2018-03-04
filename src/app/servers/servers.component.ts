import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus="Click to create Server";
  serverName = '';
  constructor() {
    setTimeout(() => {
          this.allowNewServer = true;
        }, 2000);
        
  }

  onCreateServer(){
    this.serverCreationStatus="Server Created :-)";
  }
  ngOnInit() {
  }

  onUpdateServerName(event: any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
