var myApp = angular.module('lab7', []);
myApp.controller('example1', function($scope) {
    $scope.name = "Tô Xuân Cường"
    $scope.dob = "07 - 10 - 1998"
    $scope.stuCode = "PS07744"
    $scope.image = "../img/img1.jpg"
    $scope.gender = "Nam"
});
myApp.controller('example2', example2Worker)
myApp.controller('example3', example3Worker)

function example2Worker($scope) {
    $scope.startCalExam2 = function() {
        $scope.perimeter = (parseFloat($scope.width) + parseFloat($scope.height)) * 2
        $scope.acreage = (parseFloat($scope.width) * parseFloat($scope.height))

    }
}

function example3Worker($scope) {

}