# Taller 1: transferencias

## 1. Introduccion

El dinero y los sistemas de pago han experimentado una larga evolución desde el amanecer de la civilización (ver [historia](./historia.md)). Las redes blockchain representan el siguiente paso en esta evolución.

En este taller se van a realisar unos pagos en el red de Cardano, usando Javascript y el framework de Helios.

## 2. Crear direccion para pagos

En Cardano, las direcciones más básicas están controladas por un par de [claves pública-privada](./dlp.md). Solo las transacciones firmadas por dicho par de claves pueden gastar los UTxOs de esa dirección.

Para poder recibir y enviar dinero, primero debemos generar un par de claves pública-privada. Comienza creando el directorio para el código de este taller:

```sh
$ mkdir helios-taller-01
$ cd ./helios-taller-01
$ npm init es6 -y
```

A continuación, instala la biblioteca necesaria de Helios (asumiendo que tienes npm y node disponibles):

```sh
$ npm install @helios-lang/tx-utils
```

Con tu IDE preferido, abre un archivo llamado index.js e introduce el siguiente contenido:

```js
import { randomInt } from "node:crypto"
import { makeAddress } from "@helios-lang/ledger"
import { makeRandomBip32PrivateKey } from "@helios-lang/tx-utils"

const random = () => randomInt(0, 2**48 - 1)
const key = makeRandomBip32PrivateKey(random)

const pubKey = key.derivePubKey()
const pubKeyHash = pubKey.hash()
const address = makeAddress({pubKeyHash})

console.log(address.toString())
```

