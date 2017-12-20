import { Component } from '@angular/core';

@Component({
    selector: 'signup-cont',
    template: '<h1>{{name}}</h1>'
})

export class SignupComponent{
    name: string = "Signup Content";
}