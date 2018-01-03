<?include "header.php";?>

  <div class="rosatom">
    <div class="photo-container">
      <div class="photo saes active"><img src="images/photo-1.png" alt="" /></div>
      <div class="photo sir"><img src="images/photo-2.png" alt="" /></div>
      <div class="photo post"><img src="images/photo-3.png" alt="" /></div>
      <div class="photo servis"><img src="images/photo-4.png" alt="" /></div>
      <div class="photo producti"><img src="images/photo-5.png" alt="" /></div>
      <div class="photo post-topl"><img src="images/photo-6.png" alt="" /></div>
      <div class="photo geo"><img src="images/photo-7.png" alt="" /></div>
    </div>
    <div class="back"><img src="images/rosatom.png" alt="" /></div>
    <div class="center">
      <div class="cont saes active">
        <div class="title"><?if( $lang=='ru' ):?>15<span>из</span>24<?else:?>15<span>/</span>24<?endif;?></div>
        <div class="text"><?if( $lang=='ru' ):?>объектов возведено<?else:?>facilities built<?endif;?></div>
      </div>
      <div class="cont sir">
        <div class="title">18,6%<span></span></div>
        <div class="text"><?if( $lang=='ru' ):?>всей электро-<br />энергии<?else:?>of all electricity<?endif;?></div>
      </div>
      <div class="cont post">
        <div class="title">7,8<span><?if( $lang=='ru' ):?>тыс. тонн<?else:?>ths. tons<?endif;?></span></div>
        <div class="text"><?if( $lang=='ru' ):?>производ-ство урана<?else:?>uranium production<?endif;?></div>
      </div>
      <div class="cont servis">
         <div class="title"></div>
        <div class="text"><?if( $lang=='ru' ):?>развитие ядерной медицины<?else:?>the development of nuclear medicine<?endif;?></div>
      </div>
      <div class="cont producti">
        <div class="title"></div>
        <div class="text"><?if( $lang=='ru' ):?>лидер на мировом рынке<?else:?>leading position<?endif;?></div>
      </div>
      <div class="cont post-topl">
        <div class="title"></div>
        <div class="text"><?if( $lang=='ru' ):?>инновации во всех областях<?else:?>innovation in all areas<?endif;?></div>
      </div>
      <div class="cont geo">
        <div class="title"></div>
        <div class="text"><?if( $lang=='ru' ):?>маршевые ракетные двигатели<?else:?>marching rocket motors<?endif;?></div>
      </div>
    </div>
    <div class="menu">
      <a href="" class="saes active <?if( $lang=='en' ):?>tc<?endif;?>" data-name="saes"><?if( $lang=='ru' ):?>Сооружение АЭС<?else:?>Construction of NPP<?endif;?> </a>
      <a href="" class="sir"         data-name="sir"><?if( $lang=='ru' ):?>Сооружение <br />ИР и АСММ<?else:?>Construction of <br />IR and ASMM<?endif;?></a>
      <a href="" class="post tc"     data-name="post"><?if( $lang=='ru' ):?>Поставка<br />обогащенного<br />уранового<br />продукта<?else:?>Supply of enriched uranium product<?endif;?> </a>
      <a href="" class="bekend"      data-name="bekend">БЭК-ЭНД</a>
      <a href="" class="servis tc"   data-name="servis"><?if( $lang=='ru' ):?>Сервис и модернизация<?else:?>Service and modernization<?endif;?> </a>
      <a href="" class="producti tc" data-name="producti"><?if( $lang=='ru' ):?>Продукты и услуги<br />на основе<br />радиационных<br />технологий<?else:?>Products and services on the basis of radiation technologies<?endif;?> </a>
      <a href="" class="post-topl tc" data-name="post-topl"><?if( $lang=='ru' ):?>Поставки<br />ядерного<br />топлива<?else:?>Supplies of nuclear fuel<?endif;?> </a>
      <a href="" class="geo tc"      data-name="geo"><?if( $lang=='ru' ):?>Геологоразведка<br />и добыча урана<?else:?>Exploration and <br />extraction of uranium<?endif;?></a>
    </div>
    
    <!-- надпись справа сверху <?if( $lang=='ru' ):?><?else:?><?endif;?> -->
    <div class="note-rt">
      <div class="cont saes active">
        <div class="title">№<span>1</span></div>
        <div class="text"><?if( $lang=='ru' ):?>место по количеству сооружаемых АЭС за рубежом<?else:?>largest number of nuclear power plants constructed abroad<?endif;?></div>
      </div>
      <div class="cont sir">
        <div class="title"><span>3</span></div>
        <div class="text"><?if( $lang=='ru' ):?>место по объему добычи урана<?else:?>by volume of uranium mining<?endif;?></div>
      </div>
      <div class="cont post">
        <div class="title"><span>17</span>%</div>
        <div class="text"><?if( $lang=='ru' ):?>всего рынка ядерного топлива<?else:?>of the nuclear fuel market<?endif;?></div>
      </div>
      <div class="cont bekend">
       <div class="title"><span>36</span>%</div>
        <div class="text"><?if( $lang=='ru' ):?>мирового рынка ядерного топлива<?else:?>the global nuclear fuel market<?endif;?></div>
      </div>
      <div class="cont servis">
        <div class="title"><span>36</span>%</div>
        <div class="text"><?if( $lang=='ru' ):?>мирового рынка ядерного топлива<?else:?>the global nuclear fuel market<?endif;?></div>
      </div>
      <div class="cont producti">
        <div class="title"><span>44</span></div>
        <div class="text"><?if( $lang=='ru' ):?>строящихся энергоблоков: 8 - в России, 36 - за рубежом<?else:?>units under construction: 8 - in Russia, 36 - abroad<?endif;?></div>
      </div>
      <div class="cont post-topl">
        <div class="title"><span>78</span></div>
        <div class="text"><?if( $lang=='ru' ):?>атомных реакторов по всему миру<?else:?>nuclear reactors around the world<?endif;?></div>
      </div>
      <div class="cont geo">
        <div class="title"><span>2</span></div>
        <div class="text"><?if( $lang=='ru' ):?>место в мире по запасам урана<?else:?>in the world for uranium reserves<?endif;?></div>
      </div>
    </div>
    
    <!-- надпись слева снизу -->
    <div class="note-lb">      
      
      <div class="cont saes active">
        <div class="title"><span>400</span></div>
        <div class="text"><?if( $lang=='ru' ):?>предприятий и научных организаций<?else:?>enterprises and scientific organizations<?endif;?></div>
      </div>
      <div class="cont sir">
        <div class="title"><span>36</span>%</div>
        <div class="text"><?if( $lang=='ru' ):?>мирового рынка ядерного топлива<?else:?>the global nuclear fuel market<?endif;?></div>
      </div>
      <div class="cont post">
        <div class="title"><span>0</span></div>
        <div class="text"><?if( $lang=='ru' ):?>событий уровня 2 и выше по шкале INES<?else:?>event Level 2 or higher on the INES scale<?endif;?></div>
      </div>
      <div class="cont bekend">
        <div class="title"><span>70</span>ktn</div>
        <div class="text"><?if( $lang=='ru' ):?>открытий и инноваций<?else:?><?endif;?></div>
      </div>
      <div class="cont servis">
        <div class="title"><span>70</span></div>
        <div class="text"><?if( $lang=='ru' ):?>лет открытий и инноваций<?else:?>years of discovery and innovation<?endif;?></div>
      </div>
      <div class="cont producti">
        <div class="title"><span>10</span></div>
        <div class="text"><?if( $lang=='ru' ):?>действующих АЭС на территории России<?else:?>functioning AC<?endif;?></div>
      </div>
      <div class="cont post-topl">
        <div class="title"><span>0</span></div>
        <div class="text"><?if( $lang=='ru' ):?>ни одного серьезного нарушения<?else:?>no serious violations<?endif;?></div>
      </div>
      <div class="cont geo">
        <div class="title"><span>4</span></div>
        <div class="text"><?if( $lang=='ru' ):?>барьера ядерной безопасности АЭС<?else:?>nuclear Safety barrier NPP<?endif;?></div>
      </div>
    </div>
    
    <!-- слева сверху <?if( $lang=='ru' ):?><?else:?><?endif;?> -->
    <div class="note-lt">
      <div class="cont saes active">
        <div class="item" style="color:#f18e00;">
          <div class="title">400</div>
          <div class="text"><?if( $lang=='ru' ):?>предприятий и научных организаций<?else:?>enterprises and scientific organizations<?endif;?></div>
        </div>
        <div class="item" style="color:#fa274f;">
          <div class="title">36<span>%</span></div>
          <div class="text"><?if( $lang=='ru' ):?>мирового рынка<br />по богащению урана<?else:?>of the world market <br />for uranium enrichment<?endif;?></div>
        </div>
        <div class="item" style="color:#00a8ff;">
          <div class="title">18<span>%</span></div>
          <div class="text"><?if( $lang=='ru' ):?>всей электроэнергии<br />России<?else:?>of all electricity <br />Russia<?endif;?></div>
        </div>
        <div class="item" style="color:#9ea5ac;">
          <div class="title"><img src="images/cup.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
      </div>
      <div class="cont sir">
         <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#fff040;">
          <div class="title"><img src="images/port.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>5% от выручки тратится<br />на научные иследования<?else:?>5% of the revenue is spent <br /> on research<?endif;?></div>
        </div>
        <div class="item" style="color:#07bd99;">
          <div class="title"><img src="images/lab.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>10 действующих АЭС на территории России<?else:?>10 operating nuclear power plants in Russia<?endif;?></div>
        </div>
        <div class="item" style="color:#fff;">
          <div class="title">0</div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
      </div>
      <div class="cont post">
         <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#fff040;">
          <div class="title"><img src="images/port.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>5% от выручки тратится<br />на научные иследования<?else:?>5% of the revenue is spent <br /> on research<?endif;?></div>
        </div>
        <div class="item" style="color:#07bd99;">
          <div class="title"><img src="images/lab.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>10 действующих АЭС на территории России<?else:?>10 operating nuclear power plants in Russia<?endif;?></div>
        </div>
        <div class="item" style="color:#fff;">
          <div class="title">0</div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
      </div>
      <div class="cont servis">
         <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#07bd99;">
          <div class="title"><img src="images/lab.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>10 действующих АЭС на территории России<?else:?>10 operating nuclear power plants in Russia<?endif;?></div>
        </div>
      </div>
      <div class="cont producti">
         <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#07bd99;">
          <div class="title"><img src="images/lab.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>10 действующих АЭС на территории России<?else:?>10 operating nuclear power plants in Russia<?endif;?></div>
        </div>
        <div class="item" style="color:#fff;">
          <div class="title">0</div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
      </div>
      <div class="cont post-topl">
         <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#fff;">
          <div class="title">0</div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
      </div>
      <div class="cont geo">
          <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#fff040;">
          <div class="title"><img src="images/port.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>5% от выручки тратится<br />на научные иследования<?else:?>5% of the revenue is spent <br /> on research<?endif;?></div>
        </div>
        <div class="item" style="color:#fff;">
          <div class="title">0</div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
      </div>
    </div>
    
    <!-- надписи справа снизу <?if( $lang=='ru' ):?><?else:?><?endif;?> -->
    <div class="note-rb">
      <div class="cont saes active">
        <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#fff040;">
          <div class="title"><img src="images/port.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>5% от выручки тратится<br />на научные иследования<?else:?>5% of the revenue is spent <br /> on research<?endif;?></div>
        </div>
        <div class="item" style="color:#07bd99;">
          <div class="title"><img src="images/lab.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>10 действующих АЭС на территории России<?else:?>10 operating nuclear power plants in Russia<?endif;?></div>
        </div>
        <div class="item" style="color:#fff;">
          <div class="title">0</div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
      </div>
      <div class="cont sir">
         <div id="cont-sir" style="width: 250px; height: 300px;"></div>
      </div>
      <div class="cont post">
         <div id="cont-post" style="width:250px; height:300px;"></div>
         <div class=""><?if( $lang=='ru' ):?>Добыча урана в Восточном блоке<?else:?>Uranium mining in the Eastern Bloc<?endif;?></div>
      </div>
      <div class="cont servis">
        <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#07bd99;">
          <div class="title"><img src="images/lab.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>10 действующих АЭС на территории России<?else:?>10 operating nuclear power plants in Russia<?endif;?></div>
        </div>
      </div>
      <div class="cont producti">
         <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#fff040;">
          <div class="title"><img src="images/port.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>5% от выручки тратится<br />на научные иследования<?else:?>5% of the revenue is spent <br /> on research<?endif;?></div>
        </div>
        <div class="item" style="color:#07bd99;">
          <div class="title"><img src="images/lab.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>10 действующих АЭС на территории России<?else:?>10 operating nuclear power plants in Russia<?endif;?></div>
        </div>
        <div class="item" style="color:#fff;">
          <div class="title">0</div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
      </div>
      <div class="cont post-topl">
         <div id="post-topl" class="chart" style="width: 300px; height: 250px;"></div>
      </div>
      <div class="cont geo">
        <div class="item" style="color:#00a8ff;">
          <div class="title"><img src="images/cup-1.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
        <div class="item" style="color:#fff040;">
          <div class="title"><img src="images/port.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>5% от выручки тратится<br />на научные иследования<?else:?>5% of the revenue is spent <br /> on research<?endif;?></div>
        </div>
        <div class="item" style="color:#07bd99;">
          <div class="title"><img src="images/lab.png" alt="" /></div>
          <div class="text"><?if( $lang=='ru' ):?>10 действующих АЭС на территории России<?else:?>10 operating nuclear power plants in Russia<?endif;?></div>
        </div>
        <div class="item" style="color:#fff;">
          <div class="title">0</div>
          <div class="text"><?if( $lang=='ru' ):?>0 событий уровня 2 и выше по шкале INES<?else:?>0 Layer 2 and above events<br />on the INES scale<?endif;?></div>
        </div>
      </div>
    </div>
    
    <div class="note-bc">
      <a href="object.php<?if( $lang=='en' ):?>?lang=en<?endif;?>" class="to-object"><?if( $lang=='ru' ):?>Перейти к объекту<?else:?>Go to Object<?endif;?></a>
      <!--<div class="item" style="color:#fff;">
        <div class="title">400</div>
        <div class="text">предприятий и<br />научных организаций</div>
      </div>
      <div class="item" style="color:#fff;">
        <div class="title">36<span>%</span></div>
        <div class="text">мирового рынка<br />по обогащению урана</div>
      </div> -->
    </div>
    
  </div>

<?include "footer.php";?>