import { Component } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'app/header/header.component.html',
    styleUrls: [('app/header/header.component.css')]
})

export class HeaderComponent{
    content: string = "App Header";
}