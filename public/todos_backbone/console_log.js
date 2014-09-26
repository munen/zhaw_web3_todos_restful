console.log = function(_super, _bubble) {
  return function() {
    var args = Array.prototype.slice.apply(arguments);
    $("#console_log").append("<li>" + args + "</li>");
    if(_bubble) _super.apply(this, args);
  };
}(console.log, true);