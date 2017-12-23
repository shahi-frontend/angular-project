import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: [('app/employee/employee.component.css')]
})

export class EmployeeComponent{
    colSpan: number = 5;
    employees: any[];
    constructor(){
        this.employees = [
            {code: 'emp101', name: 'Jessica', gender: 'female', annualSalary: 80000, dateOfBirth: '25/6/1998'},
            {code: 'emp102', name: 'Harvey', gender: 'male', annualSalary: 76000, dateOfBirth: '01/04/2000'},
            {code: 'emp103', name: 'Louis', gender: 'male', annualSalary: 60000, dateOfBirth: '25/08/2000'},
            {code: 'emp104', name: 'Donna', gender: 'female', annualSalary: 58000, dateOfBirth: '20/4/2002'},
            {code: 'emp105', name: 'Rachel', gender: 'female', annualSalary: 50000, dateOfBirth: '28/9/2005'},
        ];
    }

    getEmployees(): void{
        this.employees = [
            {code: 'emp101', name: 'Jessica', gender: 'female', annualSalary: 80000, dateOfBirth: '25/6/1998'},
            {code: 'emp102', name: 'Harvey', gender: 'male', annualSalary: 76000, dateOfBirth: '01/04/2000'},
            {code: 'emp103', name: 'Louis', gender: 'male', annualSalary: 60000, dateOfBirth: '25/08/2000'},
            {code: 'emp104', name: 'Donna', gender: 'female', annualSalary: 58000, dateOfBirth: '20/4/2002'},
            {code: 'emp105', name: 'Rachel', gender: 'female', annualSalary: 50000, dateOfBirth: '28/9/2005'},
            {code: 'emp106', name: 'Michael', gender: 'male', annualSalary: 55000, dateOfBirth: '14/5/2003'}
        ];
    }

    trackByCode(index: number, employee:any): string{
        return employee.code;
    }
}