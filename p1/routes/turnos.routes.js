const { Router } = require('express');
const {
    renderizarIndex,
    renderizarCrear,
    renderizarEditar,
    obtenerTurnos,
    obtenerTurno,
    eliminarTurno,
    actualizarTurno,
    crearTurno
} = require('../controllers/turno.controllers');

const router = Router();

// Rutas de renderización
router.get('/', renderizarIndex);

router.get('/editar', renderizarEditar);
router.get('/crear', renderizarCrear);

// Rutas de API
router.get('/api/', obtenerTurnos);
router.get('/api/:id', obtenerTurno);
router.put('/api/:id', actualizarTurno);
router.post('/api/', crearTurno);
router.delete('/api/:id', eliminarTurno);

module.exports = router;