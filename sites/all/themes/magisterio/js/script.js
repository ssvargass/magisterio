(function ($) {
	$(document).ready(function(){
		$('.expanded','#block-system-main-menu').hover(function(){
			$('ul',this).show()
		},function(){
			$('ul',this).hide()
		})

		$('.view-t-picos .views-field-php-4').each(function(){
			var  papa = $(this)
			$('.left-menu-topcs li', this).hover(function(){
				var clase = $(this).attr('class');
				var def_class = clase.replace('s-t', 's-r');
				$('.right-menu-topcs .s-right-topcs', papa).css('display','none');
				$('.' + def_class, papa).css('display','block');
			})
		})
		$('#block-menu-menu-an-nimo-menu li.last a').hover(function(){
			var login = $('#block-user-login');
			login.addClass('active');
			login.hover(function(){
			},function(){
				login.removeClass('active');
			})
		}, function(){
			var login = $('#block-user-login');
			setTimeout(function(){
				if(!login.is(":hover")) login.removeClass('active');
			},500);
		})
	})
})(jQuery);