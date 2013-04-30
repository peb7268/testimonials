$('document').ready(function(){
	var $container = $('#isotope_container'),
		 $wrapper   = $('#isotope_wrapper');
		 
		
		$container.delay(300).isotope({
				itemSelector: '.element',
				columnWidth: 285
		});
		
		$wrapper.animate({
			'opacity': 1
		}, 350);
		
		// filter items when filter link is clicked
		var $filters = $($('#filters li'));		
		$filters.find('a').click(function(){
			$filters.find('a').removeClass('selected');
			$(this).addClass('selected');
			
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });

			return false;
		});
		
		//Portfolio effects
		$('.isotope-item').hover(function(){
			$(this).find('img, .iso-label').slideUp(100);
		}, function(){
			$(this).find('img, .iso-label').slideDown(100);
		});
		
		//Rollup Nav
		$('header #nav-trigger').on('click', function(evt){
			evt.preventDefault();
			$('header .row').slideToggle(150).css('overflow', '');
		});

});
