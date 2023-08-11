export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;
    cuil: string;
    cuentaActiva: boolean;
    authorities!: string[];

    constructor(
        nombre: string,
        nombreUsuario: string,
        email: string,
        password: string,
        cuil: string,
        cuentaActiva: boolean
    ) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.cuil = cuil;
        this.cuentaActiva = cuentaActiva
    }
}
