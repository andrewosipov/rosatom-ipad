<?include "header.php";?>

  <div class="rosatom">
    <div class="login-form">
       <h1><?if( $lang=='ru' ):?>Войти в систему<?else:?>Login<?endif;?></h1>
       <div class="label"><?if( $lang=='ru' ):?>Логин<?else:?>Login<?endif;?></div>
       <div class="field"><input type="text" /></div>
       <div class="label"><?if( $lang=='ru' ):?>Пароль<?else:?>Password<?endif;?></div>
       <div class="field"><input type="password" /></div>
       <div class="butons"><a href="main.php<?if( $lang=='en' ):?>?lang=en<?endif;?>" class="button checkout"><?if( $lang=='ru' ):?>Войти<?else:?>Login<?endif;?></a></div>
    </div>
  </div>

<?include "footer.php";?>