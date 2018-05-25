'use strict';

userApp.component('userDetail', {

    controller: function UserDetailCtrl(UsersService, $routeParams) {

      var _this = this;

      _this.userLoaded = false;
      _this.user = UsersService.get({
          userId: $routeParams['userId']
      }, function(successResult) {
          // Окей!
          _this.notfoundError = false;
          _this.userLoaded = true;

          _this.activeTab = 1;
          _this.disableControlTab = true;
      }, function(errorResult) {
          // Не окей..
          _this.notfoundError = true;
          _this.userLoaded = true;
      });

      _this.deleteUser = function(userId) {

          _this.user.$delete({
              userId: userId
          }, function(successResult) {
              // Окей!
              _this.deletionSuccess = true;
          }, function(errorResult) {
              // Не окей..
              _this.deletionError = true;
          });

      }
    },

    templateUrl: './src/UserDetail/UserDetail.html'

});

// userApp.controller('UserDetailCtrl', function($scope, $routeParams, UsersService) {
//
//     $scope.userLoaded = false;
//
//     $scope.user = UsersService.get({
//         userId: $routeParams['userId']
//     }, function(successResult) {
//         // Окей!
//         $scope.notfoundError = false;
//         $scope.userLoaded = true;
//
//         $scope.activeTab = 1;
//         $scope.disableControlTab = true;
//     }, function(errorResult) {
//         // Не окей..
//         $scope.notfoundError = true;
//         $scope.userLoaded = true;
//
//
//     });
//
//     $scope.user.$promise.then(function(result) {
//         //$scope.userLoaded = true;
//     });
//
//     $scope.deleteUser = function(userId) {
//
//         $scope.user.$delete({
//             userId: userId
//         }, function(successResult) {
//             // Окей!
//             $scope.deletionSuccess = true;
//         }, function(errorResult) {
//             // Не окей..
//             $scope.deletionError = true;
//         });
//
//     }
//
// });
