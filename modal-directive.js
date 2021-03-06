/**
* <button class="btn btn-default" id="sampleBtn">open mha id-binding</button>
* <button class="btn btn-default" id="trashBtn" ng-click="ctrl.isDialogShown =
* (!ctrl.isDialogShown) ">toggle condition</button>
* <sjv-modal
*   ok="someController.onAction" 
*   target="sampleBtn"
*   title="Hej på er"
*   show-condition="ctrl.isDialogShown">
*     Vill du verkligen gör så...?
* </sjv-modal>
*/
(function(module) {
  'use strict';

  module.directive('sjvModal', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude:true,
      template:
        '<div class="modal fade">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" ng-click="apply(\'cancel\')">' +
                  '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                '<h4 class="modal-title">{{title}}</h4>' +
              '</div>' +
              '<div class="modal-body"><span ng-transclude></span></div>' +
              '<div class="modal-footer">' +
                '<button class="btn btn-primary" ng-click="apply(\'ok\')">{{okLabel}}</button>' +
                '<button ng-hide="hideCancel && hideCancel==\'true\'" ' +
                  'class="btn btn-default" ng-click="apply(\'cancel\')">{{cancelLabel}}</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>',
      scope:{
        title: '@',
        showCondition: '=',
        okFn: '&ok',
        cancelFn: '&cancel',
        okLabel: '@',
        cancelLabel: '@',
        hideCancel: '@'
      },
      link: function(scope, element, attr) {
        if (scope.title === undefined) {
          scope.title = 'Var god bekräfta';
        }

        scope.okLabel = (scope.okLabel !== undefined) ? scope.okLabel : 'OK';
        scope.cancelLabel = (scope.cancelLabel !== undefined) ? scope.cancelLabel : 'Avbryt';

        scope.$watch('showCondition', function(newValue) {

          if (newValue) {
            element.modal('show');

            if (window.frameElement) {
                //Fixa positionering i iframe 
                var scrollTop  = window.parent.pageYOffset || window.parent.document.documentElement.scrollTop || 0
                element.css('top', scrollTop);
            }

            element.on('hide.bs.modal', function() {
              scope.showCondition = false;
            });
          } else {
            element.modal('hide');
          }
        });

        var btnId = attr.target;
        $('#' + btnId).on('click', function() {
          element.modal('toggle');
        });

        var closeModal = function() {
          element.modal('hide');
        };

        scope.apply = function(action) {
          if (action === 'cancel' && scope.cancelFn()) {
            scope.cancelFn().call(null, 'cancel');
          } else if (action === 'ok' && scope.okFn()) {
            var okReturnValue = scope.okFn().call(null, 'ok');
            if (okReturnValue !== undefined && !okReturnValue) {
              // okFn returnerade false, så stäng inte fönstret
              return; 
            }
          }
          closeModal();
        };

      }
    };
  });
})(angular.module('sjv-widget.directives'));