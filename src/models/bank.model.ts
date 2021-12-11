export class Bank {
    constructor(private dni: string, private card_number: number,
        private balance: number, private expiration_date: string,
        private security_code: number) {}
}