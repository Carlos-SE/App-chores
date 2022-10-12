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

## Documentación adicional

* [Historias de Usuario](./docs/HistoriasUsuario.md)
* [Milestones](./docs/Milestones.md)
