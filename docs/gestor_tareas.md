# Elección del gestor de tareas

## Aspectos a tener en cuenta

* Facilidad de uso
* Comunidad
* Mantenimiento (Freshness)
* Velocidad

## Opciones consideradas

### Gulp

Gulp es un conjunto de herramientas que ayudar a automatizar el flujo de trabajo.

#### Ventajas:

* Es configurable con código JavaScript.
* Gulp permite escribir tareas individuales y componer operaciones más complejas con estas.
* Los `plugins` son simples y están diseñados de una forma atómica.

#### Inconvenientes:

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

### Make

No es posible hablar de gestores de tareas y no mencionar al gestor `make`. Lleva mucho más tiempo en uso que los demás, y en cuanto a gestor de tareas destaca mucho.

#### Ventajas

* Tiene su propio `pseudo-lenguaje` de progrogramación, con el cual se pueden comprobar condicionales, hacer bucles, declarar variables, etc. 
* No necesita `plugins`
* Es bastante rápido
* Tiene una comunidad mucho más grande que las demás alternativas
* Es el que tiene mejor mantenimiento (`Freshness`)
* Permite ejecutar comandos propios del sistema operativo de forma muy simple

## Decisión final

Tras la exposición de las distintas alternativas, destaca por encima de las demás `make`, siendo la que mejor apoyará el desarrollo de este proyecto
