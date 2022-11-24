# Elección del gestor de dependencias

Es una decisión primordial, ya que un gestor de dependencias adecuado nos permitirá un desarrollo lo más optimizado.
#### Aspectos a tener en cuenta:

*  Facilidad de uso
*  Comunidad
* Mantenimiento (Freshness)
* Velocidad
* Funcionalidad
      
Las opciones principales que se han investigado son:

## npm

- Gestor por defecto y más usado (mayor comunidad, y facilidad de uso por ser simple y estar bien documentado).
- Actualizaciones constantes.
- Errores con la compatibilidad entre versiones. No es determinista y permite que distintas versiones de paquetes se usen en distintas máquinas.
- Funcionalidad básica de gestor de dependencias.
- No destaca su velocidad

## Yarn

- Tiene una comunidad muy activa y en su github tienen muchos `issues` con los que se pueden solventar errores y problemas frecuentes.
- Se mantiene de forma continua, garantizando de momento unas condiciones fiables.
- Muy veloz y seguro (se hizo pensando en estas características)
- Arregla los principales errores y fallos que se daban en `npm`
- Funcionalidad básica y añadidos como la garantía de instalación de las mismas versiones en distintas máquinas y eliminación de versiones que no corresponden

## pnpm

- Comunidad grande, cuenta con muchos foros, guías y tutoriales
- Muy veloz, iguala a `yarn` en este aspecto, llegando a superarlo en algunas situaciones según sus desarrolladoes.
- Mantenimiento constante.
- Funcionalidades básicas y añadidos como optimización de uso de disco y posibilidad de `monorepo`


## Decisión final

Después de ver estas alternativas, la duda está entre `yarn` y `pnpm`. Al tener una velocidad similar, este no será un factor decisivo, así que nos centraremos en las demás características.

La seguridad que brinda Yarn es mejor que la de pnpm y la ventaja que pnpm tiene para evitar la redundancia de ficheros de las librerias, no es tan importante ya que en principio este proyecto va a ser de un único módulo y no se va a aprovechar esa ventaja.
