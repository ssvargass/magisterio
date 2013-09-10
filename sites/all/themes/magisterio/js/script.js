(function ($) {
	$(document).ready(function(){
		$('.expanded','#block-system-main-menu').hover(function(){
			$('ul',this).show()
		},function(){
			$('ul',this).hide()
		})

		$('.views-row .left-menu-topcs ul li', '.view-t-picos').hover(function(){
			var clase = $(this).attr('class');
			clase = clase.replace('s-t','.r-t');
			var padre = $(this).parents('.views-row');
			console.log($(clase, padre).html());
		})
	})
})(jQuery);