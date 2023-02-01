# Elección de `test runner`
> Objetivo 4

## Criterios
1. Freshness (Valoraremos esto con `snyk`).
2. Como de completo es el `framework` para satisfacer las necesidades del proyecto.

## Opciones
> Tras leer en varios foros y teniendo en cuenta las características del modelo, las siguientes son las opciones que tendremos en consideración pese a que haya muchas alternativas más.

Destacaremos `frameworks` centrados en *BDD* (Behavior Driven Development). Estos resultan más prácticos teniendo en cuneta la complejidad de las clases a testear, ya que facilitan la posibilidad de agrupar comprobaciones en subtests, lo cuál será necesario en nuestro proyecto. Estos frameworks suelen traer sus propias librerías de aserciones. Este tipo de enfoque nos permite describir el comportamiento esperado de una forma bastante entendible.

### Chai.js
* Valoración de 94 puntos en [snyk](https://snyk.io/advisor/npm-package/chai)
* Su librería de aserciones es muy similar a la librería `node assert`, pero facilitando un enfoque BDD.

### Must.js
* Valoración de 47 puntos en [snyk](https://snyk.io/advisor/npm-package/chai). Esto hace que se descarte de forma inmediata, debido a que su mantenimiento está inactivo.
* Su librería de aserciones sirve para cumplir con los requisitos actuales pero puede resultar un tanto limitada si estos aumentan de complejidad.

### Should.js
* Valoración de 53 puntos en [snyk](https://snyk.io/advisor/npm-package/should). Esto hace que se descarte de forma inmediata, debido a que su mantenimiento está inactivo y tiene una comunidad limitada.
* Su librería de aserciones es suficiente para las características de este proyecto, además de ser muy fácil añadir aserciones propias.

### Jest.js
* Valoración de 95 puntos en [snyk](https://snyk.io/advisor/npm-package/jest)
* Incluye su propia librería de aserciones, que no es demasiado extensa y cumple con los requisitos que se necesitan en este proyecto.

### Mocha.js
* Valoración de 89 puntos en [snyk](https://snyk.io/advisor/npm-package/mocha)
* No incluye librería de aserciones, así que está abierto a combinarse con cualquiera. Por lo que se podrán utilizar librerías de aserciones que se ajusten a las necesidades del proyecto.

### Jasmine
* Valoración de 91 puntos en [snyk](https://snyk.io/advisor/npm-package/jasmine)
* Su librería de aserciones es más reducida que otras alternativas, pero cumple con las necesidades del proyecto.

### Ava.js
> Este **NO** es BDD, pero no se puede menospreciar esta alternativa.
* Valoración de 98 puntos en [snyk](https://snyk.io/advisor/npm-package/ava)
* Tiene su propia librería de aserciones `ava-assert`, la cual tiene múltiples instrucciones y cumple con los requisitos del proyecto sobradamente. 

## Elección

De entre las opciones vistas destacan `Jest`, `Mocha`, `Jasmine` y `Chai` por ser las más populares. Esto hace que exista mucho contenido y problemas resueltos sobre estas alternativas en foros, lo cual es positivo para poder resolver futuros problemas derivados del test runner seleccionado.

`Jest` es el más popular de acuerdo a varios foros desde el año 2017. Este se basaba en `Jasmine` pero mejoraron muchas funcionalidades e incluyeron nuevas. También está preparado para usar sin tener que configurarlo, esto lo hace mucho más versatil que las demás alternativas. Además, al igual que `Jasmine`, no necesita que añadan `require`en los tests para que estos funcionen correctamente, ya que se hace de forma global con los tests. Este test runner se considera el más rápido para grandes proyectos con muchos archivos debido a su forma de implementar paralelismo en sus pruebas.

Por todas estas características, `Jest` es el que más nos ha llamado la atención. Destancando su portabilidad ya que no necesita configuración inicial y su expléndido mantenimiento de la mano de *Facebook*.