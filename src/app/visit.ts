import {Employee} from './employee';

export interface Visit {
    id: number;
    date: Date;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    personToVisit: Employee;
}