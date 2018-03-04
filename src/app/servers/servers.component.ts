import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //Can also be the html template in template:
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
    this.serverCreationStatus="Server Created :-). "+this.serverName;
  }
  ngOnInit() {
  }

  onUpdateServerName(event: any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
