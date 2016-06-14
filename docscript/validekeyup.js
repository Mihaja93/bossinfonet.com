$(#lastName).keyup(function()
if($(#lastName).match(/^[a-z]$/i)){
	$("#lastName").next(".erreur-sms").fadeIn().text("veuillez entrer un Nom valid");
	valid = false;
}
});


	
	