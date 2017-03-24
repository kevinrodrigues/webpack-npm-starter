function Foo() {
    this.logging = true;
}

Foo.prototype.logger = function() {
    console.log('App started!');
};

module.exports = Foo;