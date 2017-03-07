'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {

    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
    });

    $scope.addMessage = function ( message ) {
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          $scope.messages = response.data.messages;

        });
      }

      $scope.newMessage = ""

    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  });
