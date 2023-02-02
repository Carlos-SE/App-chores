# Biblioteca de aserciones

## Criterios
* Los estilos que permita, siendo preferente los BDD ya que son más fáciles de leer y escribir y permiten que nos enfoquemos en hacer buenos tests sin tener que estar buscando instrucciones complicadas y poco intuitivas.
* `Freshness` y comunidad de la biblioteca basado en la valoración de *snyk*.

## Opciones

### ava:assert
Es una librería de aserciones que soporta tanto estilos BDD como TDD. Sin embargo, no es tan utilizada como otras alternativas y la comunidad de desarrollo no es muy grande. Tiene una puntuación bajísima, de 40 sobre 100, por esto se descarta inmediatamente.

### node:test
Es una librería de aserciones integrada en Node.js que solo soporta estilos TDD. No es tan popular como otras opciones y puede que no tenga todas las funcionalidades que un proyecto necesite. Tiene una puntuación de 66 sobre 100, es baja debido a que no tiene mantenimiento pese a tener bastante reconocimiento entre la comunidad.

### chai
Es una librería de aserciones muy versátil que soporta tanto estilos BDD como TDD. Es una de las alternativas más populares y con una comunidad de desarrollo activa. Tiene una valoración de 100 sobre 100.

### should.js
Es una librería de aserciones que soporta estilos BDD. Es menos conocida y utilizada que otras opciones, pero todavía cuenta con una comunidad de desarrollo activa. Tiene una valoración de 58 sobre 100, muy bajo.

### expect.js
Es una librería de aserciones que soporta estilos BDD. No es tan popular como otras alternativas, pero todavía cuenta con una comunidad de desarrollo activa. Tiene una valoracion de 95 sobre 100.


## Elección de la librería de aserciones
De todas estas bibliotecas, *chai* es la que más no llama la atención ya que es la que cumple con ambos requisitos y tiene mejor calificación en  `freshness` y comunidad, en caso de utilizar un test runner con el que sea compatible se utilizará esta biblioteca.