import {Employee} from './employee';

export interface Visit {
    date: Date;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    personToVisit: Employee;
}