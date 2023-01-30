# Elección de `test runner`
> Objetivo 4

## Criterios
Debe ser asíncrono para ahorrar tiempo ejecutando tests y complejidad del `framework`.

## Opciones
> Tras leer en varios foros y teniendo en cuenta las características del modelo, las siguientes son las opciones que tendremos en consideración pese a que haya muchas alternativas más.

### Mocha
* Es asíncrono.
* No incluye librería de aserciones, así que está abierto a combinarse con cualquiera.

### Jest
* Es asíncrono.
* Incluye su propia librería de aserciones, que no es demasiado extensa y cumple con los requisitos que se necesitan en este proyecto.

### Jasmine
* No es asíncrono
* Su librería de aserciones es un tanto excasa, de todas formas queda descartado por el primer criterio.

### Ava
* Es asíncrono.
* Tiene su propia librería de aserciones `ava-assert`.

## Comparación de librerías de aserciones

De entre todas las librerías que he visto, sólo se siguen manteniendo `ava-assert`, con su último release hace 2 semanas y `Chai`. Ambas opciones con mucho más complejas (en cuanto a instrucciones) y completas, pero no incluyen nada que nos vaya a resultar útil que no incluya el framework de `Jest`.

## Elección

Tras haber probado las valorado las cuatro opciones, nos llama la atención el funcionamiento de `Jest`, por ser asíncrono y por incluir ya una libreria de aserciones bastante completa.

Debido a lo expuesto la decisión será utilizar `Jest`.
