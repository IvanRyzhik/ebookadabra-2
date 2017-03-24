<?php include_once('header.php');
  $EMAIL_USER = $_POST["email_user"];
?>

	<!-- <a id="mail_confirm_back"><img src="img/bt_back.png" height="65" width="64" alt="back" class="bt_back"></a> -->

	<section class="main_step step3">
		<header><h1>CONFIRMATION</h1></header>
		<p><span style="color:#ffd838;"><br/> <?php echo $EMAIL_USER;?>, </span></p><p><br/> we have sent you a confirmation email. </p>
		<p class="instructions">Please check your email (don't forget your spam) <br/>and tap on the button to launch your account.</p>
		<p><br/>If you don't find this mail, please tap on the button below. <br/><br/></p>
		<form action="" id="email_confirmation" method="post">
			<input type="hidden" name="email_user" value="<?php echo $EMAIL_USER;?>">
			<input type="image" src="img/bt_green_03.png" class="bt_submit">
		</form>
	</section>

	<div data-remodal-id="confmail_errormodal" id="modal-code">
	  	<button data-remodal-action="close" class="remodal-close"></button>
		<h2>JOIN US Error</h2>
		<img src="img/ico_error.png" height="82" width="82" alt="ERROR" class="ico_error">
	    <p>
	      Please check it and try again.  <br/>
	      If that fails please contact your code supplier or contact us at <a href="mailto:contact@moondogbooks.com" class="instructions">contact@moondogbooks.com</a>
	    </p>
	</div>
	
<?php $pager_active = 3; ?>
<?php include_once('footer.php'); ?>