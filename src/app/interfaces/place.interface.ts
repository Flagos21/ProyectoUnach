export default interface Place {
    id?: string;
    nombre: string;
    tutor: number;
    cargo: number;
    descripcion: string;
    tipo: string;
    estado: 'Aprobado'|'Proceso'|'Rechazado';
}
export default interface Bitacora {
    id?: string;
    descripcion: string;
    fecha: Date;
    horas: number;
}

export interface UserI{
    nombre: String;
    email: String;
    uid: String;
    password: String;
    perfil: 'usuario' | 'admin',
}