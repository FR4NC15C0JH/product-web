import { Pedido } from "./pedido.model";

export class Cliente {
    constructor(
        public id: string,
        public email: string,
        public password: string,
        public razaoSocial: string,
        public profiles: string,
        public pedidos: Pedido
    ){}
}