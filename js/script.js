var core={};
var globe={};
var rosatom={};
var object={};

$(document).ready(function(){
	
	screen_info();
	prepare_globe();
	prepare_rosatom();
	prepare_object();
	prepare_charts();
	
	$('.menu a').click(function(){ return false; })
	
	$('.login').click(function(){
		if( $('.login-form').length>0 ) return false;
		var html='';
		if( lang=='ru' ){ html+='<div class="login-form"><h1>Войти в систему</h1>'; }
		else{ html+='<div class="login-form"><h1>Login</h1>'; }
		if( lang=='ru' ){ html+='<div class="label">Логин</div>'; }
		else{ html+='<div class="label">Username</div>'; }
		html+='<div class="field"><input type="text" /></div>';
		if( lang=='ru' ){ html+='<div class="label">Пароль</div>'; }
		else{ html+='<div class="label">Password</div>'; }
		html+='<div class="field"><input type="password" /></div>';
		html+='<div class="butons">';
		if( lang=='ru' ){ html+='<a href="" class="button checkout">Войти</a></div>'; }
		else{ html+='<a href="" class="button checkout">Login</a></div>';; }
			
		html+='</div>';
		html+='</div>';
		var lightBox = new _lightBox({ 
			simpleMode:!true,  
			mobile:true,
			autosize:false,				
			width:250, 
			height:50,
			padding:'0',
			//steps:[step1],
			html:html,
			complete:function(){
				//$('.lightbox-content .cart-content')
				$('.lightbox-content .continue').click(function(){ lightBox.close(); return false; })
			}
		})
	})
	
})

// знак росатом по центру  -  rosatom logo by center
function prepare_rosatom(){
	var newWidth, newHeight, left, top;
	
	newWidth  = rosatom.realWidth;
	newHeight = rosatom.realHeight;
	left = core.centerX - Math.ceil(rosatom.realWidth/2); 
	top  = core.centerY - Math.ceil(rosatom.realHeight/2)+30;	
	
	rosatom.rosatom.css({ width:newWidth, height:newHeight, left:left, top:top });
	rosatom.rosatomBackImg.css({ width:newWidth, height:newHeight });
	rosatom.width  = newWidth;
	rosatom.height = newHeight;
	rosatom.left   = left;
	rosatom.top    = top;
	
	prepare_rosatom_photo();
	prepare_rosatom_center();
	prepare_rosatom_menu();
}
  
// объект по центру   -  object by center
function prepare_object(){
	var newWidth, newHeight, left, top;
	
	newWidth  = object.realWidth;
	newHeight = object.realHeight;
	
	
	
	left = core.centerX - Math.ceil(object.realWidth/2)+120; 
	top  = core.centerY - Math.ceil(object.realHeight/2);

	if( newHeight>core.w_height-250 ){ 
		newHeight=core.w_height-250;
		top  = 180;		
	}	
	
	object.object.css({ width:newWidth, height:newHeight, left:left, top:top });
	object.objectCont.css({ width:newWidth-40, height:newHeight-40 });
	object.width  = newWidth;
	object.height = newHeight;
	object.left   = left;
	object.top    = top;
	
	$( '.swipebox' ).swipebox();
	
	//prepare_rosatom_photo();
	//prepare_rosatom_center();
	//prepare_rosatom_menu();
}

