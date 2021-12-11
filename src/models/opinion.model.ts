export class Opinion {
    constructor(private id_usuario: number, private id_producto: number,
        private mark: number, private comment: string,
        private advantage: string, private disadvantage: string) {}
}