# Imagen base para el contenedor

Ya que estamos en un proyecto basado en Node, la imagen debe estar diseñada para trabajar con esta herramienta o una imagen `bare-bone`, sobre la que podamos añadir las dependencias justas y necesarias.

## Criterios

1. Las alternativas deben tener un mantenimiento constante y que se pretenda mantener para no generar deuda técnica.
2. Es de principal importancia que el tamaño de la imagen sea el menor posible, ya que esto optimiza el espacio y por esto, el tiempo de carga y ejecución en sistemas automatizados.
3. Las imágenes base deben tener los requisitos lo más ajustado posible a los que el proyecto necesita. Esto es así ya que utilizar una imagen que contenga muchos paquetes software lo único que hará será generar deuda técnica ya que no se van a utilizar y van a aumentar el tamaño de la imagen sin que tenga un fin concreto.