function prepare_rosatom_menu(){
	var cx = Math.ceil(rosatom.width/2), cy = Math.ceil(rosatom.height/2);
	
	rosatom.rosatom.find('.menu .saes').css({ left:cx-40, top:33, width:120 });
	rosatom.rosatom.find('.menu .sir').css({ left:cx+50, top:80, width:120 });
	rosatom.rosatom.find('.menu .post').css({ left:cx+97, top:184, width:105 });
	rosatom.rosatom.find('.menu .bekend').css({ left:cx+134, top:280, width:75 });
	rosatom.rosatom.find('.menu .servis').css({ left:cx+44, top:365, width:105 });
	rosatom.rosatom.find('.menu .producti').css({ left:cx-114, top:355, width:135 });
	rosatom.rosatom.find('.menu .post-topl').css({ left:cx-220, top:235, width:85 });
	rosatom.rosatom.find('.menu .geo').css({ left:cx-180, top:115, width:125 });
	
	rosatom.rosatom.find('.menu a').click(function(){
		$('.menu .active').removeClass('active');
		$(this).addClass('active');
		
		// анимация числа справа
		$('.note-rt .active').removeClass('active');
		var num1=$('.note-rt .cont.'+$(this).data('name') ).find('.title').text();
		$('.note-rt .cont.'+$(this).data('name') ).addClass('active');
		if( parseInt(num1)>1 ){
			$('.note-rt .cont.'+$(this).data('name')+' .title span' ).animateNumber(
				{
					number: parseInt(num1),
					easing: 'easeInQuad', 
					numberStep: function(now, tween) {
						var floored_number = Math.floor(now),
						target = $(tween.elem);
						target.text(floored_number);
					}
				},
				500
			);	
		}		
		$('.note-rt .cont.'+$(this).data('name')+' .text' ).css({ opacity:0 }).animate({ opacity:1 }, 700 );
		
		// анимация текста по середине -  animate of a text on center
		$('.rosatom .center .active').removeClass('active');
		$('.rosatom .center .cont.'+$(this).data('name') ).addClass('active');
		$('.rosatom .center .cont.'+$(this).data('name') ).css({ opacity:0 }).animate({ opacity:1 }, 700 );
		
		// анимация числа слева снизу -  animate of a number bellow
		$('.note-lb .active').removeClass('active');
		$('.note-lb .cont.'+$(this).data('name') ).addClass('active');
		$('.note-lb .cont.'+$(this).data('name')+' .text' ).css({ opacity:0 }).animate({ opacity:1 }, 700 );
		
		var num2=$('.note-lb .cont.'+$(this).data('name') ).find('.title').text();
		if( parseInt(num2)>1 ){
			$('.note-lb .cont.'+$(this).data('name')+' .title span' ).animateNumber(
				{
					number: parseInt(num2),
					easing: 'easeInQuad', 
					numberStep: function(now, tween) {
						var floored_number = Math.floor(now),
						target = $(tween.elem);
						target.text(floored_number);
					}
				},
				500
			);	
		}

		// анимация надписей справа снизу  -  animation of labels on left-bottom
		$('.note-rb .active').fadeOut(function(){ $(this).removeClass('active'); })
		$('.note-rb .cont.'+$(this).data('name') ).fadeIn(function(){ $(this).addClass('active'); })
		
		// анимация надписей слева сверху -  animation of labels on left-top
		$('.note-lt .active').fadeOut(function(){ $(this).removeClass('active'); })
		$('.note-lt .cont.'+$(this).data('name') ).fadeIn(function(){ $(this).addClass('active'); })
		
		//анимация фото по центру  -  animation of foto on center
		$('.photo-container .photo.active').fadeOut(function(){ $(this).removeClass('active'); })
		$('.photo-container .photo.'+$(this).data('name') ).fadeIn(function(){ $(this).addClass('active'); })
		
		/*var text=$('.note-rt .cont.'+$(this).data('name')+' .text' ).text();
		if( text=='' ){ 
			//alert( $('.note-rt .cont.'+$(this).data('name')+' .text' ).data('text') ); 
			text=$('.note-rt .cont.'+$(this).data('name')+' .text' ).data('text'); 
		}
		
		$('.note-rt .cont.'+$(this).data('name')+' .text' ).text('').data('text',text)
		.typed({
            strings: [ text ]
        });*/
		
		return false;
	})
	
}

function prepare_rosatom_center(){
	var width = 213, height = 213, ratio = 0.206;
	var new_width = Math.ceil(rosatom.width*ratio), new_height = Math.ceil(rosatom.width*ratio);
	var left = Math.ceil((rosatom.width-new_width)/2), top = Math.ceil((rosatom.height-new_height)/2);
	rosatom.rosatomCenter.css({ width:new_width, height:new_height, left:left, top:top });
}

function prepare_rosatom_photo(){
	var width = 1034, height = 1034, w_ratio = 0.91683, h_ratio = 0.91771, l_ratio = 0.58124, t_ratio = 0.04065;
	var new_width = Math.ceil(rosatom.width*w_ratio), new_height = Math.ceil(rosatom.height*h_ratio);
	var left = 0//Math.ceil(43*l_ratio);
	var top  = 0//Math.ceil(42*t_ratio);
	rosatom.rosatomPhotoContainer.css({ width:rosatom.width, height:rosatom.height });
	rosatom.rosatomPhotoImg.css({ width:rosatom.width, height:rosatom.height });
}

