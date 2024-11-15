# El Problema del Logaritmo Discreto

## Introduccion
El Problema del Logaritmo Discreto (DLT, por sus siglas en inglés) es un concepto fundamental en la teoría de números y criptografía moderna. En términos simples, dado un número abstracto *G* (la base), un número abstracto *H*
 (el resultado) y un número primo *p* (el módulo), el problema consiste en encontrar un número *x* tal que:
```
G^x = H (mod p)
```

Esto significa que *G* elevado a la potencia *x*, calculado módulo *p*, da como resultado *H*. Aunque calcular *G^x* (mod *p*) es sencillo si *x* es conocido, encontrar *x* a partir de *G*, *H* y *p* es computacionalmente difícil, especialmente cuando *p* es grande. Esta asimetría entre la facilidad de cálculo en una dirección y la dificultad en la inversa es lo que hace al DLT ideal para aplicaciones criptográficas.

## Uso del DLT en la Criptografía Asimétrica

La criptografía asimétrica utiliza un par de claves: una clave pública y una clave privada. El DLT se aplica para garantizar que sea fácil calcular una clave pública a partir de una clave privada, pero extremadamente difícil deducir la clave privada a partir de la pública. Un ejemplo práctico de cómo funciona esto es el sistema de cifrado conocido como Edwards Digital Signing Algorithm:

### Generación de la clave pública

Se selecciona una base *G* y un módulo primo *p*, conocidos por ambas partes.
Cada usuario elige un número privado *x* (su clave privada) y calcula *H=G^x* (mod *p*) (su clave pública).

### Firma de un mensaje

Para firmar un mensaje *m*, se selecciona un valor aleatorio *k* y se calcula un punto *A*:
```
A=G^k
```

Luego se calcula (usando otro numero primo *l* como el modulo): 
```
b = mod(k + x*f(A,H,m), l)
```

*A*, *b* y *H* son publicos y se compartan para los que quieren verificar la firma.

### Verificar la firma

Con *A*, *b*, *H* y el mensaje podemos verificar que:
```
G^b === A + H^f(A,H,m)
```

Nos recordamos que *b = k + f(A,H,m).x*, entonces:
```
G^(k + x*f(A,H,m)) = G^k + G^(x*f(A,H,m))
```

Nos recordamos que *A = G^k* y *H = G^x*:
```
G^k + G^(x*f(A,H,m)) === A + H^f(A,H,m)
```

## Seguridad Basada en el DLT
La seguridad de este esquema depende de la dificultad de resolver el problema del logaritmo discreto en grandes campos primos. Aunque es relativamente fácil para computadoras modernas realizar las operaciones de potenciación y módulo, no existe (hasta ahora) un método eficiente para calcular el logaritmo discreto en condiciones prácticas, especialmente cuando los números involucrados tienen cientos o miles de dígitos.

En el caso de Cardano se usa Ed25519. Additiones abstractos en una curve elliptica con equation:
```
-x^2 + y^2 = 1 - d*x^2*y^2
```

Se calculan asi:
```
x_3 = (x_1*y_2 + x_2*y_1)/(1 + D*x1*x2*y1*y2)
y_3 = (y_1*y_2 - x_1*x_2)/(1 - D*x1*x2*y1*y2
```

Con:
```
p = 57896044618658097711785492504343953926634992332820282019728792003956564819949
l = 7237005577332262213973186563042994240857116359379907606001950938285454250989
Gx = 15112221349535400772501151409588531511454012693041857206046113283949847762202
Gy = 46316835694926478169428394003475163141307993866256225615783033603165251855960
```
