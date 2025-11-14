const express = require('express');
const app = express();

app.use(express.json());

// Rutas
app.use('/api/productos', require('./routes/productosRoutes'));
app.use('/api/categorias', require('./routes/categoriasRoutes'));
app.use('/api/pedidos', require('./routes/pedidosRoutes')); // 👈 Asegúrate de tener esta línea

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
