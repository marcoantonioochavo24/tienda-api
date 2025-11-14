// controllers/productosController.js
const productosService = require('../services/productosService');

exports.obtenerTodos = (req, res) => {
  // ahora usamos la función que ya añade la categoría
  const productos = productosService.listarConCategorias();
  res.json(productos);
};

exports.obtenerPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productosService.buscarPorId(id);
  producto ? res.json(producto) : res.status(404).json({ mensaje: 'No encontrado' });
};

//   POST con validación básica
exports.crear = (req, res) => {
  const { nombre, precio, categoriaId } = req.body;

  // Comprobamos que los campos básicos llegan
  if (!nombre || precio == null || !categoriaId) {
    return res
      .status(400)
      .json({ mensaje: 'Faltan campos obligatorios: nombre, precio y categoriaId' });
  }

  // (Opcional) validar tipo de datos muy básico
  if (typeof nombre !== 'string' || isNaN(precio)) {
    return res
      .status(400)
      .json({ mensaje: 'Tipo de datos no válido en nombre o precio' });
  }

  const nuevo = productosService.crear(req.body);
  res.status(201).json(nuevo);
};

exports.actualizar = (req, res) => {
  const id = parseInt(req.params.id);
  const actualizado = productosService.actualizar(id, req.body);
  actualizado ? res.json(actualizado) : res.status(404).json({ mensaje: 'No encontrado' });
};

exports.eliminar = (req, res) => {
  const id = parseInt(req.params.id);
  const eliminado = productosService.eliminar(id);
  eliminado ? res.json(eliminado) : res.status(404).json({ mensaje: 'No encontrado' });
};