// глобус на фоне  -  earth on background
function prepare_globe(){	
	var newWidth, newHeight, left, top;
	
	if( core.orientation == 'landscape' ){
		if( core.w_height<globe.realHeight ){  //alert('fdf') 
			newHeight = core.w_height+94;
			newWidth = globe.width*newHeight/globe.height;
			if( core.w_width<newWidth  ){ //alert('fdf') 
				
			}
		}
		if( core.w_height>globe.realHeight ){
			newWidth = globe.realWidth;
			newHeight = globe.realHeight;
		}
	}
	
	if( core.orientation == 'portrait' ){
		if( core.w_width<globe.realWidth ){
			newWidth = core.w_width+94;
			newHeight = globe.height*newWidth/globe.width;
		}
	}
	
	left = core.centerX - Math.ceil(newWidth/2); 
	top  = core.centerY - Math.ceil(newHeight/2);	
	globe.globe.css({ width:newWidth, height:newHeight, left:left, top:top });
	globe.globeImg.css({ width:newWidth, height:newHeight });
	
	globe.width  = newWidth;	
	globe.height = newHeight;
	globe.left 	 = left; 		
	globe.top 	 = top;
}

function screen_info(){ // for responsive
	core.w_width  = $(window).width();
	core.w_height = $(window).height();
	
	if( core.w_width>core.w_height ){ core.orientation = 'landscape'; }
	if( core.w_width<core.w_height ){ core.orientation = 'portrait'; }
	if( core.w_width==core.w_height ){ core.orientation = 'square'; }
	
	core.centerX = Math.ceil(core.w_width/2);
	core.centerY = Math.ceil(core.w_height/2);
	
	globe.realWidth   = 1630; 
	globe.realHeight  = 1630;
	globe.width  = globe.realWidth;
	globe.height = globe.realHeight;
	
	globe.globe = $('.globe');
	globe.globeImg = $('.globe img');
	
	rosatom.realWidth   = 487; 
	rosatom.realHeight  = 477;
	
	rosatom.rosatom = $('.rosatom');
	rosatom.rosatomBack    = $('.rosatom .back');
	rosatom.rosatomBackImg = $('.rosatom .back img');
	
	rosatom.rosatomPhotoContainer = $('.rosatom .photo-container');
	rosatom.rosatomPhotoImg = $('.rosatom .photo-container img');
	
	rosatom.rosatomCenter = $('.rosatom .center');
	
	object.realWidth   = 787; 
	object.realHeight  = 607;
	object.object = $('.rosatom-object');
	object.objectCont = $('.rosatom-object ._cont');
	
}

