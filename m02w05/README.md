# M02W05 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### Networking
* machines connected together
* every machine can talk to every other machine

* servers have information
* client wants information

### Internet Protocol (IP)
* IP address (street number)
  * IPv4 192.168.8.8 127.0.0.1
  * IPv6 2001:db8:3333:4444:5555:6666:7777:8888

### Ports
* a port specify one particular app/server (apt number)
* 65,535 ports to choose from

### DNS Domain Name Service
* convert domain names into ip addresses

### Packets
* broken down into packets

### User Datagram Protocol (UDP)
* smaller header sizes
* connectionless
* no error recovery
* packets can arrive in any order

### Transport Control Protocol (TCP)
* larger header size
* connection (must have) 3 way handshake
* any missing packets are resent
* packets are reordered on arrival

### Event-driven programming
* register event handlers (aka functions) to run when/if an event occurs

```js
socket.write('Move: up');
socket.write('Move: right');
```










