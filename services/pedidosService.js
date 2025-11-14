// services/pedidosService.js
// Aquí hago la lógica de negocio de los pedidos
const fs = require('fs');
const path = require('path');

// Rutas a los JSON
const rutaPedidos = path.join(__dirname, '../data/pedidos.json');
const rutaProductos = path.join(__dirname, '../data/productos.json');

// Función auxiliar para leer un JSON
function leerJSON(ruta) {
  const data = fs.readFileSync(ruta, 'utf-8');
  return JSON.parse(data);
}

// Esta función devuelve los pedidos con los productos “inyectados”
exports.listarConProductos = () => {
  const pedidos = leerJSON(rutaPedidos);
  const productos = leerJSON(rutaProductos);

  // Por cada pedido, cambio el array de ids por los objetos producto
  return pedidos.map(pedido => {
    const productosPedido = pedido.productos
      .map(idProd => productos.find(p => p.id === idProd))
      .filter(Boolean); // por si algún id no existe, lo filtramos

    return {
      ...pedido,
      productos: productosPedido
    };
  });
};
