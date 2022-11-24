# Elección del gestor de dependencias

Es una decisión primordial, ya que un gestor de dependencias adecuado nos permitirá un desarrollo lo más optimizado.
#### Aspectos a tener en cuenta:

*  Comunidad
* Mantenimiento (Freshness)
* Velocidad
      
Las opciones principales que se han investigado son:

## NPM

- Gestor por defecto y más usado (mayor comunidad, enfoque simple y estar bien documentado).
- Actualizaciones constantes.
- Funcionalidad básica de gestor de dependencias.
- No destaca su velocidad

## YARN

- Tiene una comunidad muy activa y en su github tienen muchos `issues` con los que se pueden solventar errores y problemas frecuentes.
- Se mantiene de forma continua (`release` reciente y con nuevos commits en la rama principal de desarrollo), garantizando de momento unas condiciones fiables.
- Muy veloz y seguro (se hizo pensando en estas características)

## PNPM

- Comunidad grande, cuenta con muchos foros, guías y tutoriales
- Muy veloz, iguala a `yarn` en este aspecto, llegando a superarlo en algunas situaciones según sus desarrolladoes.
- Mantenimiento constante.


## Decisión final

Después de ver estas alternativas, la duda está entre `yarn` y `pnpm`. Al tener una velocidad similar, este no será un factor decisivo, así que nos centraremos en las demás características.

La seguridad que brinda Yarn es mejor que la de pnpm y la ventaja que pnpm tiene para evitar la redundancia de ficheros de las librerias, no es tan importante ya que en principio este proyecto va a ser de un único módulo y no se va a aprovechar esa ventaja.
