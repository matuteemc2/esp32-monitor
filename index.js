const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Ruta que recibe los datos del ESP32
app.post('/api/datos', (req, res) => {
  console.log("📦 Datos recibidos del ESP32:", req.body);
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando.');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
