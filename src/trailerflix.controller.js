const fs = require ('fs');

function leerPeliculas() {
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8');
    const PELICULAS = JSON.parse(datos)
    return PELICULAS
}

function encontrarPeliculas(title) {
    DB = leerPeliculas(); 
    console.log(DB)
    const result = DB.filter(DB => DB.titulo.trim().toLowerCase().includes(title)) 
    return result
  
   
}
module.exports = {leerPeliculas, encontrarPeliculas}