const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/datos', (req, res) => {
  const { device_id, temperatura, humedad } = req.body;
  console.log(`Datos recibidos: ${device_id} - T: ${temperatura}, H: ${humedad}`);
  res.send('Datos recibidos');
});

app.get('/', (req, res) => {
  res.send('Servidor ESP32 online');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
