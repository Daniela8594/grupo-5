const dotenv = require ('dotenv');
const bodyParser = require ('body-parser');
const express = require ('express');
const app = express();


const { leerPeliculas, encontrarPeliculas } = require('./src/trailerflix.controller');

const PORT = process.env.PORT || 3008;

let DB = [];

//MIDDLEWARE
dotenv.config();
app.use (bodyParser.json());

app.use ((req,res,next) => {
    DB = leerPeliculas();
    next();
})

// RUTA RAIZ
app.get ('/', (req, res) => {
    res.send('Bienvenidas a TRAILERFLIX - Grupo 5');
});

// RUTA /CATALOGO
app.get ('/catalogo', (req, res) => {
    res.send(DB);
});

// RUTA /TITULO/:TITLE
app.get ('/titulo/:title', (req, res) => {
        const param = req.params.title.trim().toLowerCase();
       
        const pelis = encontrarPeliculas(param);
        //console.log(pelis)
        pelis!=''?
        res.send(pelis) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron peliculas con ese nombre.' });
     
    });        


// RUTA /CATEGORIA/:CAT
//app.get ('/categoria/:cat', (req, res) => {

   // let param = req.params.cat.trim().toLowerCase();
        //console.log(param)
      //  const catego = encontrarPorCategoria(param);
       // catego!=undefined ?
        //res.json(pelis) :
        //res.status(404).json({ id: 'Error', descripcion: 'No se encontraron peliculas con ese nombre.' });
     
    //res.send('categoria');
//});

// RUTA /REPARTO/:ACT
app.get('/reparto/:act', (req, res) => {
  let parametro = req.params.act.trim().toLowerCase();
  if (parametro !== '') {
      let resultado = [];
      for (let pelicula of DB) {
          if (pelicula.reparto && pelicula.reparto.toLowerCase().includes(parametro)) {
              resultado.push(pelicula);
          }
      }
      resultado.length > 0 ?
          res.json(resultado) :
          res.status(404).json({ id: 'Error', descripcion: 'No se encontraron películas con ese actor.' });
  } else {
      res.status(400).json({ id: 'Error', descripcion: 'El parámetro no puede estar vacío.' });
  }
});



app.get("/trailer/:id", (req, res) => {
    let codigo = parseInt(req.params.id);
  
    if (typeof codigo === "number") {
      const found = DB.find((element) => element.id == codigo);
  
      found?.trailer
        ? res.send(
            "ID:" +
              found.id +
              " Titulo: " +
              found.titulo +
              " Link al trailer:" +
              found.trailer
          )
        : res.status(404).json({
            id: "Error",
            descripcion:
              "El trailer de la pelicula con id = " +
              codigo +
              " no se encuentra disponible",
          });
    }
  });
  
  app.get("*", (req, res) => {
    res.json({
      error: "404",
      message: "No se encuentra la ruta o recurso solicitado",
    });
  });

// RUTA PREDETERMINADA PARA MANEJAR RUTAS INEXISTENTES
app.get ('*', (req, res) => {
    res.status(404).send('Lo siento la pagina que buscas no existe');
});

// INICIA EL SERVIDOR
app. listen(PORT, () =>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});







