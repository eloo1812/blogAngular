angular.module('blog', []);

angular.module('blog').controller('Rest', function ($scope, $http, $window) {
  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
      $scope.publicacoes = response.data;
    })
    .catch(function(error) {
      console.error('Erro ao carregar publicações:', error);
    });

  $scope.lerMais = function(index) {
    $window.location.href = 'detalhes.html?index=' + index;
  };
});

angular.module('blog').controller('DetalhesController', function ($scope, $http, $location) {
  var url = $location.absUrl();
  var indexStart = url.indexOf('index=') + 6;
  var indexEnd = url.indexOf('#') === -1 ? url.length : url.indexOf('#');
  var index = url.slice(indexStart, indexEnd);

  if (index !== undefined) {
    $http.get('https://api-fake-blog.onrender.com/postagens')
      .then(function(response) {
        $scope.publicacao = response.data[index];

        // Formatação da data se necessário
        if ($scope.publicacao.postDate.length < 10) {
          $scope.publicacao.postDate = "0" + $scope.publicacao.postDate;
        }
      })
      .catch(function(error) {
        console.error('Erro ao carregar postagem:', error);
      });
  } else {
    console.error('Índice da postagem não encontrado na URL.');
  }
});
angular.module('blog').controller('Rest', function ($scope, $http, $window) {
  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
      $scope.publicacoes = response.data;
    })
    .catch(function(error) {
      console.error('Erro ao carregar publicações:', error);
    });

  $scope.lerMais = function(index) {
    $window.location.href = 'pages.html?index=' + index;
  };
});
