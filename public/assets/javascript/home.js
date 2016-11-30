$("#home-container").ready(function() {
	console.log("hiya");

	$(".radio").click(function() {
		$(".radio").each(function(i, radio) {
			$(radio).removeClass("active");
		})
		$(this).addClass("active");
	})
});