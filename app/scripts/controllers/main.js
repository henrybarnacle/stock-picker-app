'use strict';
/**
 * @ngdoc function
 * @name stockPickerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockPickerAppApp
 */
angular.module('stockPickerAppApp').controller('MainCtrl', function($scope) {
	$scope.stock = null;
	$scope.getQuandl = function() {
		var latest = '';
		var pastWeek = ''
		var pastMonth = '';
		var past12Months = '';
		var weekChange = '';
		var monthChange = '';
		var yearChange = '';
		var symbol = $scope.stock;
		var quandlUrl = 'https://www.quandl.com/api/v3/datasets/WIKI/' + symbol + '/data.json?api_key=axPmiG5ZrkVbD7Q82qvA';
		$.ajax({
			url: quandlUrl,
			cache: true,
			dataType: 'json'
		}).done(function(results) {
			latest = results.dataset_data.data[0][1];
			pastWeek = results.dataset_data.data[5][1];
			pastMonth = results.dataset_data.data[20][1];
			past12Months = results.dataset_data.data[240][1];
			weekChange = (latest - pastWeek) / (pastWeek / 100);
			monthChange = (latest - pastMonth) / (pastMonth / 100);
			yearChange = (latest - past12Months) / (past12Months / 100);
			console.log("1 done");
		}).done(function(response) {
			var aString = symbol + " is priced at $" + latest + " as of last closing.";
			var bString = "This represents a change of:";
			var cString = weekChange.toFixed(2) + "% over the past week.";
			var dString = monthChange.toFixed(2) + "% over the past month.";
			var eString = yearChange.toFixed(2) + "% over the past 12 months.";
			$scope.a = aString;
			$scope.b = bString;
			$scope.c = cString;
			$scope.d = dString;
			$scope.e = eString;
			$scope.$apply();
		}).fail(function(jqXHR, textStatus) {
			alert('Nothing Found!');
		});
	};
});
