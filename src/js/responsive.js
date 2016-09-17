//=include lib/inject-html.js
//=include lib/responsive-tables.js
//=include lib/slick.min.js

$(document).ready(function($) {

	//search toggling
	$('.search__icon').click(function (event) {
		$('header .search').addClass('is-visible').find('input[type=search]').focus();
		$(this).hide();
	});
	$('header .search input[type=search]').blur(function (event) {
		$('header .search').removeClass('is-visible');
		$('header .search__icon').show();
	});

	// menu
	var menu = $('.js-mob-menu'),
		link = menu.find('.js-mob-menu-link'),
		panel = menu.find('.js-mob-menu-panel');

	link.on('click', function () {
		var _this = $(this),
			data = _this.data('panel');
		if (_this.hasClass('is-main')) {
			link.removeClass('is-active');
			_this.addClass('is-active');
		}
		panel.removeClass('is-active');
		$('.' + data).addClass('is-active');
		return false;
	});

	$('.mobile-menu__icon, .mobile-menu__overlay').click(function (event) {
		$('body').toggleClass('is-mobile-menu');
	});

	// less than 500px wide
	$('.also .cols').slick({
		slidetoshow: 1,
		slide: '.col',
		mobileFirst: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [{
			breakpoint: 500,
			settings: "unslick" // destroys slick
		}]
	});

	// less than 800
	$('.after-ads .cols').slick({
		slidetoshow: 1,
		slide: '.col',
		mobileFirst: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [{
			breakpoint: 800,
			settings: "unslick" // destroys slick
		}]
	});
	// oldstyle tariffs

	if (window.matchMedia("(max-width: 800px)").matches) {
		$('#t1').remove();
	}
	var neoTariffCfg = {
		slidetoshow: 1,
		slide: '.tariffs-list>.col',
		mobileFirst: true,
		centerMode: true,
		variableWidth: true,
		// accessibility: false,
		// dots: true,
		responsive: [{
			breakpoint: 800,
			settings: "unslick" // destroys slick
		}, {
			breakpoint: 500,
			settings: {
				slidetoshow: 1,
				centerMode: true
			}
		}]
	};

	$('.neo-tariffs .tariffs-list').slick(neoTariffCfg);

	var neoTariffCfgMore = {
		slidetoshow: 1,
		slide: '.col',
		mobileFirst: true,
		centerMode: true,
		variableWidth: true,
		infinite: false,
		responsive: [{
			breakpoint: 800,
			settings: "unslick" // destroys slick
		}, {
			breakpoint: 500,
			settings: {
				slidetoshow: 1,
				centerMode: true
			}
		}]
	};

	$('.neo-tariffs > .wrapper.cols').slick(neoTariffCfgMore);


	// less than 910px wide
	$('.neo-tariffs .selected-tariffs').slick({
		slidetoshow: 1,
		slide: '.selected-tariffs>.col',
		mobileFirst: true,
		centerMode: true,
		variableWidth: true,
		// accessibility: false,
		// dots: true,
		responsive: [{
			breakpoint: 910,
			settings: "unslick" // destroys slick
		}, {
			breakpoint: 500,
			settings: {
				slidetoshow: 2,
				centerMode: true
			}
		}]
	});
	//neo-tariffs-internet.selected-tariffs

	if (window.matchMedia("(max-width: 800px)").matches) {
		$('.home-promo .sheets').slick({
			slidetoshow: 1,
			slide: '.sheets>.sheet',
			mobileFirst: true,
			// variableWidth: true,
			// accessibility: false,
			dots: true,
			responsive: [{
				breakpoint: 1060,
				settings: "unslick" // destroys slick
			}]
		});
	}

	$('.neo-tariffs .tariffs-list').slick('slickGoTo', 3);
	$('.neo-tariffs .ui-tabs-nav li').click(function (event) {
		newind = ($(this).index() + 1) * 2 - 1;
		console.log(newind)
		$(this).siblings().removeClass('ui-state-active');
		$(this).addClass('ui-state-active');
		$('.neo-tariffs .tariffs-list').slick('slickGoTo', newind)
		return false;
	});
	$('.neo-tariffs__select select').change(function (event) {
		$('.neo-tariffs .tariffs-list').slick('slickGoTo', $(this).val());
		$('.neo-tariffs__select-value').text($('.neo-tariffs__select select option:selected').text());
	});

	//language kung fu
	//active
	act = $('#lang-menu .active').text();
	$(".mobile-menu__lang a:contains('" + act + "')").addClass('is-active');

	$('#lang-menu .dropdown-menu a').each(function (index, el) {
		txt = $(this).text();
		$(".mobile-menu__lang a:contains('" + txt + "')").attr('href', $(this).attr('href'));
	});

	var codesCfg = {
		slidetoshow: 1,
		slide: '.col',
		mobileFirst: true,
		// variableWidth: true,
		// accessibility: false,
		dots: true,
		responsive: [{
			breakpoint: 800,
			settings: "unslick" // destroys slick
		}]
	};

	if (window.matchMedia("(max-width: 850px)").matches) {
		$('#codes .cols').slick(codesCfg);
	}

	$('.page-personal #promo .segment-switcher a').on('click', function() {

			setTimeout(function(){
				$('#codes .cols').slick('unslick');
				$('#codes .cols').slick(codesCfg);
			}, 100);

	});

	//if (window.matchMedia("(max-width: 1085px)").matches) {
	//	$('.b-solutions_new > .wrapper > .container').slick({
	//		slidesToShow: 1,
	//		mobileFirst: true,
	//		centerMode: true,
	//		variableWidth: true,
	//		responsive: [{
	//			breakpoint: 450,
	//			settings: {
	//				dots: true,
	//				arrows: false
	//			}
	//		}]
	//	});
	//}




	function getOrientationValue (mediaQueryList) {
		if(mediaQueryList.matches) {

			$('.b-solutions_large > .wrapper > .container').slick({
				slidesToShow: 1,
				mobileFirst: true,
				//centerMode: true,
				//variableWidth: true,
				dots: true,
				arrows: false,
				responsive: [{
					breakpoint: 1084,
					settings: "unslick"
				}, {
					breakpoint: 450,
					settings: {
						arrows: true,
						centerMode: true,
						variableWidth: true,
						dots: false,
					}
				}]
			});
		} else {
			$('.b-solutions_large > .wrapper > .container').slick('unslick')
		}
	}

	var portraitOrientationCheck = window.matchMedia("(max-width: 1040px)");
	portraitOrientationCheck.addListener(getOrientationValue);

	getOrientationValue (portraitOrientationCheck);

	if (window.matchMedia("(max-width: 1040px)").matches) {
		$('.b-solutions_large > .wrapper > .container').slick({
			slidesToShow: 1,
			mobileFirst: true,
			//centerMode: true,
			//variableWidth: true,
			dots: true,
			arrows: false,
			responsive: [{
				breakpoint: 1084,
				settings: "unslick"
			}, {
				breakpoint: 450,
				settings: {
					arrows: true,
					centerMode: true,
					variableWidth: true,
					dots: false,
				}
			}]
		});
	}
	var tariffCfg = {
		slidesToShow: 1,
		mobileFirst: true,
		//centerMode: true,
		//variableWidth: true,
		dots: true,
		arrows: false,
		slide: '.tariff__items > .tariff__item',
		responsive: [{
			breakpoint: 1077,
			settings: "unslick"
		}, {
			breakpoint: 450,
			settings: {
				arrows: true,
				centerMode: true,
				variableWidth: true,
				dots: false
			}
		}]
	};
	$('.tariff .tariff__items').slick(tariffCfg);

	var unitCfg = {
			slidesToShow: 1,
			centerPadding: '65px',
			mobileFirst: true,
			centerMode: true,
			dots: true,
			arrows: false,
			slide: '.unit__icons > li',
			responsive: [{
			breakpoint: 715,
			settings: "unslick"
		},{
			breakpoint: 337,
			settings: {
				centerPadding: '75px',

			}
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 2,
				centerMode: false
			}
		}, {
			breakpoint: 560,
			settings: {
				slidesToShow: 3,
				centerMode: false

			}
		}]
	};
	$('.unit .unit__icons').slick(unitCfg);
	var solCfg = {
		slidesToShow: 1,
		mobileFirst: true,
		//centerMode: true,
		//variableWidth: true,
		dots: true,
		arrows: false,
		responsive: [{
			breakpoint: 1084,
			settings: "unslick"
		}, {
			breakpoint: 450,
			settings: {
				arrows: true,
				centerMode: true,
				variableWidth: true,
				dots: false,
			}
		}]
	};
	$('.b-solutions_new > .wrapper > .container').slick(solCfg);

	var neoCfg = {
		slidesToShow: 1,
		slide: '.g-tariff',
		mobileFirst: true,
		centerMode: true,
		variableWidth: true,
		// accessibility: false,
		// dots: true,
		responsive: [{
			breakpoint: 1010,
			settings: "unslick" // destroys slick
		}, {
			breakpoint: 500,
			settings: {
				slidetoshow: 2,
				centerMode: true
			}
		}]
	};

	$('.neo-tariffs-internet').slick(neoCfg);
	var tabsNeoCfg = {
		slidetoshow: 1,
		slide: '.tariffs-list>.col:not(:empty):not(#t1)',
		mobileFirst: true,
		centerMode: true,
		variableWidth: true,
		// accessibility: false,
		// dots: true,
		responsive: [{
			breakpoint: 1010,
			settings: "unslick" // destroys slick
		}, {
			breakpoint: 500,
			settings: {
				slidetoshow: 1,
				centerMode: true
			}
		}]
	};
	$('.mobile-internet-tabs .ui-tabs-nav a[href="#for-smartphone-contract"]').on('click', function(){

		$('.mobile-internet-tabs .neo-tariffs .tariffs-list').slick('unslick');
		$('.mobile-internet-tabs .neo-tariffs .tariffs-list').slick(tabsNeoCfg);
	});

	var shrtCfg = {
		slidesToShow: 3,
		dots: true,
		arrows: false,
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}]
	};
	$('.section.shortcuts > ul').slick(shrtCfg);

	$('.cut-button').on('click', function() {
		var item = $('.cut-content .section.shortcuts > ul');

		if (item.length) {

			item.slick('unslick');
			item.slick(shrtCfg);

		}
	});

	var bestTarifs = {
		slidesToShow: 1,
		variableWidth: true,
		centerMode: true,
		infinite: false,
		asNavFor: '.page-home_internet .ks-promo #tariffs + #advantages > .wrapper.cols',
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				arrows: false
			}
		}]
	};
	var bestTarifsNav = {
		slidesToShow: 1,
		variableWidth: true,
		arrows: false,
		centerMode: true,
		infinite: false,
		asNavFor: '.page-home_internet .ks-promo #tariffs .wrapper > .list.cols',
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				dots: true
			}
		}]
	};

	$('.page-home_internet .ks-promo #tariffs .wrapper > .list.cols').slick(bestTarifs);
	$('.page-home_internet .ks-promo #tariffs +   #advantages > .wrapper.cols').slick(bestTarifsNav);


	function adaptiveSliders() {

		if($(window).width() <= 930) {
			if(!$('.page-home_internet .ks-promo #tariffs .wrapper .list.cols').hasClass('slick-initialized')) {
				$('.page-home_internet .ks-promo #tariffs +  #advantages > .wrapper.cols').slick(bestTarifsNav);
				$('.page-home_internet .ks-promo #tariffs .wrapper .list.cols').slick(bestTarifs);

			}
		} else {
			$('.page-home_internet .ks-promo #tariffs + #advantages > .wrapper.cols').slick('unslick');
			$('.page-home_internet .ks-promo #tariffs .wrapper > .list.cols').slick('unslick');

		}
		if($(window).width() <= 715) {
			if(!$('.unit .unit__icons').hasClass('slick-initialized')) {
				$('.unit .unit__icons').slick(unitCfg);

			}
		} else {
			$('.unit .unit__icons').slick('unslick');
		}
		if($(window).width() <= 1100) {

			var slider = $('.page-home_internet .ks-promo section.switcher .slider .content');
			if(!slider.hasClass('slick-initialized')) {
				makeSlider();
			}

		} else {
			var slider = $('.page-home_internet .ks-promo section.switcher .slider .content');

			if(slider.hasClass('slick-initialized')) {
				$('.page-home_internet .ks-promo section.switcher .slider .content').slick('unslick');
			}

		}

		if($(window).width() <= 1077) {

			if(!$('.tariff .tariff__items').hasClass('slick-initialized')) {
				$('.tariff .tariff__items').slick(tariffCfg);
			}

		} else {
			$('.tariff .tariff__items').slick('unslick');

		}
		if($(window).width() <= 1084) {

			if(!$('.b-solutions_new > .wrapper > .container').hasClass('slick-initialized')) {
				$('.b-solutions_new > .wrapper > .container').slick(solCfg);

			}

		} else {
			$('.b-solutions_new > .wrapper > .container').slick('unslick');

		}


		if($(window).width() <= 1010) {


			if(!$('.neo-tariffs-internet').hasClass('slick-initialized')) {
				$('.neo-tariffs-internet').slick(neoCfg);

			}

			if(!$('.mobile-internet-tabs .neo-tariffs .tariffs-list').hasClass('slick-initialized')) {
				$('.mobile-internet-tabs .neo-tariffs .tariffs-list').slick(tabsNeoCfg);

			}


		} else {
			$('.neo-tariffs-internet').slick('unslick');
			$('.mobile-internet-tabs .neo-tariffs .tariffs-list').slick('unslick');

		}



		if($(window).width() <= 850) {
			if(!$('.section.shortcuts > ul').hasClass('slick-initialized')) {
				$('.section.shortcuts > ul').slick(shrtCfg);

			}
		} else {
			$('.section.shortcuts > ul').slick('unslick');

		}


	}
	adaptiveSliders();

	$(window).on('resize', adaptiveSliders);

	// adaptive tables
	$('.data_tariff__wide').wrap('<div class="adaptive-table"></div>');

	//start risk
		$('.main table.data:not(.data_tariff__wide):not(.data.tariff__table)').wrap('<div class="adaptive-table"></div>');
		$('.ui-accordion-content > div > table.data:not(.data_tariff__wide):not(.data.tariff__table)').wrap('<div class="adaptive-table"></div>');
	//end risk

	$('.data.tariff__table').wrap('<div class="adaptive-table"></div>');
	$('.data.b-tariff__table').wrap('<div class="adaptive-table"></div>');
	if($('.adaptive-table').length){

		if($('.adaptive-table').get(0).scrollWidth > $('.adaptive-table').get(0).clientWidth) {
			$('.adaptive-table').addClass('is-shadow');
		}

	}
	var miTable = $('.mobile-internet-tabs .tabs-wrapper .custom-tariff .description table.data.with-head');

	miTable.wrap('<div class="adaptive-table"></div>');

	miTable.each(function() {

		var headers = [];

		$(this).find('th').each( function(i, el){

			headers.push($(el).text());

		});

		$(this).find('tr td').each( function(i, el) {

			var text = headers[i%headers.length];
			$(el).attr('title', text);

		});


	});

	$('.ks-content .section.prices table.data').each(function() {

		var headers = [];

		$(this).find('thead tr td').each( function(i, el){

			headers.push($(el).text());

		});

		$(this).find('tbody tr td').each( function(i, el) {

			var text = headers[i%headers.length];
			$(el).attr('title', text);

		});


	});

	$('.b-tariff.b-tariff_wrapper.b-tariff_twisted .b-tariff__param').each(function() {

		var headers = [];

		$(this).find('.param__header > div').each( function(i, el){

			headers.push($(el).text());

		});

		$(this).find('.param__item:not(.param__header) > div').each( function(i, el) {

			var text = headers[i%headers.length];
			$(el).attr('title', text);

		});


	});

	$('.all-countries.ks-content .wrapper').each(function() {

		var headers = [];

		$(this).find(' .countries.roaming:not(.with-scrollbar) .data.countries__table thead tr:first-child td:not(:first-child)').each( function(i, el){
			var txt = $(el).find('> span:nth-child(2)').text() + ' ' + $(el).find('> span:nth-child(4)').text()
			headers.push(txt);

		});

		$(this).find('.countries.roaming.with-scrollbar .data tbody tr:first-child td:not(:first-child)').each( function(i, el) {

			var text = headers[i%headers.length];
			$(el).attr('title', text);

		});


	});

	$('.outlets').each(function() {

		var headers = [];

		$(this).find('.outlets__header .ptl__td:not(.ptl__td_addr)').each( function(i, el){

			headers.push($(el).text());

		});

		$(this).find('.ptl .ptl__tr:not(.ptl__tr_caption) .ptl__td:not(.ptl__td_addr)').each( function(i, el) {

			var text = headers[i%headers.length];
			$(el).attr('title', text);

		});

	});


	function destroyTinyScrollBar() {
		var placesToDestroy =
			!!($('.all-countries .countries.with-scrollbar').length
			|| $('.list__main.favcountries .list__main-tbody_wrapper').length
			|| $('.channels.tinyscrollbar').length
			|| $('section.scroll-list .scroll-list__content.ui-scrollbar').length);

		if($('html').hasClass('mobile') && $('html').hasClass('touch') && placesToDestroy) {
			$.fn.tinyscrollbar = $.fn.tinyscrollbarUpdate = function () {
				return null;
			};

			if ($('.list__main.favcountries .list__main-tbody_wrapper').length) {
				$('.list__search-input>input').autocomplete({
					appendTo: $('.list__search'),
					select: function(event, ui) {
						$('.list__main-tbody .target').removeClass('target');
						var $target = $(".list__main-tbody TD.caption:contains('"+ui.item.value+"')");

						if ($target.length) {
							var relativeTop = $target.position().top;
							$('.list__main-tbody_wrapper').animate({
								scrollTop: relativeTop
							}, 100);
							$target.parent().addClass('target');
						}


					},
					response: function(event, ui) {
						var query = $('.list__search-input>input').val();
						$.each(ui.content, function(i, val) {
							val.label = ''+val.label.substr(0, query.length)+''+val.label.substr(query.length);
						});
					},
					source: (function() { return $('.list__main-tbody TD.caption').map(function() { return $(this).text(); 		}).get(); })()
				});

				$('.additional__section').each(function() {
					var $caption = $(this).find('.additional__section-caption'),
						$content = $(this).find('.additional__section-content');

					$caption.click(function() {
						$content.stop().slideToggle(100);
						$caption.toggleClass('opened');
					});
				});

			}
		}
	}

	destroyTinyScrollBar();
	function makeSlider() {

		if($(window).width() > 1100 && $('.page-home_internet .ks-promo section.switcher .slider .content').length) {
			return false;
		}

		var homeNetSlider = $('.page-home_internet .ks-promo section.switcher .slider .content');
		var homeNetIcons = $('.switcher .icons li');
		homeNetSlider.slick({
			responsive: [{
				breakpoint: 481,
				settings: {
					arrows: false,
					dots: true,
					autoplay: true,
					autoplaySpeed: 5000
				}
			}]
		});
		homeNetSlider.slick('slickGoTo', 1);

		homeNetIcons.each(function(i,el) {
			$(el).off();
		});
		homeNetSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var el = homeNetIcons.find('i[data-num="'+(currentSlide+1)+'"]');
			$('.switcher .icons li i').removeClass('active');
			el.addClass('active');
		});
		homeNetIcons.on('click', function(e){
			var _ = $(this);
			var el = _.find('i');
			var slideIndex = el.data('num');

			homeNetSlider.slick('slickGoTo', parseInt(slideIndex));

			$('.switcher .icons li i').removeClass('active');
			el.addClass('active');
		});
	}
});

