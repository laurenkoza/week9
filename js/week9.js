(function(){
//Expanded AJAX example
  
    var selectCar, 
        saveButton = document.querySelector('.fa-download').parentNode;// grabbing element i, but want user to click its parent node to activate
        //console.log(saveButton);


    function loadStuff(){
        if(window.localStorage.getItem('savedCar')){
            var data = window.localStorage.getItem('savedCar', selectCar);

            data = JSON.parse(data);
            renderCarInfo(data);
        }
    }

    $('.thumbInfo img').on('click', function() {
        // do an AJAX call
        $.ajax({ //make request
            url: "includes/ajaxQuery.php",
            data: {model: this.id}, //find what corresponds to this id
            type: "GET" // don't put a semi-colon at the end so we can chain methods together
        })


        .done(function(data){//when ajax request is done
            if(data && data !== "null"){
                selectCar = data;

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
    });

    function renderCarInfo(car){ //car is same as data
        var currentThumb = $('#' + car.model);
        var animIndex = parseInt(currentThumb.data('roundaboutindex'), 8);
        $('#cars').roundabout('animateToChild', animIndex);


        $('.thumbInfo img').addClass('nonActive');
        $('#' + car.model).removeClass('nonActive');


        $('.subhead span').text(" mini Cooper" + car.model);
        $('.modelName').text(car.modelName);
        $('.priceInfo').text(car.pricing);
        $('.modelDetails').text(car.modelDetails);
    }


    function saveData(){
        if(window.localStorage){
            window.localStorage.setItem('savedCar', selectCar);
        }
    }

    saveButton.addEventListener('click', saveData, false);

    $(window).load(function(){
        $('#cars').roundabout({
            childSelector : 'img',
            minOpacity : 0.8,
            minScale : 0.4,
            duration : 1200
        });

        $('#cars').css('opacity', 1);

        loadStuff();
    });

})();