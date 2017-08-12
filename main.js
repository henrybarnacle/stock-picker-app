 


document.getElementById("price button").addEventListener("click", function() {
    var symbol = document.getElementById("stock").value;
    quandl(symbol);
  });





 function quandl(symbol) {
    var quandlUrl = 'https://www.quandl.com/api/v3/datasets/WIKI/' + symbol + '/data.json?limit=1&column_index=4api_key=axPmiG5ZrkVbD7Q82qvA';
    $.ajax({
      url: quandlUrl,
      cache: true,
      dataType: 'json'
    }).done(function(results) {
      var stockDetails = results.dataset_data.data;
      alert(stockDetails);
     }).fail(function(jqXHR, textStatus) {
      alert('Nothing Found!');
    });
  };








