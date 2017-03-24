jQuery(document).ready(function($) {

	//var baseWS_URL = "http://52.49.144.106/backend/index.php/wspromocode_dev/";
	var baseWS_URL = 'http://52.50.225.44/backend/index.php/wspromocode_prod/';

	function getParameterByName(name, url) 
	{
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var serializedData = '';
	var url = '';


	//==========================================================
	//
	//      INDEX - HOME = PROMO CODE screen
	//
	//==========================================================
	// INITIALISATION POPUP ERREUR
	var inst = $('[data-remodal-id=modal]').remodal();
	var inst2 = $('[data-remodal-id=modal2]').remodal();

	//---- If User close the Modal MODAL2 from HOME = INDEX.PHP
	//---- navigate to [url] (= join_us)
	//--------------------------------------------------------
	if (inst2) 
	{
		$(document).on('closing', inst2, function (e) 
		{
			 window.location.href = url;
	
		});
	} 
	 
	//---------------------------------------------
	// screen 1 : PROMO CODE CLICK BUTTON
	//---------------------------------------------
	var check_code_clicked = false;
	
	$('#form_code .bt_submit').click(function(e) {
		e.preventDefault();

		if (check_code_clicked) 
		{
			return;
		}
		url = "";
		
		check_code_clicked = true;

		serializedData = $('#form_code').find('input, textarea, select').not(':checkbox').serialize();
		console.log(serializedData);
		
		$.ajax({ 
			type: 'POST',
		 	crossDomain: true,
		    data : serializedData, 
			url: baseWS_URL + 'FamilyRegisterCheckVoucherCode',
		    timeout: 120000,
       		success: function(data, text, xhr)
			{
				check_code_clicked = false;
	
				if (! data.code) 
				{
					data = $.parseJSON(data);
				}
				console.log(data);
          		if (data.code == 200) 
				{
				   console.log("success");
	        	   url = "join_us.php?token=" + data.result;
	        	   console.log (" URL=" + url);	        	   
	        	   window.location.href = url;
				}
				else
				{
				 	if (data.code == 201)
					{
						titre = "Unknown promo code";
					}
					else if (data.code == 202)
					{
						titre = "This promo code is terminated, please try another or contact our support.";
					}
					else
					{
						titre = "Server error with this promo code <br/> Please try again or contact our support.";
					}
					$('#modal-code h2').html("PROMO CODE ERROR");
					$('#modal-code p').html(titre);
					inst.open();
				}
			  	
			},
		
		   error: function(resultat, statut, erreur)
            {
	          check_code_clicked = false;
	          console.log("*** ERROR ***");
              console.log(resultat);
              titre = "Critical Server error <br/> Please try again or contact our support.";
			  $('#modal-code h2').html("PROMO CODE ERROR" );
			  $('#modal-code p').html(titre);
			  inst.open();
	        }	
		});
	

	});
		
		
	//==========================================================
	//
	//      SCREEN 2 - JOIN US 
	//
	//==========================================================

	$('input[name=youremail], input[name=yourpassword]').focusin(function(event) {
		if(this.value === 'mail.example@host.ext') this.value = '' ;
		if(this.value === 'MyAwesomePassword') this.value = '' ;
	});

	$('input[name=youremail], input[name=yourpassword]').focusout(function(event) {
		if(this.value === '' && this.name === 'youremail') this.value = 'mail.example@host.ext' ;
		if(this.value === '' && this.name === 'yourpassword') this.value = 'MyAwesomePassword' ;
	});


	// ADD POP UP MODAL TERMS & CONDITIONS
	var terms = $('[data-remodal-id=terms_modal]').remodal();
	if (terms)
	{
		$('.terms').click(function(e) {
			e.preventDefault();
			$('#modal-load').load('../terms-and-conditions-in-app.html #termsandconditions',
			function() {
				terms.open();
			});
	
		});
	}

	
	//---- If User close the Modal MODAL2 from HOME = INDEX.PHP
	//---- navigate to [url] (= join_us)
	//--------------------------------------------------------
	var joinus_error_popup = $('[data-remodal-id=joinus_errormodal]').remodal();
	if (joinus_error_popup) 
	{
		$(document).on('closing', joinus_error_popup, function (e) {
			if (url.length > 0)
			{
				window.location.href = url;
			}
		});
	}
	
	var join_us_clicked = false;

	//---------------------------------------------
	//  SUBMIT CLICK BUTTON
	//---------------------------------------------
	$('#join_us .bt_submit').click(function(e) {
		e.preventDefault();

		url = "";
		console.log("CLICK SUBMIT");
		if (join_us_clicked) 
		{
			console.log ("CLICK ALREADY DONE");
			return;
		}

		join_us_clicked = true;
		token = getParameterByName("token");
		inputData = $('#join_us').find('input, textarea');
		serializedData = inputData.serialize();
		serializedData = serializedData + "&token=" + token
		serializedData = serializedData.replace("%40","@");
	
		var inputData2 = $('#join_us').find('input:checkbox');
		var serializedChecked = inputData2.serialize();

		//console.log("CHECKED : " + serializedChecked);
		//CHECKED : special_offers=on&terms_conditions=on
		var possep = serializedChecked.indexOf("&");
		var pos = serializedChecked.indexOf("special_offers");
		var spec_offers
		var terms
		
		if (pos < 0)
		{
			spec_offers = "off";
		}
		else
		{
			if (possep < 0)
			{
				spec_offers = serializedChecked.substr(15,serializedChecked.length-15+1);
			}
			else
			{
				spec_offers = serializedChecked.substr(15,possep-16+1).toLowerCase();
			}
		}
		var pos = serializedChecked.indexOf("terms_conditions");
		if (pos < 0)
		{
			terms = "off";
		}
		else
		{
			if (possep < 0)
			{
				terms = serializedChecked.substr(17,serializedChecked.length-17);
			}
			else
			{
				terms = serializedChecked.substr(possep+18,serializedChecked.length-possep-17).toLowerCase();
			}
			
		}
		console.log("Spec offers => ***" + spec_offers + "***");
		console.log("TERMS => ***" + terms + "****")
		
		if (terms != "on")
		{
			$('#modal-code h2').html("TERMS AND CONDITIONS");
			$('#modal-code p').html('Please agree to our Terms & Conditions.');
			url = "";
				join_us_clicked = false;
			joinus_error_popup.open();
			return;
	
		}		
				
		if (spec_offers == "on")
		{
			serializedData = serializedData + "&special_offers=1";
		}
		else
		{
			serializedData = serializedData + "&special_offers=0";
		}		
		
		
		
		pos = serializedData.indexOf("yourpassword");
		var email_user = serializedData.substr(10,pos-11).toLowerCase();
		console.log("email user :" + email_user);
		console.log("SERIALIZED DATA ==> " + serializedData);

		
		$.ajax({ 
			type: 'POST',
		 	crossDomain: true,
		    data : serializedData, 
			url: baseWS_URL + 'FamilyRegisterMail',
		    timeout: 120000,
       		success: function(data, text, xhr)
			{
				join_us_clicked = false;
		       	if (! data.code) 
				{
					data = $.parseJSON(data);
				}
				console.log(data);
          		if (data.code == 200) 
				{
				   console.log("success");
				   console.log(data);
	        	   url = "email_confirmation.php?token=" + data.result;
	        	   console.log (" URL=" + url);	        	   
	        	   $.redirect(url,
          			{
           				email_user : email_user
			    	});
			
				   //window.location.href = url;
				   //inst2.open();
				}
				else
				{
				 	if (data.code == 421)
					{
						message = "your session is terminated, please try again";
						url = "index.php";
					}
					else if (data.code == 201)
					{
						message = "Wrong promo code, please try another or contact our support.";
						url = "index.php";
					}
					else if (data.code == 202)
					{
						message = "This promo code is terminated, please try another or contact our support.";
						url = "index.php";
					}
					else if (data.code == 215)
					{
						message = "password need to have more than 3 characters.";
						url = "";
					}
					else if (data.code == 431)
					{
						message = "An account exists already with this mail, please try again or contact our support.";
						url = "";
					}
					else if (data.code == 451)
					{
						message = "Error while sending the mail, please try again or contact our support.";
						url = "";
					}
					else
					{
						message = "Server error with this promo code <br/> Please try again or contact our support.";
						url = "";
					}
					$('#modal-code h2').html("PROMO CODE ERROR");
					$('#modal-code p').html(message);
					joinus_error_popup.open();
				}
			  	
			},
		
		   error: function(resultat, statut, erreur)
            {
				join_us_clicked = false;
              console.log("*** ERROR ***");
              console.log(resultat);
              console.log(statut);
              console.log(erreur);
              url = "";
              message = "Critical Server error <br/> Please try again or contact our support.";
			  $('#modal-code h2').html("PROMO CODE ERROR" );
			  $('#modal-code p').html(message);
			  joinus_error_popup.open();
	        }	
		});
			
		
	});



	//==========================================================
	//
	//      SCREEN 3 - MAIL CONFIRMATION  
	//
	//==========================================================
	var token = ""
	var email_user = ""
	var confmail_error_popup = $('[data-remodal-id=confmail_errormodal]').remodal();
	if( confmail_error_popup) 
	{
		$(document).on('closing', confmail_error_popup, function (e) {
		 //---- Nothing to do
			if (url.length > 0)
			{
			 $.redirect(url,
				{ 
					email_user : email_user
				});
			}
		}); 
	}
		
	var mail_send_again_clicked = false;
	
	//-------------------------------------------------
	// CLICK on BUTTON =>  SEND MAIL AGAIN
	//-------------------------------------------------
	$('#email_confirmation .bt_submit').click(function(e) 
	{
		e.preventDefault();

		url = "";
		if (mail_send_again_clicked) 
		{
			console.log("CLICK in PROCESS");
			return;
		}
		
		mail_send_again_clicked = true;
		token = getParameterByName("token");
		console.log("token=" + token);
		inputData = $('#email_confirmation').find('input, textarea, select').not(':checkbox');
		serializedData = inputData.serialize().replace("%40","@");
		console.log(serializedData);
	 	//	var pos = serializedData.indexOf("yourpassword");
		 email_user = serializedData.substr(11,serializedData.length-11).toLowerCase();
		console.log("email user :" + email_user);
	
		$.ajax({ 
			type: 'POST',
		 	crossDomain: true,
		    data : "token=" +token, 
			url: baseWS_URL + 'FamilyRegisterSendMailAgain',
		    timeout: 120000,
       		success: function(data, text, xhr)
			{
				mail_send_again_clicked = false;
		       	if (! data.code) 
				{
					data = $.parseJSON(data);
				}
				console.log(data);
          		if (data.code == 200) 
				{
				   console.log("success - sent mail again");
				   console.log(data);
				   token = data;
		    		url = "email_confirmation.php?token=" + token;
				   var message = "Mail sent with success.";
				   $('#modal-code h2').html("MAIL SENT");
					$('#modal-code p').html(message);
					confmail_error_popup.open();
	        	}
				else
				{
					var message = ""
				 	if (data.code == 421)
					{
						message = "your session is terminated, please try again";
						url = "index.php";
					}
					else if (data.code == 413)
					{
						message = "Wrong token, please try again or contact our support.";
						url = "index.php";
					}
					else if (data.code == 441)
					{
						message = "we were unabled to re-send the mail, please try again or contact our support.";
						url = "";
					}
					else
					{
						message = "Server error <br/> Please try again or contact our support.";
						url = "";
					}
					$('#modal-code h2').html("CONFIRMATION MAIL ERROR");
					$('#modal-code p').html(message);
					confmail_error_popup.open();
				}
			  	
			},
		
		   error: function(resultat, statut, erreur)
            {
              mail_send_again_clicked = false; 
              console.log("*** ERROR ***");
              console.log(resultat);
              console.log(statut);
              console.log(erreur);
              message = "Critical Server error <br/> Please try again or contact our support.";
			  $('#modal-code h2').html("SEND MAIL ERROR" );
			  $('#modal-code p').html(message);
			  confmail_error_popup.open();
	        }	
		});
			
	});
	
	
	/*
	$('#mail_confirm_back .bt_back').click(function(e) 
	{
		token = getParameterByName("token");
		url = "join_us.php?token=" + token;
		console.log (" URL=" + url);	        	   
	    window.location.href = url;
	});

 	*/


});

