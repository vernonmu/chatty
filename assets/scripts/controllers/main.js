'use strict';

angular.module('chattyApp')
    .controller('MainCtrl', function($scope, messageService) {

        messageService.getMessages().then(function(response) {

            $scope.messages = response.data;
        });
        $scope.addMessage = function(obj) {
            console.log("before if");
            if (obj) {
                messageService.addMessage(obj).then(function(response) {
                    console.log(response);
                    $scope.messages = response.data;
                });
            }
        };
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
