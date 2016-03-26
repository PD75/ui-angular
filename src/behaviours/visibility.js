(function() {
  'use strict';

  angular.module('uiAngular')
    .directive('uiVisibility', visibilityDirective);

  function visibilityDirective($timeout) {
    return {
      restrict: 'A',
      scope: {
        visibilityData: '=uiVisibilityData',
        visibilityObj: '=?uiVisibility',
      },
      link: link,
    };

    function link(s, e) {
      if (angular.isObject(s.visibilityData)) {
        e.visibility(s.visibilityData);
        s.$watchCollection('visibilityData', function() {
          e.visibility(s.visibilityData);
          $timeout(function() {
            e.visibility('refresh');
          });
        });
      } else {
        $timeout(function() {
          e.visibility();
        });
      }
      s.visibilityObj = e;
    }
  }

})();
