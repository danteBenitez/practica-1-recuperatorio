const fechaTurno = document.querySelector('[name=fechaTurno]');
const nombrePaciente = document.querySelector('[name=nombrePaciente]');;
const dniPaciente = document.querySelector('[name=dniPaciente]');
const telefonoPaciente = document.querySelector('[name=telefonoPaciente]');
const formularioCrear = document.querySelector('form');

const crearTurno = async (evt) => {

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

formularioCrear.addEventListener('submit', crearTurno);