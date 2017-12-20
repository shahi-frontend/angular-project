import { Component } from '@angular/core';

@Component({
    selector: 'login-cont',
    template: '<h1>{{name}}</h1>'
})

export class LoginComponent{
    name: string = "Login Content";
}