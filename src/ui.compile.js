angular.module('uiAngular')
  .config(function($compileProvider) {
    'use strict';
    $compileProvider.debugInfoEnabled(false);
  });
