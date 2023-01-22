# Elección de `test runner`
> Objetivo 4

## Criterios
Es de principal importancia que la decisión se tome teniendo en cuenta los principios F.I.R.S.T.
* Fast
* Independent
* Repeatable
* Self-validating
* Timely

Así que todas las opciones que se tendrán en cuenta cumplirán como mínimo con estás características.

## Opciones
> Tras leer en varios foros y teniendo en cuenta las características del modelo, las siguientes son las opciones que tendremos en cosideración pese a que haya muchas alternativas más.

### Mocha
* `Fast`: Mocha es un test runner rápido, ya que no tiene una gran cantidad de características adicionales que podrían ralentizar su ejecución.
* `Independent`: Mocha permite ejecutar pruebas de manera independiente, lo que significa que las pruebas no dependen entre sí. Esto permite ejecutar pruebas individuales y obtener resultados precisos.
* `Repeatable`: Mocha permite configurar las pruebas de manera que se puedan repetir varias veces y obtener resultados consistentes.
* `Self-validating`: Mocha proporciona una interfaz fácil de usar para escribir pruebas automatizadas que son auto-validables.
* `Timely`: Mocha tiene soporte para ejecutar pruebas en paralelo, lo que permite ejecutar pruebas de manera oportuna y reducir el tiempo de espera.

### Jest
* `Fast`: Jest es otro test runner rápido, ya que utiliza caché de módulos y otras técnicas para acelerar la ejecución de pruebas.
* `Independent`: Jest también permite ejecutar pruebas de manera independiente, lo que significa que las pruebas no dependen entre sí. Esto permite ejecutar pruebas individuales y obtener resultados precisos.
* `Repeatable`: Jest proporciona una interfaz intuitiva para configurar y ejecutar pruebas, lo que garantiza que las pruebas sean repetibles.
* `Self-validating`: Jest incluye una variedad de matchers (coincidencias) incorporados que se pueden utilizar para escribir pruebas auto-validables.
* `Timely`: Jest permite ejecutar pruebas en paralelo mediante la opción --runInBand, lo que permite ejecutar pruebas de manera oportuna y reducir el tiempo de espera.

## Elección

Tras haber probado las dos opciones, nos llama la atención el funcionamiento de `Jest`, por ser más rápido, por la calidad de su manual, facilidad de uso y por incluir ya la libreria de aserciones.

Debido a lo expuesto la decisión será utilizar `Jest`.
