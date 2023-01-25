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

## Elección e instalación del gestor de órdenes

Usaremos `make` como gestor de tareas, este se puede encontrar en la mayoría de repositorios de linux. En caso de estar en una distribución de `arch` como es mi caso, se puede instalar con el comando:
```
pacman -S make
```

Para obtener más información acerca de la elección de este gestor de tareas, se puede leer [este fichero](https://github.com/Carlos-SE/App-chores/blob/Objetivo-4/docs/gestor_tareas.md), en el cual se detellan características y ventajas de utilizar esta opción.

## Elección e instalación del gestor de dependencias

Como gestor de dependencias, se ha escogido `yarn`. Este nos facilita mantener actualizadas las dependencias de nuestro repositorio de forma simple y continuada. Para obtener más información acerca de la elección de este gestor de dependencias, se recomienda la lectura de [este fichero](https://github.com/Carlos-SE/App-chores/blob/Objetivo-4/docs/gestor_dependencias.md).

Para instalarlo, teniendo el gestor de tareas, visto en la sección anterior, podemos ejecutar este comando:
```
make install
```

## Comprobación de los archivos fuente

Se debe ejecutar el comando
```
make check
```

## Elección y funcionamiento del test-runner

Se ha elegido `Jest` entre varias alternativas para cumplir esta función, la toma de decisión documentada se puede ver en [este fichero](./docs/test_runners.md).


Una vez tengamos esto ya podremos lanzar los `test`, desde consola con el comando `yarn test`. También se incluye dentro del fichero `Makefile` un comando para lanzar los tests: `make test`. Para poder hacer esto, hace falta tener instalados correctamente los gestores vistos en secciones anteriores a esta.


## Documentación adicional

* [Historias de Usuario](./docs/HistoriasUsuario.md)
* [Milestones](./docs/Milestones.md)
* [Clases sobre las que se testea la lógica de negocio](./docs/ClasesTesteadas.md)