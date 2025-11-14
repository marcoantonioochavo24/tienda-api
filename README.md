Autor: Marco Antonio Ochavo Fernández
Tienda API: Pequeña API REST hecha con Node.js y Express para una tienda online de ejemplo.
Forma parte de la actividad “Mi primera API Rest con JSON” de DWEC (2º DAW).

La API trabaja con datos guardados en ficheros JSON y está organizada en:

routes/ → rutas de Express
controllers/ → controladores (lo que responde a cada petición)
services/ → lógica de acceso a los JSON
data/ → ficheros .json con los datos de ejemplo

1. Requisitos: Node.js instalado. Gestor de paquetes npm. Algún cliente para probar la API: Postman, Thunder Client (VSCode), etc.

2. Cómo arrancar el proyecto: Clonar el repositorio o descargarlo. Abrir la carpeta tienda-api en VSCode. Instalar dependencias: npm install


Levantar el servidor: node server.js


La API queda escuchando en:

http://localhost:3000

3. Endpoints principales
Productos

GET /api/productos
Devuelve la lista completa de productos.
En la versión “enriquecida” cada producto incluye también el nombre de la categoría.

GET /api/productos/:id
Devuelve un producto por su id.

POST /api/productos
Crea un nuevo producto.
Body en JSON, por ejemplo:

{
  "nombre": "Auriculares inalámbricos",
  "precio": 59.99,
  "categoriaId": 2
}


PUT /api/productos/:id
Actualiza un producto existente.

DELETE /api/productos/:id
Elimina un producto por id.

Categorías

GET /api/categorias

GET /api/categorias/:id

POST /api/categorias

PUT /api/categorias/:id

DELETE /api/categorias/:id

Funcionan igual que en productos pero solo con el campo nombre.

Pedidos (datos relacionados)

Los pedidos están relacionados con productos mediante un array de ids.

GET /api/pedidos

Devuelve algo de este estilo:

[
  {
    "id": 1,
    "clienteId": 1,
    "total": 79.98,
    "productos": [
      { "id": 1, "nombre": "Teclado mecánico", "precio": 49.99 },
      { "id": 2, "nombre": "Ratón gamer", "precio": 29.99 }
    ]
  }
]


Aquí se hace un “join manual” entre data/pedidos.json y data/productos.json desde el service de pedidos.

4. Estructura de carpetas
tienda-api/
├─ server.js
├─ package.json
├─ routes/
│  ├─ productosRoutes.js
│  ├─ categoriasRoutes.js
│  └─ pedidosRoutes.js
├─ controllers/
│  ├─ productosController.js
│  ├─ categoriasController.js
│  └─ pedidosController.js
├─ services/
│  ├─ productosService.js
│  ├─ categoriasService.js
│  └─ pedidosService.js
└─ data/
   ├─ productos.json
   ├─ categorias.json
   ├─ clientes.json
   ├─ pedidos.json
   ├─ carritos.json
   └─ proveedores.json

5. Notas finales

- Los datos se guardan en los .json, no hay base de datos real detrás.
- El objetivo del proyecto es practicar:
- Rutas y controladores en Express
- Verbos HTTP (GET, POST, PUT, DELETE)
- Trabajo con JSON y relación entre entidades
