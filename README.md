# Infinite-playlist

> Proyecto para la asignatura Infraestructura Virtual

## Problema

Encontrar música nueva que se ajuste a tus gustos es algo difícil. Para ello podríamos implementar un algoritmo de recomendación, basado en estilos, artistas, etc.


## ¿Propuesta de resolución en Cloud?

Para resolver este problema se puede montar un servidor con los archivos de música subidos, de forma que estén clasificados y un usuario pueda tener sus listas de música que le gusta y que el servidor le proponga sugerencias en tiempo real o que le amplíe las listas si el usuario lo desea.


## Clientes

Los clientes pueden ser tanto los usuarios que quieren descubrir música nueva y ampliar sus playlists, como las discográficas, que pueden beneficiarse de conocer qué estilos son los más escuchados y qué artistas son más populares.

También se podría proponer que las discográficas/artistas puedan promocionar sus canciones para que sean más recomendadas.

## Lógica de Negocio

La lógica de negocio consiste en un algoritmo que genere valores representando cómo de probable es que le guste una canción al usuario y se la recomiende a éste.

Los valores a tener en cuenta pueden variar, desde el estilo, época, artista, colaboraciones, incluso duración.
A esto se le puede añadir un campo de promoción según avance el desarrollo y se enfoque más a un cliente (discografías/artistas) u otro (gente que quiere descubrir música nueva).

## Comprobación de los archivos fuente

Se debe ejecutar el comando
```
make check
```

## Test-runner
Como se ha escogido `yarn` como gestor de dependencias, se tendrá que instalar antes de poder ejecutar el comando anterior. Para instalar este gestor de dependencias, podemos hacerlo con el comando:
```
make install
```

Se ha elegido `Jest`, la toma de decisión documentada se puede ver en [este fichero](./docs/test_runners.md).


Una vez tengamos esto ya podremos lanzar los `test`, ya sea desde consola con el comando `yarn test`. También se incluye dentro del fichero `Makefile` un comando para lanzar los tests: `make test`.

## Clases sobre las que se prueba la lógica de negocio
### Playlist
Esta clase, implementa una colección de canciones (PMV desarrollado en el objetivo 2). Esta clase, tiene un nombre que la identifica y los datos de las canciones que recopila, como pueden ser los géneros, que se pueden ordenar por número de ocurrencia, los artistas (ya sean colaboraciones o no) en formato `set` para que no sean redundantes.

La prueba a realizar consiste en comprobar si una sugerencia es acertada o no. Para ello en el test se ha creado una lista con tres canciones de un estilo similar y una de ellas con una colaboración. Primero comprobamos si una canción realizada por un artista que ha colaborado y es del género más escuchado de la lista es una buena sugerencia, que lo debería ser. Tras esto se recomienda otra que no comparte ni estilo más escuchado ni colaboración entre artistas, por lo cual debería ser una mala recomendación.

La recomendación se considera acertada si supera o igual el valor 50 (se obtiene por haber hecho una colaboración o por ser de un género muy escuchado en la lista), teniendo pesos distintas la colaboración o que el artista esté dentro de la lista y que el género de la recomendación sea más o menos frecuente. 

## Documentación adicional

* [Historias de Usuario](./docs/HistoriasUsuario.md)
* [Milestones](./docs/Milestones.md)
