// controllers/pedidosController.js

const pedidosService = require('../services/pedidosService');

exports.obtenerTodos = (req, res) => {
  const pedidos = pedidosService.listarConProductos();
  res.json(pedidos);
};
