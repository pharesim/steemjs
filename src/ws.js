var WebSocketWrapper;
WebSocketWrapper = (function() {
  var ws = WebSocketWrapper.prototype;

  function WebSocketWrapper(server) {
    this.server = server;
    this.connection = {};
    this.callbacks = [];
  }

  ws.connect = function() {
    var that = this;
    
    return new Promise(function(resolve, reject) {
      if('WebSocket' in window) {
        that.connection = new WebSocket(that.server);
        that.connection.onopen = function() {
          resolve(that.connection);
        };
        that.connection.onerror = function(error) {
          reject(Error('Error connecting to server, please reload the page!'+error));
        };
        that.connection.onmessage = function(data) {
          var sdata = JSON.parse(data['data']);
          that.callbacks[sdata['id']](sdata['result']);
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
