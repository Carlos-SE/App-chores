# Elección del gestor de dependencias

Es una decisión primordial, ya que un gestor de dependencias adecuado nos permitirá un desarrollo lo más optimizado.
#### Aspectos a tener en cuenta:

* Documentación y comunidad
* Mantenimiento (Freshness)
* Velocidad
      
Las opciones principales que se han investigado son:

## `npm`

- Gestor por defecto y más usado (enfoque simple y estar bien documentado).
- Actualizaciones constantes.
- No destaca su velocidad

## `yarn`

- Hay una gran cantidad de foros y de documentación, además,  en su github tienen muchos `issues` (resueltos) con los que se pueden solventar errores y problemas frecuentes.
- Se mantiene de forma continua (`release` reciente y con nuevos commits en la rama principal de desarrollo), garantizando de momento unas condiciones fiables.
- Velocidad considerable (no supone un problema).

## `pnpm`

- Cuenta con muchos foros, guías y tutoriales, mucha documentación disponible.
- Muy veloz, iguala a `yarn` en este aspecto, llegando a superarlo en algunas situaciones según sus desarrolladoes.
- Mantenimiento constante.


## Decisión final

Después de ver estas alternativas, la duda está entre `yarn` y `pnpm`. Al tener una velocidad similar, este no será un factor decisivo, así que nos centraremos en las demás características.

Los dos gestores sirven de sobra para la funcionalidad requerida, `pnpm` tiene todavía más funcionalidades que no se van a aprovechar (`Monorepo`, etc.) así que vamos a elegir `Yarn`, de forma que nos ciñamos más a las medidas del proyecto.
