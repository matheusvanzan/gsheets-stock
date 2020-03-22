KEYS = [
  '__SUAS__',
  '__API___',
  '__KEYS__',
  '__AQUI__'
];

function STOCK_PRICES(range) {
  
  var return_values = new Array(range.length);
  
  for (var i=0; i<range.length; i++) {
  
    var key = KEYS[i % KEYS.length];
    var stock = range[i];
    var url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + stock + '.SA&apikey=' + key;
    var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});  
    var data = JSON.parse(response.getContentText());
    
    if (data['Global Quote'] === undefined) {
      return_values[i] = 0;
    } else {
      return_values[i] = parseFloat(data['Global Quote']['05. price']);
    }
  }
  return return_values;
}
