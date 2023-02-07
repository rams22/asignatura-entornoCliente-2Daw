// comprobarNombre(elemento): devuelve "" en caso de todo OK, mensaje de error en otro caso
export function comprobarNombre(nombre) {
    if (nombre == "") {
        return "El campo no puede ser vacío";
    }
    return "";
}