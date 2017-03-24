<?php include_once('header.php'); ?>

	<section class="main_step step1">
		<header><h1>MEMBERSHIP</h1></header>
		<p class="instructions">Please wait<br/><?php echo $EMAIL_USER;?></p>
		<div class="hourglass">
			<img src="img/ico_hourglass.png" height="121" width="98" alt="">
			<p>Membership in progress...</p>
		</div>
	</section>

	<div data-remodal-id="membership_errormodal" id="modal-code">
	  	<button data-remodal-action="close" class="remodal-close"></button>
		<h2>MEMBERSHIP Error</h2>
		<img src="img/ico_error.png" height="82" width="82" alt="ERROR" class="ico_error">
	    <p>
	      Please check it and try again.  <br/>
	      If that fails please contact your code supplier or contact us at <a href="mailto:contact@moondogbooks.com" class="instructions">contact@moondogbooks.com</a>
	    </p>
	</div>
	
	
<?php $pager_active = 3; ?>
<?php include_once('footer_membership.php'); ?>