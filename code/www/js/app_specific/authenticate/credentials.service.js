(function () {
    'use strict';

    angular
        .module('authenticatejs')
        .factory('credentialsSrvc', credentialsSrvc);

        credentialsSrvc.$inject = [

        ];

    function credentialsSrvc(
 
    ) {

        var service = {
           
            clientId: '[INSERT CLIENT ID HERE]',
            redirectShort: "http://localhost/callback",
            redirectUri: "http://localhost/callback.html",
            scopes: "Sites.ReadWrite.All User.Read",
            authServiceUri: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
            
        };


        return service;

    }

    
})();
