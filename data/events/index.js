'use strict';

const utils =require('../utils');
const config =require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const list = await pool.request().query(sqlQueries.eventslist);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

const getById = async (citaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const oneEvent = await pool.request()
                        .input('citaId', sql.Int, citaId)
                        .query(sqlQueries.eventbyId);
        return oneEvent.recordset;
        
    } catch (error) {
        return error.message;
    }
}

const createEvent = async (eventData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const InsertEvent = await pool.request()
                            .input('tipoCita', sql.NVarChar(100), eventData.tipoCita)
                            .input('descripcionCita', sql.NVarChar(1000), eventData.descripcionCita)
                            .input('fechainicioCita', sql.Date, eventData.fechainicioCita)
                            .input('fechafinCita', sql.Date, eventData.fechafinCita)
                            .input('direccion', sql.NVarChar(200), eventData.direccion)
                            .input('numeroEspecialidad', sql.NVarChar, eventData.numeroEspecialidad)
                            .query(sqlQueries.createEvent);
        return InsertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEvent = async (citaId, eventData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const update = await pool.request()
                        .input('citaId', sql.Int, citaId)
                        .input('tipoCita', sql.NVarChar(100), eventData.tipoCita)
                        .input('descripcionCita', sql.NVarChar(1000), eventData.descripcionCita)
                        .input('fechainicioCita', sql.Date, eventData.fechainicioCita)
                        .input('fechafinCita', sql.Date, eventData.fechafinCita)
                        .input('direccion', sql.NVarChar(200), eventData.direccion)
                        .input('numeroEspecialidad', sql.NVarChar, eventData.numeroEspecialidad)
                        .query(sqlQueries.updateEvent); 
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (citaId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSQLQueries('events');
        const deleted = await pool.request()
                        .input('citaId', sql.Int, citaId)
                        .query(sqlQueries.deleteEvent);
        return deleted.recordset;
        
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getEvents,
    getById,
    createEvent,
    updateEvent,
    deleteEvent
}