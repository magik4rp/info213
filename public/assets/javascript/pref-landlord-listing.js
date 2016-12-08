$("#tenant-preferences-container").ready(function() {
	$(".step#4").addClass("active");
})

$(document).ready(function() {
	$('#home-picture').change(function(e) {
        var img = URL.createObjectURL(e.target.files[0]);
        $("#home-img").attr("src", img);
        $("#home-img-container").css("border", "none");
        $("#home-img-container b").remove();
    });

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("next");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
	
})
