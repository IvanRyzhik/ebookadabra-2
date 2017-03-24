jQuery(document).ready(function($) {

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


	var membership_error_popup = $('[data-remodal-id=membership_errormodal]').remodal();
	$(document).on('closing', membership_error_popup, 
		function (e) 
		{
	 		if (url.length > 0)
	 		{
	  		//	window.location.href = url;
	  		}
		});
		
		
	//==========================================================
	//
	//      MEMBER SHIP
	//
	//==========================================================
	//  message = "test to check that automatic treatment is in process.";
	//  $('#modal-code h2').html("SIMULATION - in process" );
	//  $('#modal-code p').html(message);
	//  membership_error_popup.open();
	 
	token = getParameterByName("token");
	var serializedData = "token=" + token;
	console.log(serializedData);
	
	$.ajax({ 
		type: 'POST',
		crossDomain: true,
		data : serializedData, 
		url: 'http://52.50.225.44/backend/index.php/wspromocode_prod/FamilyRegisterFinalStep',
		timeout: 120000,
		success: function(data, text, xhr)
		{
			if (! data.code) 
			{
				data = $.parseJSON(data);
			}
			console.log(data);
			if (data.code == 200) 
			{
			   console.log("**** FINAL SUCCESS ***");
			   console.log(data);
			   url = "congratulations.php";
			   console.log (" URL=" + url);	        	   
			   $.redirect(url,
			   {
			   	email_user : data.result
			   	});
				//var message = "We have finalized your membership.\nPlease close this pop up and follow the indications";
				//$('#modal-code h2').html("MEMBERSHIP CONFIRMERD");
				//$('#modal-code p').html(message);
				//membership_error_popup.open();
			}
			
			else
			{
				if (data.code == 421)
				{
					message = "your session is terminated, please try again";
					url = "index.php";
				}
				else if (data.code == 413)
				{
					message = "Wrong token,\n please try again or contact our support.";
					url = "index.php";
				}
				if (data.code == 201)
				{
					message = "Unknown promo code";
				}
				else if (data.code == 202)
				{
					message = "This promo code is terminated.\n Please try another or contact our support.";
					url = "index.php";
				}
				else if ((data.code == 431) || (data.code == 441))
				{
					message = "Error during server registration.\n Please try again or contact our support.";
					url = "";
				}
				else
				{
					message = "Server error during finale registration.<br/> Please try again or contact our support.<br/><br/> Error Code =" + data.code;
					url = "index.php";
				}
				$('#modal-code h2').html("MEMBERSHIP ERROR");
				$('#modal-code p').html(message);
				membership_error_popup.open();
			}
		},
	
	   error: function(resultat, statut, erreur)
		{
		  console.log("*** ERROR ***");
		  console.log(resultat);
		  console.log(statut);
		  console.log(erreur);
		  message = "Critical Server error <br/> Please try again or contact our support.";
		  $('#modal-code h2').html("MEMBERSHIP  ERROR" );
		  $('#modal-code p').html(message);
		  membership_error_popup.open();
		}	
	});
	
	
	
});


//==========================================================
//
//     MEMBER SHIP
//
//==========================================================

