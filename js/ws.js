var WebSocketWrapper;
WebSocketWrapper = (function() {
  var ws = WebSocketWrapper.prototype;

  function WebSocketWrapper(server) {
    this.server = server;
    this.connection = {};
    this.callbacks = [];
  }

  ws.connect = function() {
    return new Promise((resolve, reject) => {
      if('WebSocket' in window) {
        this.connection = new WebSocket(this.server);
        this.connection.onopen = () => {
          resolve(this.connection);
        };
        this.connection.onerror = function(error) {
          reject(Error('Error connecting to server, please reload the page!'+error));
        };
        this.connection.onmessage = (data) => {
          var sdata = JSON.parse(data['data']);
          this.callbacks[sdata['id']](sdata['result']);
        };
      } else {
        reject(Error('Your browser is too old, please get a recent one!'));
      }
    });
  }

  ws.send = function(data, callback) {
      this.callbacks[data['id']] = callback;
      var json = JSON.stringify(data);
      this.connection.send(json);
  }

  return WebSocketWrapper;
})();
