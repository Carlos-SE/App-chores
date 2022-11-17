# Elección del gestor de tareas
> Los gestores de tareas o task runners son herramientas que falicitan la automatización de tareas. Para escoger el gestor de tareas, tenemos que hacer una selección entre varias alternativas.

## Aspectos a tener en cuenta

* Facilidad de uso
* Comunidad
* Mantenimiento (Freshness)
* Velocidad
* Funcionalidad
* Seguridad

## Opciones consideradas

### Gulp

Gulp es un conjunto de herramientas que ayudar a automatizar el flujo de trabajo.

#### Ventajas:

* Es configurable con código JavaScript.
* Gulp permite escribir tareas individuales y componer operaciones más complejas con estas.
* Los `plugins` son simples y están diseñados de una forma atómica.

#### Inconvenientes:

* Necesita `plugins`
* Llevan más de un año sin actualizar la rama principal en [su repositorio](https://github.com/gulpjs/gulp)

### Grunt

Grunt es otro gestor de tareas, del que podemos destacar las siguientes características:

#### Ventajas:

* Permite la automatización de tareas con un esfuerzo mínimo, editando un archivo de configuración.
* Es muy flexible.
* Es de código abierto
* Tiene una buena comunidad
* Robusto

#### Inconvenientes:

* Lento
* Necesita `plugins`

### Yarn

Yarn destaca por su reputación en cuanto a seguridad y rapidez. ¿Cuáles son sus ventajas y desventajas?

#### Ventajas

* Yarn puede ejecutar las tareas de forma paralela para que sea más rápido y eficiente.
* Yarn también incluye un instalador de paquetes de `NodeJS` (`npm`) y mejora la funcionalidad del mismo.
* Es muy seguro, es uno de sus aspectos principales

#### Inconvenientes

* No optimiza el uso de memoria, tiene archivos `lock` que hacen que sea muy seguro a coste de aumentar el peso del proyecto.


### Make

No es posible hablar de gestores de tareas y no mencionar al gestor `make`. Lleva mucho más tiempo en uso que los demás, y en cuanto a gestor de tareas destaca mucho.

#### Ventajas

* Tiene su propio `pseudo-lenguaje` de progrogramación, con el cual se pueden comprobar condicionales, hacer bucles, declarar variables, etc. 
* No necesita `plugins`
* Es bastante rápido
* Tiene una comunidad mucho más grande que las demás alternativas
* Es el que tiene mejor mantenimiento (`Freshness`)
* Permite ejecutar comandos propios del sistema operativo de forma muy simple



## Decisión

Tras todo lo comentado, destaca `make` por encima del resto y es la opción que mejor rendimiento puede dar en este proyecto.
