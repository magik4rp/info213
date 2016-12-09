$("#dashboard-container").ready(function() {
	$(".nav-button#dashboard").addClass("active");
	$(".message-section").click(function() {
		window.location.href = "/message/frances";
	});
	$("#close-alert").click(function() {
		$(".alert").css("opacity", "0");
		$(".alert").css("display", "none");
	});
});