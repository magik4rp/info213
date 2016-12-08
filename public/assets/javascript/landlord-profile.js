$("#profile-preferences-container").ready(function(){ 
	$("#task-container").ready(function() {
		$(".task").click(function() {
			$(this).toggleClass("active");
		});
		$(".step#3").addClass("active");
	})
	$('#profile-picture').change(function(e) {
        var img = URL.createObjectURL(e.target.files[0]);
        $("#img").attr("src", img);
        $("#avatar").css("border", "none");
    });
})

