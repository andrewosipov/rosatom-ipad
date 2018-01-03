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
  <div class="map"><?if( $lang=='ru' ):?><img src="images/map.png" alt="" /><?else:?><img src="images/map-en.png" alt="" /><?endif;?></div>
  
  <div class="header">
    <div class="container">
      <a href="/rosatom/" class="logo"><img src="images/logo.png" alt="" /></a>
      <ul class="menu">
        <!--<li><a href="" class="login"><?if( $lang=='ru' ):?>Вход<?else:?>Login<?endif;?></a></li>-->
        <li><a href=""><?if( $lang=='ru' ):?>Росатом<?else:?>Rosatom<?endif;?></a></li>
        <li><a href=""><?if( $lang=='ru' ):?>Подписка<?else:?>Subscribe<?endif;?></a></li>
      </ul>
      <ul class="lang">
        <li><a href="object.php" <?if( $lang=='ru' ):?>class="active"<?endif;?>>Rus</a></li>
        <li><a href="object.php?lang=en" <?if( $lang=='en' ):?>class="active"<?endif;?>>Eng</a></li>
      </ul>
    </div>
  </div>
  
  <div class="wrapper">

    <div class="rosatom-object">
       <div class="object-cont">
          <div class="_cont">      
             <h3><?if( $lang=='ru' ):?>Региональный центр во Франции<?else:?>The regional center in France<?endif;?></h3>
             <div class="param">
               <div class="item type"><?if( $lang=='ru' ):?>Поставки урановой продукции<?else:?>Uranium<?endif;?></div>
               <div class="item power"><?if( $lang=='ru' ):?>Мощность 100 млн. тонн в год<?else:?>100 Power Mill. Tonnes<?endif;?></div>
               <div class="item chart"><?if( $lang=='ru' ):?>12% поставок от всего экспорта<?else:?>supplies 12% of the total exports<?endif;?> </div>
               <div class="item fab"><?if( $lang=='ru' ):?>Инновации в производстве<?else:?>Innovation in manufacturing<?endif;?></div>
             </div>
             <div class="text">
                <img src="images/photo.jpg" alt="" class="photo" />   
             <?if( $lang=='ru' ):?>Госкорпорация «Росатом» открыла региональный центр в Западной Европе со штаб-квартирой в Париже. Об этом было объявлено в ходе первой выставки «World Nuclear Exhibition», которая проходит в Ле Бурже 13-16 октября. 
  
  Центр создан в виде дочернего общества «Русатом – международная сеть» - компании «Rosatom France», которая зарегистрирована в Париже. Перед компанией будет стоять задача по развитию международного бизнеса Дивизионов Росатома за счет выстраивания взаимовыгодного партнёрства с европейскими компаниями, поиску новых бизнес-возможностей.
            <?else:?>
            
            State Corporation "Rosatom" has opened a regional center in Western Europe, with headquarters in Paris. The announcement was made during the first exhibition «World Nuclear Exhibition», which takes place in Le Bourget 13-16 October.
  
   The center was established as a subsidiary company "Rusatom - international network" - the company «Rosatom France», which is registered in Paris. the task of International Business Development Divisions Rosatom will stand before the company by building mutually beneficial partnerships with European companies, seek new business opportunities.
            
            <?endif;?>
             
             </div>
            <div class="gallery">
              <a href="images/photo-2_.jpg" class="swipebox"><img src="images/photo-2.jpg" alt="" /></a>
              <a href="images/photo-3_.jpg" class="swipebox"><img src="images/photo-3.jpg" alt="" /></a>
              <a href="images/photo-4_.jpg" class="swipebox"><img src="images/photo-4.jpg" alt="" /></a>
              <a href="images/photo-6_.jpg" class="swipebox"><img src="images/photo-6.jpg" alt="" /></a>
             </div>
          </div>
       </div>
    </div>

  </div>
  <div class="footer"></div>
</body>
</html>