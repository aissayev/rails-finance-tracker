var init_stock_lookup;

var hide_spinner = function(){
  $('#spinner').hide();
}

var show_spinner = function() {
  $('#spinner').show();
}

init_stock_lookup = function() {
  $('#stock-lookup-form').on('ajax:before', function(event, data, status){
    show_spinner();
  });
  
  $('#stock-lookup-form').on('ajax:after', function(event, data, status){
    hide_spinner();
  });
  
  $('#stock-lookup-form').on('ajax:success', function(event, data, status){
    // listeners are gone with data
    $('#stock-lookup').replaceWith(data);
    // so we need to reinitialize function
    init_stock_lookup();
  });
  
  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
    hide_spinner();
    $('#stock-lookup-results').replaceWith(' ');
    $('#stock-lookup-errors').replaceWith('Stock was not found.');
  });
}


$(document).ready(function() {
  init_stock_lookup();
})