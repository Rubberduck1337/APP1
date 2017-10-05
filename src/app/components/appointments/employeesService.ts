import { Injectable } from '@angular/core';
import { Visit } from '../../visit';
import { Employee } from '../../employee';
import { DataEmpl } from '../../employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) { 
    }

    fetchEmployeeArr(): Observable<DataEmpl> {
        return this.http.get<DataEmpl>('http://localhost:4000');
    }

    postVisit(vis: Visit): void{
        this.http.post('http://localhost:4000/visits', vis);
    }
}