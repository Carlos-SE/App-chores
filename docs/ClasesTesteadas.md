# Clases sobre las que se prueba la lógica de negocio

## Playlist

Esta clase, implementa una colección de canciones (PMV desarrollado en el objetivo 2). Esta clase, tiene un nombre que la identifica y los datos de las canciones que recopila, como pueden ser los géneros, que se pueden ordenar por número de ocurrencia, los artistas (ya sean colaboraciones o no) en formato `set` para que no sean redundantes.

La prueba a realizar consiste en comprobar si una sugerencia es acertada o no. Para ello en el test se ha creado una lista con tres canciones de un estilo similar y una de ellas con una colaboración. Primero comprobamos si una canción realizada por un artista que ha colaborado y es del género más escuchado de la lista es una buena sugerencia, que lo debería ser. Tras esto se recomienda otra que no comparte ni estilo más escuchado ni colaboración entre artistas, por lo cual debería ser una mala recomendación.

La recomendación se considera acertada si supera o igual el valor 50 (se obtiene por haber hecho una colaboración o por ser de un género muy escuchado en la lista), teniendo pesos distintas la colaboración o que el artista esté dentro de la lista y que el género de la recomendación sea más o menos frecuente. 