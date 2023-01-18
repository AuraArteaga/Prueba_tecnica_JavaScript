# Prueba_tecnica_JavaScript
Test on JavaScript

1.	What is the difference between let and var in JavaScript?

Let: Es una instrucción o una palabra reservada que nos permite declarar una variable en JavaScript, la principal característica de let es que tiene un alcance de bloque, eso significa que solo pueden ser accedida dentro del bloque en el que fue declarada. 
Var: Sirve para poder acceder a variables desde cualquier parte de una función o archivo, var se recomienda como una variable global. 

La diferencia entre let y var, pese a que ambas crean variables, está en el alcance de las variables que crean, por ejemplo, las variables declaradas por let solo están disponibles dentro del bloque donde están definidas, en cambio las variables declaradas por var están disponibles en toda la función en la que se declaran.

2.	What is the difference between == and === in JavaScript?

La diferencia entre el operador == (operador de igualdad débil o igualdad relajada) y el === (operador de igualdad estricta) es que el operador == realiza la conversión de tipo de los datos antes de la comparación, mientras que el operador === compara los valores y los tipos de datos de los valores que se están comprando. 

3.	Explain what an event in JavaScript is and give an example of an event you have used?

Un evento en JavaScript es una interacción, por ejemplo, la interacción de JavaScript con HTML se maneja a través de eventos que ocurren cuando los usuarios ingresan a la página. Cuando se carga la página, se llama un evento, cuando el usuario hace clic en un botón, ese clic también es un evento, cada interacción entre, el usuario, el navegador es un evento. 

4. What is the difference between a for and a forEach loop in JavaScript?

La diferencia entre un forEach  y for, es que forEach es una función de primera clase, es decir es un constructor, pues recibe como parámetro otra función, esta función se ejecuta en cada iteración de los elementos, en cambio el for es una estructura de control que ejecuta un bucle si la condición que hay en su interior es verdadera. 

5. How would you declare a function in JavaScript?

Para declarar una función en JavaScript utilizamos la palabra function, ponemos un espacio y luego el nombre de la función. Después de definir el nombre, escribimos entre paréntesis las variables o parámetros de la función.

Hay dos maneras de escribir funciones en JavaScript:

La primera, es la forma canónica. Escribimos la palabra function, espacio, nombre de la función y entre paréntesis escribimos las variables o parámetros de la función, seguido de las llaves o body de la función. 

La otra forma, es escribir funciones por medio de las palabras var, let y const. Después de estas palabras, insertamos el nombre de la función y le asignamos un valor function. seguido de las llaves o body de la función.

También existen los llamados arrow functions, estos nos brindan una sintaxis mas clara, limpia a la hora de escribir funciones. 


6. Explain what a closure is and give an example of its use


Un closure se puede definir como una función que se crea en un entorno que puede acceder a variables locales. Por ejemplo, una función externa que contiene una función interna puede acceder a las variables de la función externa, creando un contexto. El uso de closures permite crear y manejar el concepto de variables privadas.



7. Describe how you would create an object in JavaScript

Los objetos en JavaScript se pueden comparar con objetos de la vida real. En JavaScript, un objeto es una entidad independiente, con propiedades, por ejemplo, un perro se puede decir que es un objeto, que tiene unos atributos y unas propiedades, un perro tiene color, peso y raza, entres otros. 

La manera en que se crean objetos en JavaScript es la siguiente: 
Primero definimos si el objeto es let o const (el objeto no puede ser redefinido o reasignado su valor. Segundo definimos un nombre descriptivo del objeto y tercero utilizamos el operador igual, abrimos llaves y definimos clave y valor.

8. Give an example of using a try-catch block in JavaScript

Un ejemplo que se puede utilizar con try-catch block es en la llamada a una API, ya que, al realizar una llamada hacia la URI, esta se hace de manera asíncrona y en caso de la llamada falle o lance un error, nosotros podemos capturar la excepción mediante la instrucción catch y ejecutar un código de reintento o un código que nos ayude a controlar o manejar el error. 

9. What is the difference between an object and an array in JavaScript?

Un array es un objeto de JavaScript que contiene una lista de elementos separados por comas, estos objetos se introducen con corchetes [ ], conteniendo todo tipo de valores primitivos en cambio un objeto es aquel que contiene diferentes propiedades y se insertan con el símbolo de llaves { }.

10. How would you create a simple timer using JavaScript?

Una forma sencilla seria estableciendo una variable tiempo, luego una función T, que se ejecuta cada vez que pasa el tiempo establecido en la variable "tiempo". y se va aumentando con un contador, luego usamos la función "setInterval" para iniciar el temporizador y especificar la función a ejecutar y el tiempo. Para detener el temporizador, usamos la función clearInterval(intervalId), pasando como parámetro el valor de retorno de setInterval().
