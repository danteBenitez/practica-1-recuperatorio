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
router.get('/', obtenerTurnos);
router.get('/:id', obtenerTurno);
router.put('/:id', actualizarTurno);
router.post('/', crearTurno);
router.delete('/:id', eliminarTurno);

module.exports = router;