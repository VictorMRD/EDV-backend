// --- IMPORTS Y CONFIGURACIÓN ---
var express = require('express');
var app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/edv-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error at trying to connect to MongoDB:', err));

// --- MIDDLEWARES ---
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- RUTAS APIs (si las necesitas) ---
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);

// --- ERROR 404 ---
app.use(function(req, res, next) {
  res.status(404).json({ error: true, message: 'Ruta no encontrada' });
});

// --- ERROR GENERAL ---
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'Error interno del servidor',
    stack: req.app.get('env') === 'development' ? err.stack : {}
  });
});

module.exports = app;
