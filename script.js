/*script connection*/

$(function(){
	$("#myForm-con-mdp").click(function(){
		valid = true;
	if($("#mail").val() == ""){
		$("#mail").next(".erreur-sms").fadeIn().text("veuillez entrer voter Adresse");
		valid = false;
	}else if(!$("#mail").val().match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/)){
		$("#mail").next(".erreur-sms").show().text("veuillez entrer un Adresse valide");
		valid = false;
	}else
	{
		$("#mail").next(".erreur-sms").fadeOut();
	}
	
	if($("#mdp").val() == ""){
		$("#mdp").next(".erreur-sms").fadeIn().text("veuillez entrer voter Mot de passe");
		valid = false;
	}else if(!$("#mdp").val().match(/^[a-z0-9]+$/i)){
		$("#mdp").next(".erreur-sms").fadeIn().text("veuillez entrer une mot de passe valide");
		valid = false;
	}else if($("#mdp").val().length<6){
		$("#mdp").next(".erreur-sms").fadeIn().text("veuillez entrer un Mot de passe au minimaum 8 caractères ");
		valid = false;
	}else
	{
		$("#mdp").next(".erreur-sms").fadeOut();
	}
		return valid
	});
});

/*script inscription*/

$(function(){
	$("#inscrire").click(function(){
		valid = true;
	if($("#lastName").val() == ""){
		$("#lastName").next(".erreur-sms").fadeIn().text("veuillez entrer voter Nom");
		valid = false;
	}else if(!$("#lastName").val().match(/^[a-z]+$/i)){
		$("#lastName").next(".erreur-sms").fadeIn().text("veuillez entrer un Nom valide");
		valid = false;
	}else if($("#lastName").val().length<4){
		$("#lastName").next(".erreur-sms").fadeIn().text("veuillez entrer au minimaum 4 caractères ");
		valid = false;
	}else
	{
		$("#lastName").next(".erreur-sms").fadeOut();
	}	
	if($("#firstName").val() == ""){
		$("#firstName").next(".erreur-sms").fadeIn().text("veuillez entrer voter Prenom");
		valid = false;
	}else if(!$("#firstName").val().match(/^[a-z]+$/i)){
		$("#firstName").next(".erreur-sms").fadeIn().text("veuillez entrer un Prénom valide");
		valid = false;
	}else if($("#firstName").val().length<4){
		$("#firstName").next(".erreur-sms").fadeIn().text("veuillez entrer  au minimaum 4 caractères ");
		valid = false;
	}else
	{
		$("#firstName").next(".erreur-sms").fadeOut();
	}
	if($("#login").val() == ""){
		$("#login").next(".erreur-sms").fadeIn().text("veuillez entrer voter Psseudo");
		valid = false;
	}else if(!$("#login").val().match(/^[a-z0-9]+$/i)){
		$("#login").next(".erreur-sms").fadeIn().text("veuillez entrer un Psseudo valide");
		valid = false;
	}else if($("#login").val().length<4){
		$("#login").next(".erreur-sms").fadeIn().text("veuillez entrer  au minimaum 4 caractères ");
		valid = false;
	}else
	{
		$("#login").next(".erreur-sms").fadeOut();
	}
	if($("#Adresse").val() == ""){
		$("#Adresse").next(".erreur-sms").fadeIn().text("veuillez entrer voter Adresse");
		valid = false;
	}else if(!$("#Adresse").val().match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/)){
		$("#Adresse").next(".erreur-sms").show().text("veuillez entrer un Adresse valide");
		valid = false;
	}else
	{
		$("#Adresse").next(".erreur-sms").fadeOut();
	}
	if($("#tel").val() == ""){
		$("#tel").next(".erreur-sms").fadeIn().text("veuillez entrer voter Numero telephone");
		valid = false;
		
	}else if($("#tel").val().length!=10){
		$("#tel").next(".erreur-sms").fadeIn().text("veuillez entrer un Numero valide");
		valid = false;
	}else
	{
		$("#tel").next(".erreur-sms").fadeOut();
	}
	if($("#pwd1").val() == ""){
		$("#pwd1").next(".erreur-sms").fadeIn().text("veuillez entrer voter Mot de passe");
		valid = false;
	}else if(!$("#pwd1").val().match(/^[a-z0-9]+$/i)){
		$("#pwd1").next(".erreur-sms").fadeIn().text("veuillez entrer une mot de passe valide");
		valid = false;
	}else if($("#pwd1").val().length<8){
		$("#pwd1").next(".erreur-sms").fadeIn().text("veuillez entrer au minimaum 8 caractères ");
		valid = false;
	}else
	{
		$("#pwd1").next(".erreur-sms").fadeOut();
	}
		
		
		$(function(){
		$("#lastName").keyup(function(){
		valid = true;
	if(!$("#lastName").val().match(/^[a-z]+$/i)){
		$("#lastName").next(".erreur-sms").fadeIn().text("veuillez entrer un Nom valide");
		valid = false;
	}else
	{
		$("#lastName").next(".erreur-sms").hide().text("");
	}
	return valid; /*return valide empeche d'envoyer la formulaire s'il est vide*/
		
		});
		
				$("#firstName").keyup(function(){
		valid = true;
	if(!$("#firstName").val().match(/^[a-z]+$/i)){
		$("#firstName").next(".erreur-sms").fadeIn().text("veuillez entrer un Prénom valide");
		valid = false;
	}else
	{
		$("#firstName").next(".erreur-sms").hide().text("");
	}
	return valid; /*return valide empeche d'envoyer la formulaire s'il est vide*/
		
		});
		
				$("#login").keyup(function(){
		valid = true;
	if(!$("#login").val().match(/^[a-z0-9]+$/i)){
		$("#login").next(".erreur-sms").fadeIn().text("veuillez entrer un Psseudo valide");
		valid = false;
	}else
	{
		$("#login").next(".erreur-sms").hide().text("");
	}
	return valid; /*return valide empeche d'envoyer la formulaire s'il est vide*/
		
		});
		
				$("#Adresse").keyup(function(){
		valid = true;
		if(!$("#Adresse").val().match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/)){
		$("#Adresse").next(".erreur-sms").show().text("veuillez entrer un email valide ex:emaile gmail.com");
		valid = false;
	}
	else
	{
		$("#Adresse").next(".erreur-sms").hide().text("");
	}
	return valid; /*return valide empeche d'envoyer la formulaire s'il est vide*/
		
		});
		
		$("#pwd1").keyup(function(){
		valid = true;
		if($("#pwd1").val().length<8){
		$("#pwd1").next(".erreur-sms").fadeIn().text("veuillez entrer au minimaum 8 caractères ");
		valid = false;
	}else if(!$("#pwd1").val().match(/^[a-z0-9]+$/i)){
		$("#pwd1").next(".erreur-sms").fadeIn().text("veuillez entrer une mot de passe valide");
		valid = false;
	}
	else
	{
		$("#pwd1").next(".erreur-sms").fadeOut().text("");
	}
	return valid; /*return valide empeche d'envoyer la formulaire s'il est vide*/
		
		});
		
				$("#tel").keyup(function(){
		valid = true;
	if($("#tel").val().length!=10){
		$("#tel").next(".erreur-sms").show().text("veuillez entrer un numero avec 10 caractères");
		valid = false;
	}else
	{
		$("#tel").next(".erreur-sms").hide().text("");
	}
	return valid; /*return valide empeche d'envoyer la formulaire s'il est vide*/
		
		});
		
		});
		return valid; /*return valide empeche d'envoyer la formulaire s'il est vide*/
	});
});