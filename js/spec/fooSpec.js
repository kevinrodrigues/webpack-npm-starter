describe('`Foo`', function() {
    var Foo = require('../index'),
        newFoo,
        options = {
            "foo": "baz"
        };

    beforeEach(function() {
        newFoo = new Foo(options);
    });

    describe('when invoked', function() {
        it('should set logger to true', function() {
            expect(newFoo.logging).toBe(true);
        });

        it('should set `this.options` to be options', function() {
            expect(newFoo.options).toBe(options);
        });
    });
});