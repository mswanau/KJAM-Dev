export class User {

    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public email: string,
        public password: string,
        public phone: string,
        public address: string,
        public suburb: string,
        public city: string,
        public state: string,
        public postcode: number,
        public birth_date: string
    ) {}

}
