# Imagen base para el contenedor

Ya que estamos en un proyecto basado en Node, la imagen debe estar diseñada para trabajar con esta herramienta o una imagen `bare-bone`, sobre la que podamos añadir las dependencias justas y necesarias.

## Criterios

1. Las alternativas deben tener un mantenimiento constante y que se pretenda mantener para no generar deuda técnica.
2. Es de principal importancia que el tamaño de la imagen sea el menor posible, ya que esto optimiza el espacio y por esto, el tiempo de carga y ejecución en sistemas automatizados.
3. Las imágenes base deben tener los requisitos lo más ajustado posible a los que el proyecto necesita. Esto es así ya que utilizar una imagen que contenga muchos paquetes software lo único que hará será generar deuda técnica ya que no se van a utilizar y van a aumentar el tamaño de la imagen sin que tenga un fin concreto.

## Opciones a considerar

Siguiendo las recomendaciones y buenas prácticas de Docker, es recomendable utilizar imágenes oficiales como base o en su defecto, imágenes que provengan de desarrolladores verficados. Teniendo esto en cuenta, comenzaremos revisando las posibilidades que nos facilita `Node` para usar como imágenes base para nuestro contenedor.

### node:current-bullseye
1. Tiene un mantenimiento constante y se diferencia de su versión `Long Term Support` en que esta emplea la última versión de `Node`.
2. Tiene un peso de 996 MB, lo cual es algo elevado.
3. Esta imagen contiene varias herramientas que no nos interesan, por esto tiene ocupa un tamaño algo elevado. Lo bueno que tiene es que herramientas necesarias como `yarn` ya vienen instaladas por defecto y esta es necesaria para el proyecto.

### node:current-bullseye-slim
1. Al igual que la imagen anterior, esta no está catalogada como `lts` pero esta imagen usa la última version de `Node`.
2. Tiene un peso de 244 MB, lo cual es bastante reducido, siendo una buena alternativa a tener en cuenta.
3. Esta imagen contiene muchas menos herramientas preinstaladas, debido a que esta versión de poco tamaño debe prescindir de ellas para no ocupar espacio innecesariamente. Al igual que en el caso anterior, `yarn` ya viene instalado por defecto así que no aumentaría el peso de la imagen por tener que descargarla.

### node:alpine
1. Esta imagen la mantiene el equipo de `Node` pero con menos actualizaciones y frecuencia que las opciones anteriores.
2. Tiene un peso de 178 MB, lo cual es bastante reducido.
3. Esta imagen **no** contiene muchas menos herramientas preinstaladas. Al igual que en el caso anterior, `yarn` ya viene instalado por defecto así que no aumentaría el peso de la imagen por tener que descargarla. Pero es al instalar todo lo demás cuando puede llegar a aumentar mucho de tamaño por dependencias que se generen.

### circleci/node
> Hay más imágenes similares de otras empresas o desarrolladores particulares pero esta es la que se mantiene mejor de las que he comparado y casi todas las que he investigado pecan de lo mismo, de incluir demasiados paquetes que no se van a llegar a utilizar en este proyecto.
1. Esta imagen está siendo mantenida por `CircleCI`. En su [repositorio de github](https://github.com/CircleCI-Public/cimg-node) se puede ver que hacen actualizaciones constantes de esta imagen.
2. Esta imagen pesa 898 MB, es bastante más elevado que las demás opciones.
3. Esta imagen contiene muchas tecnologías y paquetes que no vamos a usar, así que genera demasiada deuda técnica.

### Imágenes `bare-bone`
> Esta opción consiste en utilizar una imágen sin propósito específico, de un sistema operativo en particular dependiendo de la alternativa y sobre este ir añadiendo todas las dependencias necesarias para que se ajuste al proyecto en el que estamos trabajando. Se pueden llegar a considerar pero no están pensadas para trabajar con `Node` en concreto.  El problema de estas imágenes es que pese a normalmente poder encontrar versiones con tamaño muy reducido, hay que instalar muchos paquetes y el tamaño de la imagen aumenta tanto o más que otras imágenes como `node:alpine` o `node:lts-bullseye-slim` ya que no se han diseñado para optimizar las funcionalidades a este tipo de proyectos.

#### debian:bullseye-slim
1. Esta imagen, mantenida por el equipo de debian tiene un mantenimiento constante.
2. El peso de esta imagen es de unos 80MB en su estado base. Este valor aumentará al instalar los paquetes requeridos para ejecutar los tests. Con todos los paquetes instalados, el peso de esta imagen asciende a 314MB, incluyendo archivos necesarios.
3. Esta imagen no contiene paquetes innecesarios ya que contiene los justos para poder lanzar el sistema operativo y funcines básicas de este.

#### alpine:latest
1. Imagen mantenida por el equipo de alpine.
2. El peso base de esta imagen es ínfimo, con apenas 7MB. Con todos los paquetes necesarios instalados y los ficheros imprescindibles, su peso aumenta a 81MB, lo cual sigue siendo muy bajo.
3. Esta imagen no contiene casi nada instalado excepto lo más fundamental para el SO.

## Decisión

Basándonos en los criterios y objetivos, lo más recomendable será montar nuestra propia imagen en base a una imagen `bare-bone`, instalando lo que sea extrictamente necesario.

Debido al enfoque en tener el menor peso posible y ser más seguro por tener menos dependencias, la elección será utilizar `alpine:latest` como base para construir nuestra propia imagen.