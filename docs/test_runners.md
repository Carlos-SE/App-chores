# Elección de `test runner`
> Objetivo 4

## Objetivos
* Poder ejecutar tests sin generar deuda técnica. Las alternativas que se barajen deben estar mantenidas correctamente.
* Se deben ajustar a los requisitos del proyecto a la hora de pasar los tests.
* Integración sencilla en el proyecto, de forma que no haya que configurar el test runner para que sea funcional.

## Criterios
1. Freshness (Valoraremos esto con `snyk`).
2. Inclusión de su propia biblioteca de aserciones o no.

## Opciones
> Tras leer en varios foros y teniendo en cuenta las características del modelo, las siguientes son las opciones que tendremos en consideración pese a que haya muchas alternativas más.

### Jest.js
* Valoración de 95 puntos en [snyk](https://snyk.io/advisor/npm-package/jest)
* Incluye su propia librería de aserciones, que no es demasiado extensa y cumple con los requisitos que se necesitan en este proyecto.
* Jest es un test runner y librería de aserciones desarrollada por Facebook. Ofrece una integración fácil y es altamente eficiente en la ejecución de pruebas. También está ampliamente documentada y es mantenida activamente.

### Mocha.js
* Valoración de 89 puntos en [snyk](https://snyk.io/advisor/npm-package/mocha)
* No incluye librería de aserciones, así que está abierto a combinarse con cualquiera. Por lo que se podrán utilizar librerías de aserciones que se ajusten a las necesidades del proyecto.
* Mocha es un popular test runner que se integra fácilmente con una amplia variedad de librerías de aserciones, incluidas Chai, Should y Must. Mocha es mantenido activamente y ampliamente documentado.

### Jasmine
* Valoración de 91 puntos en [snyk](https://snyk.io/advisor/npm-package/jasmine)
* Su librería de aserciones es más reducida que otras alternativas, pero cumple con las necesidades del proyecto.
* Jasmine es tanto un test runner como una librería de aserciones. Es fácil de usar y se integra fácilmente con el proyecto. Está ampliamente documentado y es mantenido activamente.

### Ava.js
* Valoración de 98 puntos en [snyk](https://snyk.io/advisor/npm-package/ava)
* Tiene su propia librería de aserciones `ava-assert`, pero se puede convinar con otras librerías de aserciones.
* Ava es un test runner minimalista y eficiente que se integra fácilmente con la mayoría de las librerías de aserciones. Ava es mantenido activamente y ampliamente documentado.

## Elección

De entre las opciones vistas destacan `Jest`, `Mocha`, `Jasmine` y `Chai` por ser las más populares. Esto hace que exista mucho contenido y problemas resueltos sobre estas alternativas en foros, lo cual es positivo para poder resolver futuros problemas derivados del test runner seleccionado.

En base a los criterios y objetivos especificados, Jest y Mocha destacan sobre los demás, ya que ofrecen una integración sencilla en el proyecto, son mantenidos activamente y tienen una amplia documentación y comunidad. Ambas alternativas también cumplen con los requisitos del proyecto y no generarían deuda técnica. 

`Jest` es el más popular de acuerdo a varios foros desde el año 2017. Este se basaba en `Jasmine` pero mejoraron muchas funcionalidades e incluyeron nuevas. También está preparado para usar sin tener que configurarlo, esto lo hace mucho más versatil que las demás alternativas. Además, al igual que `Jasmine`, no necesita que añadan `require`en los tests para que estos funcionen correctamente, ya que se hace de forma global con los tests. Este test runner se considera el más rápido para grandes proyectos con muchos archivos debido a su forma de implementar paralelismo en sus pruebas.

`Mocha` es una alternativa popular en la comunidad de Node.js y es ampliamente utilizado en muchos proyectos. Tiene una gran flexibilidad en cuanto a la configuración y permite una gran cantidad de opciones para ajustarse a las necesidades del proyecto. Además, cuenta con una amplia documentación y una gran cantidad de *plugins* disponibles para mejorar su funcionamiento. `Mocha` es conocido por su capacidad para manejar grandes proyectos y ofrecer una gran cantidad de opciones de *reporting*. Aunque no es tan rápido como `Jest` en la ejecución de pruebas, es una alternativa sólida y confiable.

Debido a que con `Mocha` podemos utilizar la biblioteca de aserciones que queramos, elegiremos esta, ya que nos permite combinarla con `Chai`, la cuál es una excelente opción para este proyecto.