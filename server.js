// server.js
const express = require('express');
const app = express();

app.use(express.json());

// Importar rutas
app.use('/api/productos', require('./routes/productosRoutes'));
app.use('/api/categorias', require('./routes/categoriasRoutes')); // ← NUEVA LÍNEA

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
