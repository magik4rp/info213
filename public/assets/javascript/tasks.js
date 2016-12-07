$("#task-container").ready(function() {
	$(".task").click(function() {
		$(this).toggleClass("active");
	});
})