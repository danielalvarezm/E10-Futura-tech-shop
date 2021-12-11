type Status = 'Tramitando pedido' | 'En camino' | 'Entregado'; 

type Address = {
    street: string,
    city: string,
    postal_code: number,
    province: string
};

export class Order {
    constructor(private id: number, private date: string,
        private id_user: number, private id_product: number[],
        private price: number, private status: Status,
        private shipping_address: Address) {}
}