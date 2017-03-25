function Foo(options) {
    this.options = options;
    this.logging = true;

    this.init();
}

Foo.prototype.startApp = function(message) {
    console.log(message);
};

Foo.prototype.init = function() {
    this.startApp('App init!');
};

module.exports = Foo;