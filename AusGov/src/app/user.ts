import { Injectable } from "../../node_modules/@angular/core";

@Injectable({
    providedIn: 'root'
})
export class User {

    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public address: string,
        public email: string,
        public phone: string,
        public password: string,
        public dob: string,
    ) {}

}
