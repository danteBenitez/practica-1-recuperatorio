        
        const contenedorTurnos = document.querySelector('#contenedor-turnos');


        const mostrarTurnos = async () => {

            const turnos = await obtenerTurnos();

            if (turnos.length == 0) contenedorTurnos.innerHTML = "<tr class=\"text-center\">No hay turnos registrados</tr>"
            console.log(turnos)
            contenedorTurnos.innerHTML += turnos.map(turno => {
                return renderizarTurno(turno);
            }).join('');
        }

        document.addEventListener('DOMContentLoaded', mostrarTurnos);

        const obtenerTurnos = async () => {
            try {
                const respuesta = await fetch('/api');

                if (respuesta.status == 404) return [];

                const { turnos } = await respuesta.json();


                return turnos;

            } catch(err) {
                console.log(err);
                alert(err.message);
            }
        }

        const actualizarTurno = async (id) => {

            try {
                const respuesta = await fetch(`/api/${id}`, {
                    method: 'UPDATE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: {  
                        fecha_turno: fechaTurno.value,
                        nombre_paciente: nombrePaciente.value,
                        dni_paciente: dniPaciente.value,
                        telefono_paciente: telefonoPaciente.value
                    }
                });

                if (respuesta.status == 404) return [];

                const turnos = await respuesta.json();

                return turnos;

            } catch(err) {
                console.log(err);
                alert(err.message);
            }
        }

        const eliminarTurno = async (id) => {

            try {
                const respuesta = await fetch(`/api/${id}`, {
                    method: 'DELETE'
                });

                if (respuesta.status != 200) throw ({ message: 'Error al eliminar el turno '})

                const turnoElimnado = await respuesta.json();

                return turnoElimnado;
            } catch(err) {
                console.log(err);
                alert(err.message);
            }
        }

        const renderizarTurno = turno => {
            return `
                <tr>
                    <td>${new Date(turno.fecha_turno.slice(0, -8)).getDay()}/${new Date(turno.fecha_turno.slice(0, -8)).getMonth()+1}</td>    
                    <td>${turno.nombre_paciente}</td>
                    <td>${turno.dni_paciente}</td>
                    <td>${turno.telefono_paciente}</td>
                    <td class="d-flex flex-column">
                        <button onclick=eliminarTurno(${turno.id}) class="btn btn-warning">Eliminar</button>
                        <a href="/editar/${turno.id}" class="btn btn-danger">Actualizar</button>
                    </td>  
                    
                </tr>
            `
        }