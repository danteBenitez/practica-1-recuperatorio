const { DataTypes, sequelize } = require('../db');

const Turno = sequelize.define('turno',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false,
    },
    fecha_turno: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    nombre_paciente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dni_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefono_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

Turno.sync({ force: true });
