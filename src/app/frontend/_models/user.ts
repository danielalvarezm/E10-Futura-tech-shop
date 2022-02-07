export class User {

    constructor(
        public _id: string,
        public email: string,
        public password: string,
        public firstName: string,
        public lastName1: string,
        public lastName2: string,
        public admin: boolean,
        public token?: string
    ) { }
}