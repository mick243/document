
jQuery(function($)
	$('#header .gnb > li').mouseenter(function(){
		if($(this).hasClass('parent')){
			if(!$('#header .depth2_bg').hasClass('on')){
				$('#header .depth2_bg').addClass('on');
				$('#header .gnb > li .depth2').removeClass('active');
				$(this).find('.depth2').addClass('active');
			}
		}
	}).mouseleave(function(){
		if($('#header .depth2_bg').hasClass('on')){
			$('#header .depth2_bg').removeClass('on');
			$('#header .gnb > li .depth2').removeClass('active');
		}
	});

	// animate
	animate();
	$(window).scroll(animate);
	$(window).resize(animate);
	function animate(){
		$('.motion').each(function(index){
			var scrollPos = $(window).scrollTop()+($(window).height()/1.3);
			if(scrollPos > $(this).offset().top){
				$(this).addClass('animate');
			}
		});
	};

	// modal popup */
	var $modal_wrap = $('.modal_wrap'),
		$modal_open = $('.modal_open'),
		$modal_close = $('.modal_close')

	$modal_open.on("click", function(event){
		$($(event.target).attr('href')).toggleClass("show_modal");
		$($(event.target).attr('href')).find(".modal_content").css('margin-top',($(window).height() - $($(event.target).attr('href')).find(".modal_content").innerHeight())/2);
		return false;
	});
	$modal_close.on("click", function(event){
		if($(event.target).parent().parent().hasClass('show_modal')){
			$(event.target).parent().parent().toggleClass("show_modal");
			return false;
		}
	});
	$modal_wrap.on("click", function(event){
		if($(event.target).hasClass('show_modal')){
			$(event.target).toggleClass("show_modal");
			return false;
		}
	});

	/* 전체메뉴 열기/닫기 */
	$('.header-aside-btn').on('click', function () {
		if($('body').hasClass('fixed')){
			$('body').removeClass("fixed");
			$('#asideMenu .dim-layer').fadeOut();
		}
		else{
			$('body').addClass("fixed");
			$('#asideMenu .dim-layer').fadeIn();
		}
		return false;
	});

	$("#asideMenu .anb > .parent > a").click(function() {
		if($(this).hasClass('active')){
			$(this).removeClass('active').next('.depth2').slideUp('fast');
			$(this).find('.arrow').html('펼치기');
		}else{
			$(this).addClass('active').next('.depth2').slideDown('fast');
			$(this).find('.arrow').html('접기');
		}
		return false;
	});

	$(document).on("change", ".file-input", function(){

		$filename = $(this).val();

		if($filename == "")
		$filename = "파일을 선택해주세요.";

		$(".file-name").text($filename);
	})


});

