var app = angular.module('MyApp', []);


app.filter('reverse', [function () {
    return function (string) {
        return string.split('').reverse().join('');
    }
}])
app.filter('capitalize', [function () {
    return function (string) {
        return string.toUpperCase();
    }
}])


app.controller('myctrl', [function ($scope) {
    $scope = this;
    $scope.mode = 'fun';

    $scope.setDescription = function (age) {

        if (age < 10)
            $scope.description = 'child'
        if (age > 10 && age < 18)
            $scope.description = 'teen'
        if (age > 18)
            $scope.description = 'adult'
    }

    $scope.add = function (a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
            return 'invalid args'
        return a + b;
    }

}]);



