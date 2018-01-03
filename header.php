<!DOCTYPE html lang="ru">
<html>
<head>
  <meta name="viewport" content="width=1366">
  <title>ROSATOM</title>
  <link href="fonts/firasans.css" type="text/css" rel="stylesheet" />
  <link rel="stylesheet" href="css/swipebox.css">
  <link href="css/style.css" type="text/css" rel="stylesheet" />
  <link href="css/media.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="js/jquery.js"></script>
  <script src="js/jquery.swipebox.min.js"></script>
  <script type="text/javascript" src="js/lightbox.js"></script>
  <script src="js/amcharts.js" type="text/javascript"></script>
  <script src="js/serial.js" type="text/javascript"></script>
  <script src="js/pie.js" type="text/javascript"></script>
  <script type="text/javascript" src="js/script.js"></script>
  <script type="text/javascript">
    var lang="<?if( $_REQUEST['lang']=='en' ):?>en<?else:?>ru<?endif;?>";
  </script>
  <?
    if( $_REQUEST['lang']=='en' ){ $lang="en"; }
    else{ $lang='ru'; }
  ?>
</head>
<body class="index-page">
  <div class="globe"><img src="images/globe.png" alt="" /> </div>
  
  <div class="header">
    <div class="container">
      <a href="/rosatom/" class="logo"><img src="images/logo.png" alt="" /></a>
      <ul class="menu">
        <!--<li><a href="" class="login"><?if( $lang=='ru' ):?>Вход<?else:?>Login<?endif;?></a></li>-->
        <li><a href=""><?if( $lang=='ru' ):?>Росатом<?else:?>Rosatom<?endif;?></a></li>
        <li><a href=""><?if( $lang=='ru' ):?>Подписка<?else:?>Subscribe<?endif;?></a></li>
      </ul>
      <ul class="lang">
        <li><a href="main.php" <?if( $lang=='ru' ):?>class="active"<?endif;?>>Rus</a></li>
        <li><a href="main.php?lang=en" <?if( $lang=='en' ):?>class="active"<?endif;?>>Eng</a></li>
      </ul>
    </div>
  </div>
  
  <div class="wrapper">
