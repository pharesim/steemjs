# steemjs
Lightweight JavaScript library to communicate with steemd

No further dependencies

Usage:

```
ws = new WebSocketWrapper(server);
ws.connect().then(function(response) {
  steem = new SteemWrapper(ws);
  steem.send('get_dynamic_global_properties',[], function(response) {
    // do stuff
  });
});
```
