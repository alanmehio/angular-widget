/**
 <sjv-header
 	systemname="Jorden"
 	username="userID"
 	logo_src="assets/images/sjv-logo.png"
 	navigation_links="[
		{name: 'testlink1', href:'target1'},
 		{name:'testlink2', href:'target2'},
 		{name: 'testdropdown3', sublinks: [
 			{name: 'item1', href: 'target'}]
 		}]"
 	user_links="[
 		{name: 'Action', href:'action'},
 		{name: 'Action 2', href: 'action2'},
 		{name: 'Action3', href: 'action3'},
 		'-',
 		{name: 'Separated link', href: 'separatedlinktarget'}]">

 	<div class="form-group">
 		<input type="text" class="form-control">
 	</div>
 	<button type="submit" class="btn btn-default">Sök</button>

 </sjv-header>
*/

(function (module) {
	'use strict';

	function sjvHeader() {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: '<nav class="navbar navbar-default sjv-header" role="navigation">' +
			    '<div class="navbar-header">' +
			        '<a class="navbar-brand" href="#/">{{systemname}}</a>' +
			    '</div>' +
			    '<ul class="nav navbar-nav">' +
			        '<li data-ng-repeat="link in navigationLinks track by $index" ' +
			            'data-ng-class="{active: headerController.isActive(link.name)}">' +
			            '<a data-ng-href="{{link.href}}" data-ng-if="!headerController.isDropdown(link)">{{link.name}}</a>' +

			            '<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" ' +
			               'data-ng-if="headerController.isDropdown(link)" ' +
			               'data-ng-class="{active: headerController.isActive(link.name)}"> {{link.name}}' +
			               '<span class="glyphicon glyphicon-chevron-down"></span>' +
			            '</a>' +
			            '<ul class="dropdown-menu" role="menu" data-ng-if="headerController.isDropdown(link)">' +
			                '<li data-ng-repeat="sublink in link.sublinks track by $index" data-ng-class="{divider: headerController.isDivider(sublink)}">' +
			                    '<a data-ng-href="{{sublink.href}}" data-ng-if="!headerController.isDivider(sublink)">{{sublink.name}}</a>' +
			                '</li>' +
			            '</ul>' +
			        '</li>' +
			    '</ul>' +

			    '<ul class="nav navbar-nav navbar-right">' +
			        '<li class="dropdown">' +
			            '<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button"> {{username}}' +
			                '<span class="glyphicon glyphicon-chevron-down"></span>' +
			            '</a>' +

			            '<ul class="dropdown-menu" role="menu">' +
			                '<li data-ng-repeat="link in userLinks track by $index" data-ng-class="{divider: headerController.isDivider(link)}">' +
			                    '<a data-ng-href="{{link.href}}" data-ng-if="!headerController.isDivider(link)">{{link.name}}</a>' +
			                '</li>' +
			            '</ul>' +
			        '</li>' +

			        '<li><img class="sjv-logo" title="sjv-logo" data-ng-src="{{logoSrc}}"></li>' +
			    '</ul>' +

			    '<form class="navbar-form navbar-right" role="search" data-ng-transclude></form>' +
			'</nav>',
			controller: 'sjvHeaderController as headerController',
			scope: {
				systemname: '@systemname',
				username: '@username',
				navigationLinks: '=navigationLinks',
				userLinks: '=userLinks',
				logoSrc: "@logoSrc"}
		};
	}
	module.directive('sjvHeader', sjvHeader);


	function sjvHeaderController($location) {
		var vm = this; // jshint ignore:line
    var active = $location.path().split('/')[1];

		vm.isActive = function(linkname) {
			return linkname.toLowerCase() === active.toLowerCase();
		};

		vm.isDropdown = function(link) {
			return angular.isArray(link.sublinks);
		};

		vm.isDivider = function(link) {
			return link === '-';
		};
	}
	module.controller('sjvHeaderController', ['$location', sjvHeaderController]);

})(angular.module('sjv-widget.directives') );
