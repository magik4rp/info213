var aboutInformation = {
	"tenant": {
		"1": {"title": "Fill out your preferences", "text": "List what you are looking for in a room to rent out."},
		"2": {"title": "List your skills", "text": "List tasks you can do around the house, and how many hours per week you can work."},
		"3": {"title": "Talk to potential landlord", "text": "Contact homeowners to find out if living with them will be right for you."},
		"4": {"title": "Submit an application", "text": "Pay an application fee once, and you can apply to multiple landlords"},
		"5": {"title": "Sign the lease", "text": "Once you have made a decision, we create the lease for you, No worrying about the legalese."},
		"6": {"title": "Monthly check-in", "text": "Our committment to your good relationship does not end at move-in day. We check into make sure everything goes as expected."}
	},
	"landlord": {
		"1": {"title": "Fill out your preferences", "text": "List the tasks you need help with, plus other preferences for a tenant"},
		"2": {"title": "List your house", "text": "Give your tenants the information they need to know your house is right for them."},
		"3": {"title": "Talk to candidates", "text": "Contact candidates if you need to ask them any additional questions."},
		"4": {"title": "Review and select applicants", "text": "Look over applicatoins, and select the best one. We will suggest the best matches for you."},
		"5": {"title": "Sign the lease", "text": "Once you have made a decision, we create the lease for you. No worrying about the legalese."},
		"6": {"title": "Monthly check-in", "text": "Our commitment to your good relationship does not end at move-in day. We check in to make sure everything goes as expected."}
	}
};

$("#home-container").ready(function() {
	console.log("hiya");

	$(".radio").click(function() {
		$(".radio").each(function(i, radio) {
			$(radio).removeClass("active");
		});
		$(this).addClass("active");
		var who = $(this).attr("id");
		console.log("You clicked on " + who);
		var information = aboutInformation[who];
		console.log(information);
		$(".about-text").each(function(i ,text) {
			var textId = $(this).attr("id");
			var title = information[textId]["title"];
			var text = information[textId]["text"]
			var newText = "<b>" + title + "</b><br>" + text;
			$(this).html(newText);
		});
	});
});