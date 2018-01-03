/*
    lightbox
    author Andrew Osipov
    http://simplephotoweb.ru/
    version 2.0
*/

;_lightBox = function($){ 
    var self=this;
	var obj={};
    var options={};
    jQuery.extend( options,{
		width: 300,
		height: 200,
		minHeight:100,
		nextprevWidth:50,
		nextprevOffset:20,
		topPadding:30,
		speed:1500,
		background: 'transparent',
		nextContent:'<svg height="51" version="1.1" width="25" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="#262626" stroke="none" d="M24.96877,0L0.09582999999999942,24.74994C-0.03846000000000058,25.26013,-0.0347900000000006,26.17006,0.12702999999999942,26.5639L24.98212,51L24.98212,48.48495L1.9657499999999999,25.6469L24.99998,2.6931099999999972Z" transform="matrix(-0.8,0,0,-0.8,22.5,45.9)" stroke-width="1.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path></svg>',
		prevContent:'<svg height="51" version="1.1" width="25" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="#e89d12" stroke="none" d="M24.96877,0L0.09582999999999942,24.74994C-0.03846000000000058,25.26013,-0.0347900000000006,26.17006,0.12702999999999942,26.5639L24.98212,51L24.98212,48.48495L1.9657499999999999,25.6469L24.99998,2.6931099999999972Z" transform="matrix(0.8,0,0,0.8,2.5,5.1)" stroke-width="1.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path></svg>',
		prevBackground:'url(/wp-content/plugins/_storage/images/prev.png) 50% 50% no-repeat',
		nextBackground:'url(/wp-content/plugins/_storage/images/next.png) 50% 50% no-repeat',
		prevSlideCur:'/wp-content/plugins/_storage/images/slide-prev-1.cur',
		nextSlideCur:'/wp-content/plugins/_storage/images/slide-next-1.cur',
		zIndex:1000,
		mobile:false,
		simpleMode:false,
		showArrowsOnSlide:true,
		lightBoxhandle:'',
		arrayHandle:'',
		arrayItem:'',
		currentItem:-1,
		contentBoxBackground: 'transparent',
		opacity:0.6,
		
		borderRadius:3,
		padding:'50px 20px 50px 20px',
		contentBoxBorder:'1px solid transparent',
		//contentBoxShadow:'0px 0px 10px rgba(0,0,0,0.4)',
		
		navColor:'#787878',
		navColorHover:'#000',

		// ---------------
		fadeClickClose: !true,
		autoPosition: !true,
		autosize: !true,
		ajaxLoader: '/wp-content/plugins/_storage/images/ajax-loader.gif',
		closeContent:'<svg height="30" version="1.1" width="30" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative;"><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><path fill="#fff" stroke="none" d="M6.875,6.15625L6.15625,6.875L14.28125,15L6.15625,23.125L6.875,23.84375L15,15.71875L23.125,23.84375L23.84375,23.125L15.71875,15L23.84375,6.875L23.125,6.15625L15,14.28125L6.875,6.15625Z" transform="matrix(1.5,0,0,1.5,-7.5,-7.5)" stroke-width="0.6666666666666666" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path></svg>',
		
		// ---------------
		shadowBox: 'lightbox-fade-box',
		lightboxContentContainer: 'lightbox-content-container',
		contentHeader: 'lightbox-content-header',
		contentBox: 'lightbox-content-box',
		content: 'lightbox-content',
		next: 'lightbox-next',
		prev: 'lightbox-prev',
		slideOnNext: 'lightbox-slide-on-next',
		slideOnPrev: 'lightbox-slide-on-prev',
		closeX: 'lightbox-closeX',
		buttonsContainer: 'lightbox-buttons-container'
    },$)
	
	init();
	
	function init(){
		if( options.lightBoxhandle!='' ){
			empty();
			reprepare();
			reloadBox();
		}else{
			construct();
			prepare();
			setPosition();
			start();
		}
	}       
     
    function start(){
		if( options.complete!=null ){ options.complete(); }
		if( options.image!=null ){ showImage(-1); }
		if( options.video!=null ){ showVideo(); }
		else{ if( options.getUrl!=null ){ get_url(); } }
		if( options.iframe!=null ){ showIframe(); }
		if( options.autoPosition ){ autoPosition(); }
		if( options.text!=null ){ obj.content.append('<p>'+options.text+'</p'); }
		if( options.buttons!=null ){ 
			var div=document.createElement('div');
			jQuery(div).addClass(options.buttonsContainer);
			jQuery.each(options.buttons,function(i,e){  
				var a=jQuery('<a href="#" class="'+i+'">'+e+'</a>');
				jQuery(a).click(function(){ remove(); return false; })
				jQuery(div).append(a);
			}) 
			obj.content.append(div);      
		}
	}
    
	
	/*
		загружает содержимое страницы по url в модальное окно
	*/
    function get_url(){
		showLoader();
		jQuery.get( 
			options.getUrl, 
			options.urlData, 
			function(data){// alert(data) 
			   obj.content.html(data);
			   hideLoader(); 
			} 
		);
    }
    
    
	/*
		показывает изображение в модальном окне
		сменяет старое
	*/
	function showImage(id){ 
		obj.image=new Image();
		if( id==-1 ){ obj.image.src=options.image.image.src; }
		else{ obj.image.src=options.items[index].image.src; }
		jQuery(obj.image).css({ opacity:0 });		
		showLoader();
		obj.index=id;
		jQuery(obj.image).load(function(){ 
			hideLoader();
			prepareImage(obj.image);
			setPosition();
			obj.content.prepend(obj.image);
			if( obj.index!=-1 ){
				obj.content.find('img+img').stop().animate({ opacity:0 }, options.speed, function(){ jQuery(this).remove(); } );
			}
			jQuery(obj.image).stop().animate({ opacity:1 }, options.speed )
		})
    }
	
	
	/*
		показывает html в модальном окне
		сменяет старое
	*/
	function showHtml(id){ 
		obj.content.empty();
		obj.content.append( options.html );
	}
	
	
	/*
		показывает видео в модальном окне
	*/
	function showVideo(){ 
		obj.content.append( '<iframe width="560" height="315" src="'+options.video+'" frameborder="0" allowfullscreen></iframe>' );
		//showLoader();
		//jQuery(obj.image).load(function(){  
			//hideLoader();
			//prepareImage();
			obj.contentBox.css({ padding:0, width:560, minHeight:0, height:315, left:( (jQuery(window).width()-560-80)/2 ) });
			obj.content.css({ padding:0 });
			//jQuery(obj.image).css({ opacity:1 })
		//})
		
	}
	
	
	/*
		показывает iframe в модальном окне
	*/
	function showIframe(){ 
		obj.content.empty();
		prepareIframe(options.items[index].iframe);
		obj.content.append( options.items[index].iframe );		
	}
    
    function showLoader(){ obj.contentBox.css({ backgroundImage:'url('+options.ajaxLoader+')', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat' }); }       
    function hideLoader(){ obj.contentBox.css({ backgroundImage:'none', backgroundPosition:'', backgroundRepeat:'' }); }
    
    
	/*
		подстраивает изображение под размер контейнера
	*/
	function prepareImage(image){
		var height=options.image.height, width=options.image.width;
		var new_width=width, new_height=height;
		var cWidth=obj.width, cHeight=obj.height;
		if( width>cWidth ){
			new_width=cWidth;
			new_height=height*new_width/width;
			if( new_height>cHeight){              
				new_width=new_width*cHeight/new_height;
				new_height=cHeight;
			}                 
		}else if( height>cHeight ){
			new_height=cHeight;
			new_width=width*new_height/height;
			if( new_width>cWidth){              
				new_height=new_height*cWidth/new_width;
				new_width=cWidth;
			}                 
		}
		//if( justsize==undefined ){ jQuery(img).css({ opacity:0 }); }
		jQuery(image).css({ position:'absolute', height:new_height, width:new_width, left:(cWidth-new_width)/2, top:(cHeight-new_height)/2 });
    }
	
	/*
		подготавливает iframe
	*/
	function prepareIframe(iframe){
		jQuery(iframe).attr({ width:obj.width, height:obj.height })
	}
	
	
	this.nextItem=function(){ 
		if( options.nextHandle!='' ){
			var index=options.nextHandle(options.slideHandle);
			reloadBox(index);
		}
	}
	this.prevItem=function(){ 
		if( options.nextHandle!='' ){
			var index=options.prevHandle(options.slideHandle);
			reloadBox(index);
		}
	}
	
	this.close = function( options ){ remove(); }
	this.empty = function( options ){ empty(); }
	this.reload = function( options ){ reloadBox(options); }
	
	
	/*
		перезагружает объект
	*/
	function reloadBox(attr){		
		if( options.image!='undefined' && options.image!=null && options.image!='' ){
			showImage(attr);
			options.image.height=options.items[attr].imageHeight;
			options.image.width=options.items[attr].imageWidth;
		}
		if( options.iframe!='undefined' && options.iframe!=null && options.iframe!='' ){
			showIframe(attr);
		}
		if( typeof(attr)==='object' ){
			empty();
			jQuery.extend( options, attr );
			reprepare();
			obj.contentBox.html( attr.html );
			attr.complete();
		};
		
		obj.currentItem=attr;	
	}
	
	
	/*
		меняет id текущего элемента
	*/
	//changeCurrent=function(index){ options.currentItem=index; }
        
		
    /*
		удаляет модальное окно вместе со всем содержимым
		и удаляет все события и настройки
	*/
	function remove(){
		obj.shadowBox.unbind('click').fadeOut(function(){obj.shadowBox.remove();})
		obj.closeX.unbind('click').remove();
		obj.contentBox.fadeOut().remove();
		obj.contentContainer.remove();
		jQuery('body').css({ overflow:'auto' });
    }
	
	/*
		очищает контейнер
	*/
	function empty(){
		obj.contentBox.empty();
		//options.lightBoxhandle.find( '.'+options.contentBox ).empty();
	}
	
	
	/*
		заново связывает переменные
	*/
	function reprepare(){
		obj.contentBox
			.css({ width:options.width, minHeight:options.height, padding:options.padding, marginBottom:50, position:'absolute', zIndex:options.zIndex+10, boxShadow:'0px 0px 10px #000', border:'1px solid #494949', background:options.contentBoxBackground, borderRadius:3 });
		
	}
	
	
	/*
		задает размеры контейнера
	*/
	function resize(){
		obj.next.css({ width:options.nextprevWidth, right:options.nextprevOffset });
		obj.prev.css({ width:options.nextprevWidth, left:options.nextprevOffset });
		var width=jQuery(window).width() - 2*(options.nextprevWidth + options.nextprevOffset );
		var height=jQuery(window).height()-2*options.topPadding;
		obj.height=height;
		obj.width=width;
		obj.contentBox.css({ width:width, height:height });
		setPosition();
	}
    
	
	/*
		выполняет настройку стилей модального окна
	*/
	function prepare(){
		if( jQuery('.'+options.shadowBox).length>0 ){ options.zIndex+=jQuery('.'+options.shadowBox).length*10; }
		jQuery('body').css({ overflow:'hidden', paddingRight:17 });
		
		obj.contentContainer
			.css({ width:jQuery(window).width(), height:jQuery(window).height(), padding:'0px 0 0px 0', position:'fixed', left:0, top:0, zIndex:options.zIndex+10, overflow:'auto' })
			.addClass('box-modal');
			//.click(function(event){ if( options.fadeClickClose ){ remove(); } });
		
		obj.shadowBox
			.css({ overflow:'auto', background:options.background, opacity:0, width:jQuery(window).width(), height:jQuery(window).height(), top:0, left:0, position:'fixed', zIndex:options.zIndex })
			.animate({ opacity:options.opacity })
			/*.hover(
				function(){ obj.closeX.css({ color:options.closeXColorHover }) },
				function(){ obj.closeX.css({ color:options.closeXColor }) }
			);	*/						
		
		if( options.simpleMode ){
			obj.contentBox
				.css({ position:'absolute', zIndex:options.zIndex+10, cursor:'pointer' });			
		}else{ 
			obj.contentBox
				.css({ width:options.width, minHeight:options.height, padding:options.padding, marginBottom:0, position:'absolute', zIndex:options.zIndex+10, boxShadow:options.contentBoxShadow, border:options.contentBoxBorder, background:options.contentBoxBackground, borderRadius:options.borderRadius });
		}
		
		
		
		if( options.noCenter ){ obj.contentBox.addClass('no-center') }
		
		obj.closeX
			.css({ position:'absolute', cursor:'pointer', width:10, height:10, overflow:'hidden', right:30, top:30, zIndex:options.zIndex+50 })
			.click(function(){ remove(); })
			.hover(
				function(){ obj.closeX.find('path').attr({ fill: options.navColorHover }) },
				function(){ obj.closeX.find('path').attr({ fill: options.navColor }) }
			)
			.find('path').attr({ fill: options.navColorHover });
		obj.closeX.find('svg').css({ margin:'-10px 0 0 -10px' });
			
		if( options.nextHandle!=null && options.prevHandle!=null ){
			if( options.showArrowsOnSlide ){
				obj.slideOnNext
					.css({ position:'fixed', cursor:'url("'+options.nextSlideCur+'"), pointer', top:0, right:0, height:jQuery(window).height(), width:(jQuery(window).width()-obj.contentBox.width())/2, zIndex:options.zIndex+30 })
					
					.click(function(){ self.nextItem(); })
				
				obj.slideOnPrev
					.css({ position:'fixed', cursor:'url("'+options.prevSlideCur+'"), pointer', top:0, left:0, height:jQuery(window).height(), width:(jQuery(window).width()-obj.contentBox.width())/2, zIndex:options.zIndex+30 })
					.click(function(){ self.prevItem(); })
			}else{	
				obj.contentBox.click(function(){ self.nextItem(); })
				
				obj.next
					.css({ position:'fixed', cursor:'pointer', /*background:options.nextBackground,*/ right:0, top:0, height:jQuery(window).height(), width:(jQuery(window).width()-obj.contentBox.width())/2 })
					.click(function(){ self.nextItem(); })
					.append( options.nextContent )
					.hover(
						function(){ obj.closeX.find('path').attr({ fill: options.navColorHover }) },
						function(){ obj.closeX.find('path').attr({ fill: options.navColor }) }
					)
					.find('svg')
					.css({ position:'absolute', right:10, top:(jQuery(window).height()/2-15) })
					.find('path').attr({ fill: options.navColorHover })
				obj.prev
					.css({ position:'fixed', cursor:'pointer', /*background:options.prevBackground,*/ left:0, top:0, height:jQuery(window).height(), width:(jQuery(window).width()-obj.contentBox.width())/2 })
					.click(function(){ self.prevItem(); })
					.append( options.prevContent )
					.hover(
						function(){ jQuery(this).find('path').attr({ fill: options.navColorHover }) },
						function(){ jQuery(this).find('path').attr({ fill: options.navColor }) }
					)
					.find('svg')
					.css({ position:'absolute', left:10, top:(jQuery(window).height()/2-15) })
					.find('path')
					.attr({ fill: options.navColorHover })			
			}
		}	
		
		if( options.autosize ){ resize(); }
		else{ 
			obj.height=options.height;
			obj.width=options.width;
		}
		
		setPosition();        
	} 
	
    
	/*
		устанавливает положение модального окна
	*/
    function setPosition(){ 
		obj.position={}; 
		obj.position.top=(jQuery(window).height()-obj.contentBox.height() )/4;
		obj.position.left=(jQuery(window).width()-obj.width)/2;
		if( options.mobile ){ 
			//obj.position.left=(jQuery(window).width()-obj.width-20)/2;
			//obj.position.top=obj.position.top+20
		}
		if( options.autosize ){ obj.position.top=options.topPadding; }
		obj.contentBox.css({ top:obj.position.top, left:obj.position.left }); 
    }
	
    
	/*
		автоматически выравнивает положение окна при скроллинге
	*/
    function autoPosition(){
		jQuery(document).scroll(function(){
			if( getPageScroll()+50!=obj.position.top ) { setPosition(); }
		})
    }
	
    
    /*
		получает текущее положение окна относительно документа, скролл
	*/
	function getPageScroll() {
		var xScroll, yScroll;
		if (self.pageYOffset) {
			yScroll = self.pageYOffset;
			xScroll = self.pageXOffset
		}else if (document.documentElement && document.documentElement.scrollTop) {
			yScroll = document.documentElement.scrollTop;
			xScroll = document.documentElement.scrollLeft
		}else if (document.body) {
			yScroll = document.body.scrollTop;
			xScroll = document.body.scrollLeft
		}     
		return yScroll
    };
	
	
	/*
		создает объект name,
		задает ему аттрибуты arg и возращает его
	*/
	function createObject(name,arg,content){
		var div=document.createElement(name);
		jQuery(div).attr(arg).html(content);
		return div;
	}
	
	
	/*
		строит конструкцию для модального окна
	*/
	function construct(){  
		//if( options.mobile ){ jQuery('#basket-table').hide(); }
		
		jQuery('body').append( createObject( 'div',{ class:options.shadowBox } ) );
		obj.shadowBox=jQuery('.'+options.shadowBox).last();    
		
		obj.shadowBox.after( createObject( 'div',{ class:options.lightboxContentContainer } ) );
		obj.contentContainer=jQuery('.'+options.lightboxContentContainer).last();
		
		obj.contentContainer.append( createObject( 'div',{ class:options.contentBox } ) );
		obj.contentBox=obj.contentContainer.find('.'+options.contentBox);
		
		obj.contentContainer.append( createObject( 'div',{ class:options.next } ) );
		obj.next=obj.contentContainer.find('.'+options.next);
		
		obj.contentContainer.append( createObject( 'div',{ class:options.prev } ) );
		obj.prev=obj.contentContainer.find('.'+options.prev);
		
		if( options.header!=null ){ 
			obj.contentContainer.append( createObject( 'h1',{ class:options.contentHeader },options.header ) );
			obj.contentHeader=obj.contentContainer.find('.'+options.contentHeader);
		}
		
		obj.contentBox.append( createObject( 'div',{ class:options.content },options.html ) );
		obj.content=obj.contentBox.find('.'+options.content);
		
		if( options.showArrowsOnSlide ){
			obj.contentBox.append( createObject( 'div',{ class:options.slideOnNext } ) );
			obj.slideOnNext=obj.contentBox.find('.'+options.slideOnNext);
			
			obj.contentBox.append( createObject( 'div',{ class:options.slideOnPrev } ) );
			obj.slideOnPrev=obj.contentBox.find('.'+options.slideOnPrev);
		}
	
		obj.contentBox.prepend( createObject( 'div',{ class:options.closeX },options.closeContent ) );
		obj.closeX=obj.contentContainer.find('.'+options.closeX);
    }  

 }
