A partir de un set de datos en formato de aray de objetos, vamos a crear una API Rest para hacer consultas a un json de peliculas, respecto a la diferente información que contiene. El set de datos Trailerflix contiene información de películas y series, como ser:
- codigo
- titulo
- categoría
- reparto
- genero
- sinopsis
- trailer (URL con el link al video en Youtube)

Vamos a utilizar distintos métodos:
- Get para obtener todas las peliculas
- Get especifico para obtener por titulo

Tambien vamos a utilizar funciones de orden superior

Con toda esta información, vamos a crear diferentes Endpoint que permitan consultar los datos.

Debes crear la estructura básica de un servidor web utilizando Express JS. Incluye el archivo .ENV donde debes almacenar en una variable de entorno con la ruta parcial + nombre del archivo de datos JSON, además del puerto de ejecución del servidor web.

El archivo JSON debes guardarlo en una subcarpeta del proyecto llamada /database/
El número de puerto del servidor web debe ser 3008
Carga en una constante llamada TRAILERFLIX el contenido del archivo JSON en formato Array de objetos (usando fileSystem API + JSON.parse para obtener y transformar los datos)
Crea un contenido en formato texto de bienvenida para la ruta raíz del proyecto “/”. El mensaje a mostrar puede ser texto plano, o contenido HTML. (Mejor si es este último)

Con la estructura base del proyecto ya desarrollada, deberás crear los endpoints necesarios para listar el catálogo de películas y series por diferentes posibles búsquedas.

* Crea un endpoint llamado /catalogo que liste todo el contenido de trailerflix JSON. Se retorna todo el contenido del archivo.

* Crea un endpoint llamado /titulo/:title que liste el catálogo de películas y/o series que se aproxime al título enviado. (la búsqueda del nombre debe ser parcial). Para este endopint se utilizan rutas dinámicas, reciniendo como parámetro el título o parte de este, aplicando la función .filter(), el método includes() y toLowerCase() para normalizar la búsqueda.


* Crea un endpoint llamado /categoria/:cat que liste todo el contenido del archivo JSON de acuerdo a la categoría enviada como parámetro (serie o película)
* Crea un endpoint llamado /reparto/:act que liste el catálogo que incluya a la actriz o actor indicado por el nombre. (la búsqueda del nombre debe ser parcial)
* Crea un endpoint llamado /trailer/:id que retorne la URL del trailer de la película o serie. Si ésta no posee video asociado, que retorne un mensaje en formato JSON notificando la no disponibilidad del mismo.
⚙️ Recomendaciones:


Para el endpoint /categoria/:cat utiliza también .filter() y retorna todos los resultados encontrados. (Aquí son dos posibles valores solamente)
Para el endpoint /reparto/:act aplica también la misma lógica utilizada en el endpoint/titulo/:title. (Como resultado, retorna solo un array con la propiedad “reparto” y la propiedad “titulo” y sus respectivos datos (no devuelvas todo el contenido) ¿recuerdas a .map()?
Para el endpoint /trailer/:id debes retornar las propiedades “id”, “titulo”, “trailer”. (cuidado, porque no todas las películas/series poseen la propiedad tráiler, por lo tanto debes aplicar el operador de acceso condicional {objeto?.trailer})

Vamos a usar
- Express
- Jsons
- FileSystems API
- Libreria dotenv
- Librería body-parser
- Método next()

# Instalacion
- npm i dotenv body-parser
- npm i express

# Estructura
- Carpeta src  
        - Carpeta database (contiene el archivo json)
        - Archivo con funciones que consume el archivo json (controladores)
-Archivo index.js
-Archivo package.json
-Archivo package-lock.json

# Pasos

- Creo package json
- Modifico el start 
- Creo env
- Creo archivo index.js
- Genero carpeta src
- Genero carpeta database
- Dentro de data base pego el json con todas las peliculas de trailerflix
- Genero archivo controlador: trailerflix.controller.js, con funciones para leer las peliculas
- Creamos archivo .gitignore



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
- Método get especifico para titulo


