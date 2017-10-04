describe('Filters', function () { //describe your object type
    beforeEach(module('MyApp')); //load module

    describe('stringer', function () { //describe your app name
        var reverse;
        var capitalize;

        beforeEach(inject(function ($filter) { //initialize your filter
            reverse = $filter('reverse', {});
            capitalize = $filter('capitalize', {});

        }));

        it('Should reverse a string', function () {  //write tests
            expect(reverse('rahil')).toBe('lihar'); //pass
            expect(reverse('don')).toBe('nod'); //pass
            //expect(reverse('jam')).toBe('oops'); // this test should fail
        });


        it('should capitalize a string', function () {
            expect(capitalize('bonjour')).toBe('BONJOUR')
            expect(capitalize('hellow')).toBe('HELLOW')
        })

    });
});



describe('Controllers', function () { //describe your object type
    beforeEach(module('MyApp')); //load module<br />
    describe('myctrl', function () { //describe your app name<br />
        var myctrl;
        var scope;
        beforeEach(inject(function ($controller, $rootScope) { //instantiate controller using $controller service

            myctrl = $controller('myctrl', {
                scope: $rootScope.$new()
            });
        }));

        it('Mode should be fun', function () {  //write tests
            expect(myctrl.mode).toBe('fun'); //pass
        });

        it('Should set desciption according to age', function () {
            myctrl.setDescription(4); //calling the method with age=4
            expect(myctrl.description).toBe('child'); //testing the property
            myctrl.setDescription(15); //calling the method with age=15
            expect(myctrl.description).toBe('teen');
            myctrl.setDescription(54); //calling the method with age=54
            expect(myctrl.description).toBe('adult');
        });


        it('Should add two numbers', function () {
            expect(myctrl.add(4, 2)).toBe(6); //4+2 = 6
            expect(myctrl.add('abcd', 2)).toBe('invalid args'); // wrong arg type
        });

    });
});