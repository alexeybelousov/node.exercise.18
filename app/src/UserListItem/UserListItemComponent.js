'use strict';

userApp.component('userListItem', {

    bindings: {
        user: '<'
    },

    controller: function userListItemCtrl($location) {

        this.goUserDetail =  function(userId) {
          $location.url('/#!/users/' + userId);
        }

    },

    templateUrl: './src/UserListItem/UserListItem.html'

});
