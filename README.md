# stock-picker-app

A simple stock info app. Users can search publicly traded stocks by their relevant stock code in the search bar
The app returns last closing price and past week, month and year performance, color coded for positive/negative results.
Built using the Angular framework with Bootstrap and ajax to pull stock information from the Quandl API.
I built the app as I found the stock widget on my mac dashboard frustrating (and many other apps/sites offering free stock price information) as it wouldn't allow you to view multiple time frames of performance at once for a given stock, forcing you to click back and forth viewing different charts for comparison.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
