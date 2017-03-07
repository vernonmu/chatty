'use strict';

angular.module('chattyApp')
  .service('messageService', function ( $http ) {

      this.getMessages = function () {
        return $http.get('/messages');
      }

      this.addMessage = function ( obj ) {
        console.log("services");
        return $http.post('/messages', { user: obj.user, message: obj.message });
      }

  });
