# Elección de `test runner`
> Objetivo 4

## Criterios
Es de principal importancia que la decisión se tome teniendo en cuenta los principios F.I.R.S.T.
* Fast
* Independent
* Repeatable
* Self-validating
* Timely

Así que todas las opciones que se tendrán en cuentra cumplirán como mínimo con estás características.

## Opciones
> Tras leer en varios foros y teniendo en cuenta las características del modelo, las siguientes son las opciones que tendremos en cosideración pese a que haya muchas alternativas más.

### Cypress
* Es asíncrono, lo que aumenta la velocidad
* Tiene una librería de aserciones muy popular ya incluida, llamada [Chai](https://docs.cypress.io/guides/references/assertions#Chai)
* Esta basado sobre **Mocha**
* Sencillo de aprender
* Puntuación muy alta en [snyk](https://snyk.io/advisor/npm-package/cypress), con `95/100`

### Mocha
* Asíncrono
* Es sencillo de utilizar
* Soporta todos los navegadores más utilizados
* Soporte para muchas librerias de aserciones (No tiene una propia incluida)
* Puntuación muy alta en [snyk](https://snyk.io/advisor/npm-package/mocha), con `95/100`

### Jest
* Es el más popular de las opciones a tener en cuenta
* Es asíncrono
* Buena documentación
* Puede requerir multiples dependencias durante el proceso de configuración incial
* Puntuación muy alta en [snyk](https://snyk.io/advisor/npm-package/jest), con `95/100`

## Elección

Tras analizar las distintas opciones, se va a escoger `Cypress` para los test de esta aplicación. Esto se debe a su masivo crecimiento, escalabilidad y facilidad de uso.
