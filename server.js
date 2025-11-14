// server.js
const express = require('express');
const app = express();

app.use(express.json());

// Rutas de productos
app.use('/api/productos', require('./routes/productosRoutes'));

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
