# Elección de `test runner`
> Objetivo 4

## Criterios
Facilidad de instalación, velocidad.

## Opciones
> Tras leer en varios foros y teniendo en cuenta las características del modelo, las siguientes son las opciones que tendremos en consideración pese a que haya muchas alternativas más.

### Mocha
* Hay muchas dudas resueltas en foros y extensa documentación.
* Fácil de instalar, pero no incluye una librería de aserciones, por lo que habría que instalarla aparte.
* Es muy rápido, además de asíncrono.

### Jest
* Hay mucha documentación online y su manual es muy completo.
* Fácil de instalar, además, incluye una librería de aserciones.
* Es rápido y asíncrono como en el caso anterior.

### Jasmine
* Hay mucha documentación online y muchas dudas resueltas por la comunidad (esto tiene relación con que tiene más tiempo).
* Fácil de instalar y ajustar, pero la libreria de aserciones que incluye no es tan completa como `Chai`.
* Es menos rápido ya que no soporta ejecución paralela.

### Ava
* Hay menos documentación online y menos dudas resueltas porque no está tan extendido.
* Fácil de instalar y tiene su propia librería de aserciones `ava-assert`.
* Es rápido y asíncrono como en el caso anterior.

## Elección

Tras haber probado las dos opciones, nos llama la atención el funcionamiento de `Jest`, por ser más rápido, por la calidad de su manual, facilidad de uso y por incluir ya la libreria de aserciones.

Debido a lo expuesto la decisión será utilizar `Jest`.
