<?php include_once('header.php'); ?>

	<section class="main_step step2">
		<header><h1>JOIN US</h1></header>
		<p class="instructions"><br/>To join us please provide your email address and choose your password</p>
		<form action="" id="join_us" method="post">
		<div>
			<label for="youremail">Your email</label><input type="text" maxlength="128" name="youremail" value="mail.example@host.ext">
		</div>
		<div>
			<label for="yourpassword">Your password</label><input type="text" maxlength="128" name="yourpassword" value="MyAwesomePassword">
		</div>

		<label class='checkbox'>
		  <input type='checkbox' name="special_offers" checked="checked">
		  <span>Please send me special offers</span>
		</label>

		<label class='checkbox'>
		  <input type='checkbox' name="terms_conditions">
		  <span>I agree to the <a href="#" class="terms yellow" target="_blank">Terms &amp; Conditions</a></span>
		</label>

		<input type="image" src="img/bt_green_02.png" class="bt_submit bt_joinus">
		</form>
	</section>

	<div data-remodal-id="terms_modal" id="modal-load">
	  	<button data-remodal-action="close" class="remodal-close"></button>
	  	<p></p>
	</div>

	<div data-remodal-id="joinus_errormodal" id="modal-code">
	  	<button data-remodal-action="close" class="remodal-close"></button>
		<h2>JOIN US Error</h2>
		<img src="img/ico_error.png" height="82" width="82" alt="ERROR" class="ico_error">
	    <p>
	      Please check it and try again.  <br/>
	      If that fails please contact your code supplier or contact us at <a href="mailto:contact@moondogbooks.com" class="instructions">contact@moondogbooks.com</a>
	    </p>
	</div>


<?php $pager_active = 2; ?>
<?php include_once('footer.php'); ?>