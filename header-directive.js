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

(function () {
	'use strict';

	function sjvHeader() {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			templateUrl: 'header.html',
			controller: 'sjvHeaderController as headerController',
			scope: {
				systemname: '@systemname',
				username: '@username',
				navigationLinks: '=navigationLinks',
				userLinks: '=userLinks',
				logoSrc: "@logoSrc"}
		};
	}

	angular.module('sjvHeaderDirective', ['sjvHeaderController'])
		.directive('sjvHeader', sjvHeader);

})();

(function () {
	'use strict';

	function sjvHeaderController($location) {
		var vm = this;
		var active = $location.path().split('/')[1];

		vm.isActive = function(linkname) {
			return linkname.toLowerCase() === active.toLowerCase();
		};

		vm.isDropdown = function(link) {
			return angular.isArray(link.sublinks);
		};

		vm.isDivider = function(link) {
			return link === '-';
		}
	}

	angular.module('sjvHeaderController', [])
		.controller('sjvHeaderController', ['$location', sjvHeaderController]);
})();

(function () {
	'use strict';
	angular.module('sjvHeader', ['sjvHeaderDirective']);
})();

