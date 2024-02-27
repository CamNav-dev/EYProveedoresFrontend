import { Cliente } from "./Cliente";
import { OFFACSource } from "./OFFACSource";
import { OffShoreSource } from "./OffshoreSource";
import { Proveedor } from "./Proveedor";
import { TheWorldBankSource } from "./TheWorldBankSource";

export class ListaScreening{
    IdScreening: number= 0;
    Fecha: Date = new Date();
    Tipo: String = "";
    OFFACSource: OFFACSource = new OFFACSource();
    TheWorldBankSouce:TheWorldBankSource = new TheWorldBankSource();
    OffshoreSource: OffShoreSource = new OffShoreSource();
    Cliente:Cliente = new Cliente();
    Proveedor:Proveedor = new Proveedor();
}