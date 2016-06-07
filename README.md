# steemjs
Lightweight JavaScript library to communicate with steemd

No further dependencies

Usage:

```
<script type="text/javascript" src="js/ws.js"></script>
<script type="text/javascript" src="js/steem.js"></script>

<script type="text/javascript">
 ws = new WebSocketWrapper(server);
 ws.connect().then(function(response) {
   steem = new SteemWrapper(ws);
   steem.send('get_dynamic_global_properties',[], function(response) {
     // do stuff
   });
 });
</script>
```
