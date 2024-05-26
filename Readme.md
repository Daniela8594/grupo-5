Vamos a crear una app para hacer consultas a un json de peliculas.

- Get para obtener todas las peliculas
- Get especifico para obtener por titulo

Vamos a usar
- Express
- Jsons
- FileSystems API
- Libreria dotenv
- Librería body-parser

# Instalacion
- npm i dotenv body-parser
- npm i express

# Estructura
- Carpeta src  
        - Carpeta database (contiene el archivo json)
        - Archivo con funciones que consume el archivo json (controladores)
-

# Pasos

- Creo package json
- Modifico el start 
- Creo env
- Creo archivo index.js
- Genero carpeta src
- Genero carpeta database
- Dentro de data base pego el json con todas las peliculas de trailerflix
- Genero archivo controlador: trailerflix.controller.js, con funciones para leer las peliculas




- Llamo a libreria dotenv
- Llamo a libreria body-parser
- Express que es nuestro framework (para trabajar el servidor)
- Genero la instancia del servidor
- Variable de entorno con puerto, si no lee la variable le da vlor 3008
- Genero variable DB para tener la base de datos, ya que trabajamos con un json


- Dentro del controlador: llamo a la libreria para leer las peliculas y defino funcion para leer las peliculas, transforma los datos para usar
 
- Se levanta MIDDLEWARE, dentro de el se coloca la funcion que lea y extraiga el contenido y que continue trabajando

- Defino const leerpeliculas en index.js




Se comienza a trabajar con las funciones:

- Se inicia servidor
- Funcion para manejar rutas inexistentes
- Metodo get generico para traer toda la informacion 

