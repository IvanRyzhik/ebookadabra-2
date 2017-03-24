  <?php if(isset($pager_active)) : ?>
    <div id="pager_nav">
      <?php for ($i=1; $i < 4; $i++) : ?>
         <a href="" id="pager<?php echo $i; ?>" class="pager <?php if($pager_active === $i) echo 'active';?>"></a>
      <?php endfor; ?>
    </div>
  <?php endif; ?>
</div>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <script src="js/remodal.min.js"></script>
   <script src="js/jquery.redirect.js"></script>
   <script src="js/membership.js"></script>

</body>
</html>