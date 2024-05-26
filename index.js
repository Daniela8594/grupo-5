const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


const { leerPeliculas } = require('./src/trailerflix.controller');

const PORT = process.env.PORT || 3008;

let DB = [];

//MIDDLEWARE
dotenv.config();
app.use(bodyParser.json());

app.use((req, res, next) => {
    DB = leerPeliculas();
    next();
})

// RUTA RAIZ
app.get('/', (req, res) => {
    res.send('Bienvenidas a TRAILERFLIX - Grupo 5');
});

// RUTA /CATALOGO
app.get('/catalogo', (req, res) => {
    res.send(DB);
});

        //if (param !== '') {
         //   let result = [];
            
         //   titulo.forEach(p => {
           //   if(p.titulo.toLowerCase().includes(param)){
            //    result.push(p);
           //   }  
        //});

        //   result.length > 0 ? 
          // res.json(result) :
          // res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
     //  }
//});



    // RUTA /CATEGORIA/:CAT
    app.get('/categoria/:cat', (req, res) => {
        res.send('categoria');
    });

    // RUTA /REPARTO/:ACT
    app.get('/reparto/:act', (req, res) => {
        res.send('reparto');
    });

    // RUTA /TRAILER/:ID
    app.get('/trailer/:id', (req, res) => {
        res.send('trailer');
    });

    // RUTA PREDETERMINADA PARA MANEJAR RUTAS INEXISTENTES
    app.get('*', (req, res) => {
        res.status(404).send('Lo siento la pagina que buscas no existe');
    });

    // INICIA EL SERVIDOR
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });







