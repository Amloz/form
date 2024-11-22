const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el formulario
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/registro', (req, res) => {
    const { nombre, edad, correo, curso } = req.body;

    
    if (!nombre || !edad || !correo || !curso) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    
    res.send(`
        <h1>Registro Confirmado</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Curso Seleccionado:</strong> ${curso}</p>
        <a href="/">Volver al formulario</a>
    `);
});

// Inicio servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});