(function(){
//Expanded AJAX example

  $('.thumbInfo img').on('click', function() {

    // do an AJAX call
    $.ajax({ //make request
      url: "includes/ajaxuery.php",
      data: {model: this.id}, //find what corresponds to this id
      type: "GET" // don't put a semi-colon at the end so we can chain methods together
    })


    .done(function(data){//when ajax request is done
      console.log(data);

      if(data){
        data = JSON.parse(data);
        renderCarInfo(data);
      }else{
        alert('your ajax call didn\'t work');
      }

      
    }) //don't put semi colon here either

    .fail(function(ajaxCall, status, error){ //if the call fails
      console.log(status, ",", error);
      console.log(ajaxCall);
    }); //put semi-colon to terminate ajax function

    function renderCarInfo(car){ //car is same as data
      $('.thumbInfo img').addClass('nonActive');
      $('#' + car.model).removeClass('nonActive');


      $('.subhead span').text(" mini Cooper" + car.model);
      $('.modelName').text(car.modelName);
      $('.priceInfo').text(car.pricing);
      $('.modelDetails').text(car.modelDetails);
    }

  });

})();