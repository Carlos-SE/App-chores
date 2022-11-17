# Elección del gestor de dependencias

Es una decisión primordial, ya que un gestor de dependencias adecuado nos permitirá un desarrollo lo más optimizado.
#### Aspectos a tener en cuenta:

*  Facilidad de uso
*  Comunidad
* Mantenimiento (Freshness)
* Velocidad
* Funcionalidad
* Seguridad
      
Las opciones principales que se han investigado son:

## npm

Es el gestor de paquetes por defecto y es el que más se usa debido a esta razón. Es bueno para novatos y tiene buena comunidad y soporte.

El problema principal de este gestor es que suele generar errores por la compatibilidad entre versiones. No es determinista y permite que distintas versiones de paquetes se usen en distintas máquinas.

## Yarn

Yarn destaca por su enfoque en la velocidad y seguridad. Está basado en npm y arregla una parte de los principales errores que este genera.

Yarn es más rápido instalando paquetes que npm y también garantiza que se instalará la misma versión de los paquetes en distintas máquinas, eliminando las versiones que no correpondan a la seleccionada.

## pnpm

pnpm es muy fiable y optimiza el uso de disco. Sus desarrolladores afirman que es tan rápido como yarn o incluso superior en algunas situaciones.

pnpm es estricto en cuanto al acceso de dependencias, únicamente accediendo a las que se especifiquen en un archivo concreto (`package.json`).

Es monorepo, aunque en un principio no es el objetivo de este proyecto, pero es un atributo a valorar.

