import { Users } from "./Users";

export class Cliente{
    IdCliente: number =0;
    Nombre: String ="";
    Apellido: String="";
    Estado: String="";
    Correo: String="";
    Users:Users=new Users;
}