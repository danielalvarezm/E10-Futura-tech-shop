export class User {

    constructor(
        public id: string,
        public email: string,
        public password: string,
        public firstName: string,
        public lastName1: string,
        public lastName2: string,
        public admin: boolean,
        public wallet: number,
        public shoppingCart?: [{
            id: string,
            amount: string
        }],
        public token?: string
    ) { }
}