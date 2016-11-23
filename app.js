/**
 * Created by Humberto on 11/22/2016.
 */


var myAccountApp = angular.module('myAccountApp',['ngAnimate']);


myAccountApp.controller('ProgressBarController',function($scope, $interval){
    $scope.progressBar = {
        initial:56,
        max:125,
        current:0,
        percentage:0
    };

    $scope.loadingInteval = $interval( function(){
        $scope.progressBar.current += 1;
    },20,$scope.progressBar.initial);

    $scope.addOne = function () {
        $scope.progressBar.current += 1;
    };

    $scope.$watch('progressBar.current',function(){
        $scope.progressBar.percentage = $scope.progressBar.current*100/$scope.progressBar.max;
    });
});