/*export class User {

    constructor(
        id = '',
        email = '',
        password = '',
        firstName  = '',
        lastName1 = '',
        lastName2 = '',
        admin = false
    ){
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName1 = lastName1;
        this.lastName2 = lastName2;
        this.admin = admin;
    }

    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName1: string;
    lastName2: string;
    admin: boolean;
    token?: string;
}*/

export class User {

    constructor(
        public id: string,
        public email: string,
        public password: string,
        public firstName: string,
        public lastName1: string,
        public lastName2: string,
        public admin: boolean,
        public token?: string
    ) { }
}