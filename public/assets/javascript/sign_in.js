$("#sign-in-container").ready(function() 
    { $("#show-password").click(function() {
      console.log("CLICKED");
      var $input = $("#password");
      var change = "";
      if ($(this).html() == "Show Password") {
        $(this).html("Hide Password")
        change = "text";
      } else {
        $(this).html("Show Password");
        change = "password";
      }
          var rep = $("<input type='" + change + "' />")
            .attr("id", $input.attr("id"))
            .attr("name", $input.attr("name"))
            .attr('class', $input.attr('class'))
            .attr('placeholder', $input.attr('placeholder'))
            .val($input.val())
            .insertBefore($input);
          $input.remove();
          $input = rep;
      $(this).insertAfter($input);
    });
     $(".form-group").click(function() {
        console.log("Clicked it");
        $(".radio").each(function(i, radio) {
          $(radio).removeClass("active");
        });
        $(this).children().first().addClass("active");
    });
  })
