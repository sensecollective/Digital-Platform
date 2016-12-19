(function() {
  'use strict';

  angular
    .module('profiles')
    .controller('OrganizationProfileListController', OrganizationProfileListController);

  OrganizationProfileListController.$inject = ['$scope', '$rootScope', '$timeout', 'SchoolOrganizationsService',
    'ExpeditionViewHelper'];

  function OrganizationProfileListController($scope, $rootScope, $timeout, SchoolOrganizationsService,
    ExpeditionViewHelper) {
    var vm = this;
    vm.newOrganization = new SchoolOrganizationsService();

    var checkRole = ExpeditionViewHelper.checkRole;
    vm.isTeamLead = checkRole('team lead') || checkRole('team lead pending');

    vm.filter = {
      type: '',
      typeName: '',
      searchString: '',
      sort: ''
    };

    vm.clearFilters = function() {
      vm.filter = {
        type: '',
        typeName: '',
        searchString: '',
        sort: ''
      };
      vm.findOrganizations();
    };

    vm.findOrganizations = function() {
      SchoolOrganizationsService.query({
        type: vm.filter.type,
        searchString: vm.filter.searchString,
        approvedOnly: true,
        showTeams: true,
        sort: 'name',
        full: true
      }, function(data) {
        vm.organizations = data;
        vm.error = null;
        $timeout(function() {
          $rootScope.$broadcast('iso-method', { name:null, params:null });
          $rootScope.$broadcast('iso-method', { name:null, params:null });
        });
      }, function(error) {
        vm.error = error.data.message;
      });
    };
    vm.findOrganizations();

    vm.findOrgRequests = function() {
      SchoolOrganizationsService.query({
        pending: true
      }, function(data) {
        vm.orgRequests = data;
      });
    };
    vm.findOrgRequests();

    vm.typeSelected = function(selection) {
      vm.filter.type = (selection) ? selection.value : '';
      vm.filter.typeName = (selection) ? selection.name : '';
      vm.findOrganizations();
    };

    vm.searchChange = function($event) {
      if (vm.filter.searchString.length >= 3 || vm.filter.searchString.length === 0) {
        vm.findOrganizations();
      }
    };

    vm.types = [{
      name: 'School',
      value: 'school'
    }, {
      name: 'Business',
      value: 'business'
    }, {
      name: 'Government',
      value: 'government'
    }, {
      name: 'Property owner',
      value: 'property owner'
    }, {
      name: 'Community organization',
      value: 'community organization'
    }, {
      name: 'Other',
      value: 'other'
    }];

    $scope.$on('$viewContentLoaded', function() {
      $timeout(function() {
        $rootScope.$broadcast('iso-method', { name:null, params:null });
      });
    });

    vm.capitalizeFirstLetter = function(string) {
      if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      } else {
        return '';
      }
    };

    vm.openSchoolOrgForm = function() {
      angular.element('#modal-org-edit').modal('show');
    };

    vm.closeSchoolOrgForm = function(refresh) {
      angular.element('#modal-org-edit').modal('hide');
      if (refresh) vm.findOrganizations();
    };

    vm.openApproveSchoolOrgs = function() {
      vm.findOrgRequests();
      angular.element('#modal-org-requests').modal('show');
    };

    vm.closeApproveSchoolOrgs = function(refresh) {
      angular.element('#modal-org-requests').modal('hide');
      if (refresh) {
        vm.findOrganizations();
        vm.findOrgRequests();
      }
    };
  }
})();
