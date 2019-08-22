import { Component } from '@angular/core';

//Angular does not have all the information required. Must add decorated (typescript feature) to enhance your classes

@Component({
    //must add configuration to decoration
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}