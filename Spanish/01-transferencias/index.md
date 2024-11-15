# Taller 1: transferencias

## 1. Introduccion

El dinero y los sistemas de pago han experimentado una larga evolución desde el amanecer de la civilización (ver [historia](./historia.md)). Las redes blockchain representan el siguiente paso en esta evolución.

En este taller se van a realisar unos pagos en el red de Cardano, usando Javascript y el framework de Helios.

## 2. Crear direccion para pagos

En Cardano, las direcciones más básicas están controladas por un par de [claves pública-privada](./dlp.md). Solo las transacciones firmadas por dicho par de claves pueden gastar los UTxOs de esa dirección.

Vamos a generar
