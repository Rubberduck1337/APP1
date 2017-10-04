import { Injectable } from '@angular/core';
import { Visit } from '../../visit';
import { Employee } from '../../employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) { 
    }

    fetchEmployeeArr(): Observable<Employee[]> {
        return this.http.get<Employee[]>('localhost:3000/api/allEmployees');
    }

    sendVisits(visArr: Visit): Observable<any>{
        return this.http.post('api/visits',
        visArr)
        .map(res => console.log(res)); //mapping to text just to see the string response propagated to component subscribe
    }
}
