type Surname = {
    first_surname: string,
    second_surname: string
};

type Gender = 'Masculino' | 'Femenino' | 'No especificado';

type Address = {
    street: string,
    city: string,
    postal_code: number,
    province: string
};

type Card = {
    card_number: number,
    expiration_date: string,
    security_code: number     
};

export class User {
    constructor(private id: number, private dni: number, private email: string, private password: string, private name: string,
        private surname: Surname,  private date_of_birth: string, private gender: Gender, private phone: number,
        private address: Address, private credit_card: Card) {}
}