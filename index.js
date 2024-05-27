const dotenv = require ('dotenv');
const bodyParser = require ('body-parser');
const express = require ('express');
const app = express();
dotenv.config();

const { leerPeliculas, encontrarPeliculas } = require('./src/trailerflix.controller');

const PORT = process.env.PORT || 3008;

let DB = [];

//MIDDLEWARE

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

// Removedor de acentos y tildes
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

app.get("/categoria/:cat", (req, res) => {
  const categ = req.params.cat.trim().toLowerCase();
  const categoriaLimpia = removeAccents(categ);

  let filtrarCateg = DB.filter(
    (cate) => removeAccents(cate.categoria.toLowerCase()) === categoriaLimpia
  );

  if (categ === "serie" || categ === "película" || categ === "pelicula") {
    res.json(filtrarCateg);
  } else {
    res
      .status(404)
      .json({ id: "Error", descripcion: "No se encontraron coincidencias." });
  }
});

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

//RUTA TRAILER/:ID

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







