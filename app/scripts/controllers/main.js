'use strict';

/**
 * @ngdoc function
 * @name stockPickerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockPickerAppApp
 */
angular.module('stockPickerAppApp')
  .controller('MainCtrl', function ($scope) {

$scope.stock = null;
$scope.getQuandl = function() {
 
var symbol = $scope.stock;

    var quandlUrl = 'https://www.quandl.com/api/v3/datasets/WIKI/' + symbol + '/data.json?&column_index=4api_key=axPmiG5ZrkVbD7Q82qvA';
    $.ajax({
      url: quandlUrl,
      cache: true,
      dataType: 'json'
    }).done(function(results) {
      var latest = results.dataset_data.data[0][1];
      var pastWeek = results.dataset_data.data[5][1];
      var pastMonth = results.dataset_data.data[20][1];
      var past12Months = results.dataset_data.data[240][1];

      var weekChange = (latest - pastWeek) / (pastWeek / 100);

      var monthChange = (latest - pastMonth) / (pastMonth / 100);

      var yearChange = (latest - past12Months) / (past12Months / 100);
 
      alert(symbol + " is priced at  " + latest + " as of last closing. This respresents a change of " + weekChange.toFixed(2) + "% over the past week, " + monthChange.toFixed(2) + "% over the past month and " + yearChange.toFixed(2) + "% over the past 12 months.");
     }).fail(function(jqXHR, textStatus) {
      alert('Nothing Found!');
    });

  };
   
}); 
