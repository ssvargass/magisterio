(function ($) {
	$(document).ready(function(){
		$('.expanded','#block-system-main-menu').hover(function(){
			$('ul',this).show()
		},function(){
			$('ul',this).hide()
		})

		$('.view-t-picos .views-field-nothing').each(function(){
			var  papa = $(this)
			$('.left-menu-topcs li', this).hover(function(){
				var clase = $(this).attr('class');
				var def_class = clase.replace('s-t', 's-r');
				$('.right-menu-topcs .s-right-topcs', papa).css('z-index','1');
				$('.'+def_class, papa).css('z-index','2');
			})
		})
		$('#block-menu-menu-an-nimo-menu li.last a').click(function(){
			var login = $('#block-user-login');
			if(!login.hasClass('active')){
				login.addClass('active');
			} else {
				login.removeClass('active');
			}
			return false;
		})
	})
})(jQuery);