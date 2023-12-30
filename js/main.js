if($("#showpassword").length){
    $("#showpassword").click(function(e){
       e.preventDefault();
       $(this).toggleClass("active");

       if($("#showpassword.active").length){
        $(this).html('<i class="fa-regular fa-eye-slash"></i>');
        $('#password').attr('type', 'text');
       }
       else{
        $(this).html('<i class="fa-regular fa-eye"></i>');
        $('#password').attr('type', 'password');
        
       }
    })
}

if($("#price-range").length){
    $("#price-range").on("input", function() {
        // Get the current value of the range input
        var currentValue = $(this).val();
        
        // Update the value inside the span with class "choosen-price"
        $(".choosen-price").text(currentValue);
    });
}

if($(".for-filter").length){
    $(".for-filter").click(function(){
        $(".filter-column").toggleClass("active");
        $(".cars-column").toggleClass("active");
        $(this).toggleClass("active");
    })
}


if($(".for-filters").length){
    $(".for-filters").click(function(){
        $(".filter-column").toggleClass("enabled");
        
        $(this).toggleClass("enabled");
        $(".cars-column").toggleClass("enabled");

        if($(".for-filters.enabled").length){
            $(".for-filters.enabled").html('<i class="fa-solid fa-filter-circle-xmark"></i>');
        }
        else{
            $(".for-filters").html('<i class="fa-solid fa-filter"></i>');
        }
    })
}

if($(".hamburger").length){
    $(".hamburger").click(function(e){
        e.preventDefault();
      $('nav').toggleClass('active');
      $('.close-header').toggleClass('active');
      $('.for-mobile').toggleClass('active');
      $('nav > a').css('display', 'flex');
    }); 
}


if($(".close-header").length){
    $(".close-header").click(function(e){
        e.preventDefault();
        $('nav').toggleClass('active');
        $('nav > a').css('display', 'none');
      $('.close-header').toggleClass('active');
      $('.for-mobile').toggleClass('active');
    }) 
}