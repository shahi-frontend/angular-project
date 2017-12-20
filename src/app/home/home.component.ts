import { Component } from '@angular/core';

@Component({
    selector: 'home-cont',
    templateUrl: 'app/home/home.component.html',
    styleUrls: [('app/home/home.component.css')]
})

export class HomeComponent{
    name: string = 'Rupali Shahi';
    page: string = 'Home Content';
    colSpan: number = 2;
    firstName: string = 'Harvey';
    lastName: string = 'Specter';
    gender: string = 'Male';
    age: number = 40;
    showDetails: boolean = false;

    toggleDetails(): void{
        this.showDetails = !this.showDetails;
    }
}