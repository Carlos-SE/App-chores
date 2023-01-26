# Elección de `test runner`
> Objetivo 4

## Criterios
Que tenga una buena librería de aserciones, que haya buena documentación y velocidad.

## Opciones
> Tras leer en varios foros y teniendo en cuenta las características del modelo, las siguientes son las opciones que tendremos en consideración pese a que haya muchas alternativas más.

### Mocha
* Hay muchas dudas resueltas en foros y extensa documentación.
* No incluye una librería de aserciones, por lo que habría que instalarla aparte.
* Es muy rápido, además de asíncrono.

### Jest
* Hay mucha documentación online y su manual es muy completo.
* Incluye una librería de aserciones.
* Es rápido y asíncrono como en el caso anterior.

### Jasmine
* Hay mucha documentación online y muchas dudas resueltas por la comunidad (esto tiene relación con que tiene más tiempo).
* Incluye una librería de aserciones pero no es tan completa como otras.
* Es menos rápido ya que no soporta ejecución paralela.

### Ava
* Hay menos documentación online y menos dudas resueltas porque no está tan extendido.
* Tiene su propia librería de aserciones `ava-assert`.
* Es rápido y asíncrono como en el caso anterior.

## Elección

Tras haber probado las valorado las cuatro opciones, nos llama la atención el funcionamiento de `Jest`, por ser más rápido, por la calidad de su manual y por incluir ya una libreria de aserciones bastante completa.

Debido a lo expuesto la decisión será utilizar `Jest`.
