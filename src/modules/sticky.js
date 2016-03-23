(function() {
  'use strict';

  angular.module('uiAngular')
    .service('stickyService', stickyService)
    .directive('uiStickyContext', stickyContextDirective)
    .directive('uiSticky', stickyDirective);

  function stickyDirective($timeout) {
    return {
      restrict: 'A',
      scope: {
        stickyData: '=uiStickyData',
        stickyObj: '=?uiSticky',
        stickyContext: '=uiStickyContextId',
      },
      link: link,
    };

    function link(s, e) {
      s.stickyObj = e;
      updateSticky(s.stickyContext, s.stickyData, e);

      s.$watchCollection(function() {
        return [s.stickyContext, s.stickyData];
      }, function() {
        updateSticky(s.stickyContext, s.stickyData, e);
      });

      // s.$watchCollection('stickyContext', function(n, o) {
      //   if (angular.isDefined(s.stickyContext)) {
      //     if (angular.isDefined(s.stickyData)) {
      //       s.stickyData.context = s.stickyContext;
      //       var x = 1;
      //     } else {
      //       s.stickyData = {
      //         context: s.stickyContext,
      //       };
      //     }
      //   }
      // });
      // s.$watchCollection('stickyData', function(n, o) {
      //   e.sticky(s.stickyData);
      //   $timeout(function() {
      //     e.sticky('refresh');
      //   });
      // });
      // if (angular.isObject(s.stickyData)) {
      //   e.sticky(s.stickyData);

      // } else {
      //   $timeout(function() {
      //     e.sticky();
      //   });
      // }
    }

    function updateSticky(context, data, el) {
      if (angular.isDefined(context)) {
        if (angular.isDefined(data)) {
          data.context = context;
          var x = 1;
        } else {
          data = {
            context: context,
          };
        }
      }
      if (angular.isDefined(data)) {
        el.sticky(data);
      } else {
        el.sticky();
      }
      // $timeout(function() {
      //   el.sticky('refresh');
      // });
    }

  }
  function stickyContextDirective(stickyService) {
    return {
      restrict: 'A',
      scope: {
        stickyContext: '=uiStickyContext',
      },
      link: link,
    };
    function link(s, e) {
      var classId = stickyService.getId();
      s.stickyContext = '.' + classId;
      e.addClass(classId);
    }
  }

  function stickyService() {
    var s = this;
    s.getId = getId;
    s.index = 0;

    function getId() {
      return 'sticky' + s.index++;
    }
  }
})();