function prepare_charts(){
	var chart;

            var chartData;
			if( lang=="ru" ){
				chartData = [
					{
						"year": "AREVA",
						"доля": 31
					},
					{
						"year": "TW",
						"доля": 26
					},
					{
						"year": "JN",
						"доля": 17
					},
					{
						"year": "ТК",
						"доля": 17
					}
				];
			}else{
				chartData = [
					{
						"year": "AREVA",
						"share": 31
					},
					{
						"year": "TW",
						"share": 26
					},
					{
						"year": "JN",
						"share": 17
					},
					{
						"year": "ТК",
						"share": 17
					}
				];
			}


            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "year";
                chart.startDuration = 1;
                chart.rotate = !true;

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.gridPosition = "start";
                categoryAxis.axisColor = "#fffff";
                categoryAxis.dashLength = 3;

                // value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.dashLength = 3;
                valueAxis.axisAlpha = 0.2;
                valueAxis.position = "top";
                if( lang=="ru" ) valueAxis.title = "Доля мирового рынка ";
				else valueAxis.title = "The share of the world market";
				valueAxis.fillColors = "#ffffff";
                valueAxis.minorGridEnabled = true;
                valueAxis.minorGridAlpha = 0.08;
                valueAxis.gridAlpha = 0.15;
                chart.addValueAxis(valueAxis);

                // GRAPHS
                // column graph
                var graph1 = new AmCharts.AmGraph();
                graph1.type = "column";
                if( lang=="ru" ){
					graph1.title = "Доля";
					graph1.valueField = "доля";
				}else{
					graph1.title = "Share";
					graph1.valueField = "share";
				}
                graph1.lineAlpha = 0;
                graph1.fillColors = "#07bd99";
                graph1.fillAlphas = 0.8;
                graph1.balloonText = "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>";
                chart.addGraph(graph1);

                

                // LEGEND
                var legend = new AmCharts.AmLegend();
                legend.useGraphSettings = true;
                //chart.addLegend(legend);

                chart.creditsPosition = "top-right";

                // WRITE
                chart.write("post-topl");
            });
			
			
			
			var chartData1; 
			
			if( lang=="ru" ){
				chartData1= [
						{
							"year": "Австралия",
							"запасы": 661000
						},
						{
							"year": "Казахстан",
							"запасы": 629000
						},
						{
							"year": "Россия",
							"запасы": 487200
						},
						{
							"year": "Канада",
							"запасы": 468700
						}
					];
			}
			else{
				chartData1 = [
					{
						"year": "Austr.",
						"stock": 661000
					},
					{
						"year": "Kazah.",
						"stock": 629000
					},
					{
						"year": "Russia",
						"stock": 487200
					},
					{
						"year": "Canada",
						"stock": 468700
					}
				];
			} 


            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData1;
                chart.categoryField = "year";
                chart.startDuration = 1;
                chart.rotate = !true;

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.gridPosition = "start";
                categoryAxis.axisColor = "#fffff";
                categoryAxis.dashLength = 3;

                // value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.dashLength = 3;
                valueAxis.axisAlpha = 0.2;
                valueAxis.position = "top";
                
				if( lang=="ru" ){
					valueAxis.title = "Запасы урана";
				} 
				else{
					valueAxis.title = "Uranium";
				} 
				valueAxis.fillColors = "#ffffff";
                valueAxis.minorGridEnabled = true;
                valueAxis.minorGridAlpha = 0.08;
                valueAxis.gridAlpha = 0.15;
                chart.addValueAxis(valueAxis);

                // GRAPHS
                // column graph
                var graph1 = new AmCharts.AmGraph();
                graph1.type = "column";
				if( lang=="ru" ){
					graph1.title = "Тонн U";
					graph1.valueField = "запасы";
				} 
				else{
					graph1.title = "Tonn U";
					graph1.valueField = "stock";
				} 
                
                graph1.lineAlpha = 0;
                graph1.fillColors = "#f18e00";
                graph1.fillAlphas = 0.8;
                graph1.balloonText = "<span style='font-size:13px;'>[[title]] в [[category]]:<b>[[value]]</b></span>";
                chart.addGraph(graph1);

                

                // LEGEND
                var legend = new AmCharts.AmLegend();
                legend.useGraphSettings = true;
                //chart.addLegend(legend);

                chart.creditsPosition = "top-right";

                // WRITE
                chart.write("cont-sir");
            });
			
			
			var chart3;
            var graph3;

            var chartData3;
			
			if( lang=="ru" ){
				chartData3	= [
					{
						"тонн": "1970",
						"value": 10000
					},
					{
						"тонн": "1990",
						"value": 13000
					},
					{
						"тонн": "1997",
						"value": 4000
					},
					{
						"тонн": "2005",
						"value": 4670
					},
					{
						"тонн": "2009",
						"value": 4780
					}
				];
			}
			else{
				chartData3 = [
					{
						"tonn": "1970",
						"value": 10000
					},
					{
						"tonn": "1990",
						"value": 13000
					},
					{
						"tonn": "1997",
						"value": 4000
					},
					{
						"tonn": "2005",
						"value": 4670
					},
					{
						"tonn": "2009",
						"value": 4780
					}
				];
			} 

			


            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();

                chart.dataProvider = chartData3;
                chart.marginLeft = 10;
                if( lang=="ru" ) chart.categoryField = "тонн";
				else chart.categoryField = "tonn";
                chart.dataDateFormat = "YYYY";

                // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
                //chart.addListener("dataUpdated", zoomChart);

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
                categoryAxis.minPeriod = "YYYY"; // our data is yearly, so we set minPeriod to YYYY
                categoryAxis.dashLength = 3;
                categoryAxis.minorGridEnabled = true;
                categoryAxis.minorGridAlpha = 0.1;

                // value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.axisAlpha = 0;
                valueAxis.inside = true;
                valueAxis.dashLength = 3;
                chart.addValueAxis(valueAxis);

                // GRAPH
                graph = new AmCharts.AmGraph();
                graph.type = "smoothedLine"; // this line makes the graph smoothed line.
                graph.lineColor = "#d1655d";
                graph.negativeLineColor = "#637bb6"; // this line makes the graph to change color when it drops below 0
                graph.bullet = "round";
                graph.bulletSize = 8;
                graph.bulletBorderColor = "#FFFFFF";
                graph.bulletBorderAlpha = 1;
                graph.bulletBorderThickness = 2;
                graph.lineThickness = 2;
                graph.valueField = "value";
                graph.balloonText = "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>";
                chart.addGraph(graph);
                

                chart.creditsPosition = "bottom-right";

                // WRITE
                chart.write("cont-post");
            });

            
} 



