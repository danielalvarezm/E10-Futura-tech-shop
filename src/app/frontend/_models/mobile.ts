export class Mobile {

    constructor(
        public _id: string,
        public name: string,
        public description: string, 
        public screenSize: number,
        public camera: string,
        public cpu: string,
        public battery: number,
        public ram: number,
        public storage: number,
        public category: string,
        public brand: string,
        public OS: string,
        public date: string,
        public price: number,
        public stock: number,
        public mark: number,
        public image: string
    ) { }
}