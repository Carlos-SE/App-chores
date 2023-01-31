# Elección de `test runner`
> Objetivo 4

## Criterios
1. Freshness (Valoraremos esto con `snyk`)
2. Complejidad del `framework`.

## Opciones
> Tras leer en varios foros y teniendo en cuenta las características del modelo, las siguientes son las opciones que tendremos en consideración pese a que haya muchas alternativas más.

### Mocha
* Valoración de 89 puntos en [snyk](https://snyk.io/advisor/npm-package/mocha)
* No incluye librería de aserciones, así que está abierto a combinarse con cualquiera.

### Jest
* Valoración de 95 puntos en [snyk](https://snyk.io/advisor/npm-package/jest)
* Incluye su propia librería de aserciones, que no es demasiado extensa y cumple con los requisitos que se necesitan en este proyecto.

### Jasmine
* Valoración de 91 puntos en [snyk](https://snyk.io/advisor/npm-package/jasmine)
* Su librería de aserciones es un tanto excasa, de todas formas queda descartado por el primer criterio.

### Ava
* Valoración de 98 puntos en [snyk](https://snyk.io/advisor/npm-package/ava)
* Tiene su propia librería de aserciones `ava-assert`.

## Comparación de librerías de aserciones

De entre todas las librerías que he visto, sólo se siguen manteniendo `ava-assert`, con su último release hace 2 semanas y `Chai`. Ambas opciones son mucho más complejas (en cuanto a instrucciones) y completas, pero no incluyen nada que nos vaya a resultar útil que no incluya el framework de `Jest`.

También son remarcables los `matchers` por parte de `Jest` y `Jasmine`, que incluyen varios de estos métodos, los cuales son muy útiles para pasar los tests que se plantean en este proyecto. Los `matchers` de `Jest` incluyen más posibilidades de comparación que los de `Jasmine`.

## Elección

La valoración de `Freshness` que nos facilita *snyk*, es en todos los casos alta, destacando `ava` por encima de todos, pero en general tienen una buena valoración.

Tras haber valorado las cuatro opciones, seleccionaremos `Jest`, por incluir ya una libreria de aserciones bastante completa y con lo necesario para este proyecto, tener constantes actualizaciones y una buena valoración de freshness.

Debido a lo expuesto la decisión será **utilizar `Jest`**.
