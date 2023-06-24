const fechaTurno = document.querySelector('[name=fechaTurno]');
const nombrePaciente = document.querySelector('[name=nombrePaciente]');;
const dniPaciente = document.querySelector('[name=dniPaciente]');
const telefonoPaciente = document.querySelector('[name=telefonoPaciente]');
const formularioEditar = document.querySelector('form');

document.addEventListener('DOMContentLoaded', async () => {

    const { id } = formularioEditar.dataset;

    try {
        const respuesta = await fetch(`/api/${id}`);

        if (respuesta.status == 404) {
            console.error('No se encontró el turno');
            window.location.assign('/');
            return;
        }

        const {turno}= await respuesta.json();

        fechaTurno.value = turno.fecha_turno.slice(0, -8);
        nombrePaciente.value = turno.nombre_paciente;
        dniPaciente.value = turno.dni_paciente;
        telefonoPaciente.value = turno.telefono_paciente;

    } catch(err) {
        console.log(err);
        alert(err.message);
    }

})

const actualizarTurno = async (evt) => {

    evt.preventDefault();

    try {
        const respuesta = await fetch(`/api/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({  
                fecha_turno: fechaTurno.value,
                nombre_paciente: nombrePaciente.value,
                dni_paciente: dniPaciente.value,
                telefono_paciente: telefonoPaciente.value
            })
        });

        if (respuesta.status == 404) return [];

        const turnos = await respuesta.json();

        window.location.assign('/');

    } catch(err) {
        console.log(err);
        alert(err.message);
    }

}

formularioEditar.addEventListener('submit', actualizarTurno);