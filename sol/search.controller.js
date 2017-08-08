(function() {
    'use strict';

    angular.module('counselLinkTechEval').controller('SearchController', SearchController);
    SearchController.$inject = ['$scope', 'SearchAcross'];

    function SearchController($scope, SearchAcross) {
        var vm = this;
        vm.searchKeyword = 'Rock';
        fetchSearchResults();

        function fetchSearchResults() {
            console.log('searchKeyword is ', vm.searchKeyword);
            //vm.searchResults = SearchAcross.search();
            vm.searchResults = SearchAcross.doSearch.get({ 'keyword': vm.searchKeyword });
        }
    }
})();
