const http = require('http');

const hostname = '0.0.0.0'; // Escucha en todas las interfaces de red disponibles
const port = process.env.PORT || 3000; // Usa el puerto que AWS asigne o 3000 por defecto

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // Especifica HTML y UTF-8
  // Una página HTML simple
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mi Página Simple en AWS</title>
        <style>
          body { font-family: sans-serif; text-align: center; padding-top: 50px; }
          h1 { color: #333; }
        </style>
      </head>
      <body>
        <h1>¡Bienvenido a mi Página Web Simple!</h1>
        <p>Esta página está siendo servida por Node.js en AWS.</p>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});