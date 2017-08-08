(function() {
	'use strict';

	angular.module('counselLinkTechEval').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('searchAcross', {
			parent : 'app',
			url : '/searchAcross',
			data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'jhipsterSampleApplicationApp.album.home.title'
            },
			views : {
				'content@' : {
					templateUrl : 'app/search/searchResult.html',
					controller : 'SearchController',
					controllerAs : 'vm'
				}
			}
		});
	}
})();
