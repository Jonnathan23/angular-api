import Swal from "sweetalert2"

export const modifyError = () => {
    Swal.fire({
        title:'Error al modificar',
        icon: 'error',
        text:'Verifique que los campos estén correctos',
        timer:5000,
        timerProgressBar: true
    })
}

export const emptyInputs = (input:string) => {
    Swal.fire({
        title:'Campos vacios',
        icon:"error",
        text: `El campo ${input} está vacio!!`
    })
}

export const deleteSucces = () => {
    Swal.fire({
        title:'Borrado con exito',
        icon:'info',
        text:'Recargue la página para visualizar los cambios',
        timer:3000
    })
}