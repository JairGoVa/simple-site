const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // Sirve la carpeta "public"

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});