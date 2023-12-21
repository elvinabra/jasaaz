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


