import { Injectable } from '@angular/core';
import { Visit } from '../visit';
import { Employee } from '../employee';
import { DataEmpl } from '../employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class VisitorService {

    constructor(private http: HttpClient) { 
    }

    fetchEmployeeArr(): Observable<Visit[]> {
        return this.http.get<Visit[]>('http://localhost:4000/visits');
    }

    postVisit(vis: Visit): void{
        this.http.post('http://localhost:4000/visits', {vis}).subscribe();
    }
}