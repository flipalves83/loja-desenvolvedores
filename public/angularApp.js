/**
 * Created by Felipe on 04/02/2017.
 */

// public/angularApp.js

var listaDesenvolvedores = angular.module('listaDesenvolvedores', []);

function mainController($scope, $http) {

    var refresh = function (){
        $http.get('/api/desenvolvedores')
            .success(function(data) {
                $scope.desenvolvedores = data;
                $scope.Desenvolvedor = {};
                console.log("desenvolvedores: ", data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    refresh();

    $scope.criarDesenvolvedor = function() {
        $http.post('/api/desenvolvedores', $scope.formDesenvolvedor)
            .success(function(data) {
                $scope.formDesenvolvedor = {};
                $scope.desenvolvedores = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deletarDesenvolvedor = function(id) {
        $http.delete('/api/desenvolvedores/' + id)
            .success(function(data) {
                $scope.desenvolvedores = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.editarDesenvolvedor = function(id) {
        $http.get('/api/desenvolvedores/' + id)
            .success(function(data) {
                $scope.formDesenvolvedor = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.descontarCupom = function () {
        // Não implementado
    };

    $scope.atualizarDesenvolvedor = function() {
        $http.put('/api/desenvolvedores/' + $scope.formDesenvolvedor._id, $scope.formDesenvolvedor)
            .success( function(response){
                refresh();
            });
    };

}