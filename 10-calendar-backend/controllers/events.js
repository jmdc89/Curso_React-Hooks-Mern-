const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async( req, res = response ) => {

    const eventos = await Evento.find()
                                .populate('user','name');

    res.json({
        ok: true,
        eventos
    });
}