const express = require('express');
const app = express();
const path = require('path');
const PORT=3030;

app.use(express.static(path.join(__dirname,'public')));

// RUTAS
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views', 'home.html')))


// servidor
app.listen(PORT, ()=>console.log(`server running in http://localhost:${PORT}`));