# steemjs
Lightweight JavaScript library to communicate with steemd

No further dependencies

Usage:

```
<script type="text/javascript" src="js/ws.js"></script>
<script type="text/javascript" src="js/steem.js"></script>

<script type="text/javascript">
 var server = 'wss://steemit.com/ws';
 var ws = new WebSocketWrapper(server);
 ws.connect().then(function(response) {
   var steem = new SteemWrapper(ws);
   steem.send('get_dynamic_global_properties',[], function(response) {
     // do stuff
   });
 });
</script>
```

uses [wsjs](https://github.com/pharesim/wsjs)
