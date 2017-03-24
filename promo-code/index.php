<?php include_once('header.php'); ?>

 
	<section class="main_step step1">
		<header><h1>PROMO CODE</h1></header>
		<p class="instructions">Please insert your promo code below<br/> to activate your membership.</p>
		<form action="" id="form_code"  method="post">
			<input type="text" maxlength="14" class="code_promo" name="code_promo">
			<input type="image" src="img/bt_green_01.png" class="bt_submit">
		</form>
	</section>


	<div data-remodal-id="modal" id="modal-code">
	  	<button data-remodal-action="close" class="remodal-close"></button>
		<h2>Code Invalid</h2>
		<img src="img/ico_error.png" height="82" width="82" alt="ERROR" class="ico_error">
	    <p>
	      We do not recognise this code.  <br/>
	      Please check it and try again.  <br/>
	      If that fails please contact your code supplier or contact us at <a href="mailto:contact@moondogbooks.com" class="instructions">contact@moondogbooks.com</a>
	    </p>
	</div>

	<div data-remodal-id="modal2" id="modal-terms">
	  	<button data-remodal-action="close" class="remodal-close"></button>
		<h2>Terms</h2>
	    <p>
	    	Lorem Ipsum
	    </p>
	</div>



<?php $pager_active = 1; ?>

<?php include_once('footer.php'); ?>