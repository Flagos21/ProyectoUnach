export default interface Place {
    id?: string;
    nombre: string;
    tutor: number;
    cargo: number;
    descripcion: string;
    tipo: string;
    estado: string;
}
export default interface Bitacora {
    id?: string;
    descripcion: string;
    fecha: Date;
    horas: number;
}