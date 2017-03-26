function Foo(options) {
    if (!(this instanceof Foo)){
        return new Foo(options);
    }

    this.options = options;
    this.logging = true;

    //init app.
    this.init();
}

Foo.prototype.startApp = function(message) {
    console.log(message);
};

Foo.prototype.init = function() {
    this.startApp('App init!');
};

module.exports = Foo;