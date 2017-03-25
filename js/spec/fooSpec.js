describe('`Foo`', function() {
    var Foo = require('../index'),
        newFoo,
        options = {
            "foo": "baz"
        };

    beforeEach(function() {
        newFoo = new Foo(options);
        spyOn(newFoo, 'init');
    });

    describe('when invoked', function() {

        it('should exist as a object', function() {
            expect(typeof newFoo).toBe('object');
        });

        it('should set logger to `true`', function() {
            expect(newFoo.logging).toBe(true);
        });

        it('should set `this.options` to be options', function() {
            expect(newFoo.options).toBe(options);
        });

        it('should call `init` to initial the app', function() {
            newFoo.init();
            expect(newFoo.init).toHaveBeenCalled();
        });

        describe('`init` method', function() {
            var newFoo;

            beforeEach(function(){
                newFoo = new Foo(options);
                spyOn(newFoo, 'startApp');
            });

            it('should exist as a function', function() {
                expect(typeof newFoo.init).toBe('function');
            });

            it('should call the `startApp` method on it\'s prototype chain', function() {
                newFoo.init();
                expect(newFoo.startApp).toHaveBeenCalled();
            });
        });

        describe('`startApp` prototype method', function() {
            var newFoo;

            beforeEach(function() {
                newFoo = new Foo(options);
            });

            it('should exist as a function', function() {
                expect(typeof newFoo.startApp).toBe('function');
            });

            describe('when invoked', function() {
                it('should call the `init` method to initial the app', function() {
                    // todo..
                });
            });
        })
    });
});