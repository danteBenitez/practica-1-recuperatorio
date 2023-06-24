const Turno = require('../models/Turno');

const obtenerTurnos = async (req, res) => {
  try {
        const turnos = await Turno.findAll();

        if (!turnos) throw ({ status: 404, msg: 'No se encontraron turnos'});

        res.json({
            turnos
        })
    } catch(err) {
        console.error(err);
        res.status(err.status || 500).send(err.msg || 'Error interno del servidor');
    }
}
  
const obtenerTurno = async (req, res) => {

    const { id } = req.params;

    try {
          const turno = await Turno.findByPk(id);
  
          if (!turno) throw ({ status: 404, msg: 'No se encontró el turno'});
  
          res.json({
              turno
          })
      } catch(err) {
          console.error(err);
          res.status(err.status || 500).send(err.msg || 'Error interno del servidor');
      }
}

const actualizarTurno = async (_req, res) => {

    const { id } = req.params;
    const {  
        fecha_turno ,
        nombre_paciente,
        dni_paciente,
        telefono_paciente
    } = req.body;

    try {
          const turno = await Turno.findByPk(id);
  
          if (!turno) throw ({ status: 404, msg: 'No se encontró el turno'});
        
          await turno.update({
            fecha_turno,
            nombre_paciente,
            dni_paciente,
            telefono_paciente
          });


          res.json({
              turno
          })
      } catch(err) {
          console.error(err);
          res.status(err.status || 500).send(err.msg || 'Error interno del servidor');
      }
}

const crearTurno = async (req, res) => {
    const {  
        fecha_turno ,
        nombre_paciente,
        dni_paciente,
        telefono_paciente
    } = req.body;

    try {
          const turno = await Turno.create({
            fecha_turno,
            nombre_paciente,
            dni_paciente,
            telefono_paciente
          })
  
          if (!turno) throw ({ status: 404, msg: 'No se encontró el turno'});

          res.json({
              turno
          })
      } catch(err) {
          console.error(err);
          res.status(err.status || 500).send(err.msg || 'Error interno del servidor');
      }
}

const eliminarTurno = async (req, res) => {
    const { id } = req.params;

    try {
          const turno = await Turno.findByPk(id);

          if (!turno) throw ({ status: 404, msg: 'No se encontró el turno'});
        
          await turno.destroy();

          res.json({
              turno
          });      
      } catch(err) {
          console.error(err);
          res.status(err.status || 500).send(err.msg || 'Error interno del servidor');
      }
}

const renderizarIndex = (req, res) => {
    res.render('index');
}

const renderizarCrear = (req, res) => {
    res.render('crear', { id: req.params.id });
}

const renderizarEditar = (req, res) => {
    res.render('editar', { id: req.params.id });
}

module.exports = {
    obtenerTurnos,
    obtenerTurno,
    crearTurno,
    actualizarTurno,
    eliminarTurno,
    renderizarCrear,
    renderizarEditar,
    renderizarIndex
}