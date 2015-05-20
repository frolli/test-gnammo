$(document).ready(function(){
  moment.locale('it');
    var getAmount = function() {
      var amount = $("#amount").val();
      if(!$.isNumeric(amount)){
        amount = 0;
      }
      return amount;
    };

    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 30,
      values: [ 5, 20 ],
      slide: function( event, ui ) {
        $( "#amount_min" ).val( "Min " + ui.values[ 0 ] );
        $( "#amount_max" ).val( "Max " + ui.values[ 1 ] );
        $( "#tot_min" ).html( ui.values[ 0 ] * getAmount() + "€");
        $( "#tot_max" ).html( ui.values[ 1 ] * getAmount() + "€");
      }
    });
    $( "#amount_min" ).val( "Min " + $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount_max" ).val("Max " + $( "#slider-range" ).slider( "values", 1 ));
    $( "#tot_min" ).html( $( "#slider-range" ).slider( "values", 0 ) * getAmount() + "€");
    $( "#tot_max" ).html( $( "#slider-range" ).slider( "values", 1 ) * getAmount() + "€");

    $("#amount").blur(function(){
      $( "#tot_min" ).html( $( "#slider-range" ).slider( "values", 0 ) * getAmount() + "€");
      $( "#tot_max" ).html( $( "#slider-range" ).slider( "values", 1 ) * getAmount() + "€");
    }); 

    $('#input1,#input3').datetimepicker({
        format: 'DD/MMM/YYYY'
    });
    $('#input2').datetimepicker({
       format: 'LT'
    });
    
    $('.calendar').click(function(){
      $(this).siblings('input')[0].focus();
    });
    $("#event-form").submit(function() {
      alert("Form non attivo. Dati serializzati: " + $(this).serialize());
      return false;
    });
}); 
 