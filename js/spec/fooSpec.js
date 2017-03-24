describe('`Foo`', function() {
    var Foo = require('../index'),
        newFoo;

    beforeEach(function() {
        newFoo = new Foo();
    });

    describe('when invoked', function() {
        it('should set logger to true', function() {
            expect(newFoo.logging).toBe(true);
        });
    });
});