$("#individual-message-container").ready(function() {
	$(".nav-button#dashboard").addClass("active");
	var date;
	var message;
	$("#send-message").click(function() {
		var today = new Date();
		date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getYear();
		message = $("#input-message").val();
		$("#messages").append("<div class='message right'><div class='message-time right'>" + date + "</div><div class='message-bubble right'><div class='message-carrot-border right'></div><div class='message-carrot right'></div>" + message + "</div></div>");
		$("#input-message").val("");
	});
	$("#to-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
});