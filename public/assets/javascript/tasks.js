$("#task-container").ready(function() {
	$(".task").click(function() {
		$(this).toggleClass("active");
	});
	$(".step#1").addClass("active");
})