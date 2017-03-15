//from the lab, not worked on in week 9 class

(function(){
  
  $('.carbtn').on('click', function(){
    //console.log("clicked");
    $.getJSON('includes/ajaxQuery.php',{model:this.id}, function(data){//access database, match 'model' in db Query (setup in ajaxQuery.php) with this.id
      //console.log(data);


      $('.hidden').removeClass('hidden');//hide previous info

      $('.modelName').text(data.modelName);
      $('.priceInfo').text('$'+data.pricing);
      $('.modelDetails').text(data.modelDetails);
      
    });
  });

})();