
$(document).ready(function() {

	headerInject = `
		<div class="mobile-menu js-mob-menu">
			<div class="mobile-menu__icon icon-hamburger"></div>
			<div class="mobile-menu__overlay"></div>
			<div class="mobile-menu__contents">
				<div class="mobile-menu__nav">
					<ul>
						<li><a class="js-mob-menu-link is-main" href="#" data-panel="js-mob-menu-panel-1"><i class="icon-mobile"></i>Мобільний зв'язок</a></li>
						<li><a class="js-mob-menu-link is-main" href="#" data-panel="js-mob-menu-panel-2"><i class="icon-home"></i>Домашній Київстар</a></li>
						<li><a class="js-mob-menu-link is-main" href="#" data-panel="js-mob-menu-panel-3"><i class="icon-eshop"></i>Інтернет-магазин</a></li>
						<li><a class="js-mob-menu-link is-main" href="#" data-panel="js-mob-menu-panel-4"><i class="icon-help"></i>Підтримка</a></li>
						<li><a class="js-mob-menu-link is-main" href="#" data-panel="js-mob-menu-panel-6"><i class="icon-business"></i>Для бізнесу</a></li>
						<li><a class="js-mob-menu-link is-main" href="#" data-panel="js-mob-menu-panel-5"><i class="icon-star"></i>Київстар</a></li>
					</ul>
				</div>
				<div class="mobile-menu__panel js-mob-menu-panel js-mob-menu-panel-1">
					<h3>Мобільний зв'язок</h3>
					<ul>
						<li><a object-id="8457">Тарифи</a></li>
						<li><a object-id="66">Послуги</a></li>
						<li><a object-id="9817">Додатки</a></li>
						<li><a object-id="10517">Дзвінки за кордон</a></li>
						<li><a object-id="40997">Роумінг</a></li>
						<li><a object-id="43817">3G</a></li>
						<li><a object-id="40258">Обслуговання та магазини</a></li>
						<li><a href="https://pay.kyivstar.ua/">Поповнення рахунку</a></li>
					</ul>
				</div>
				<div class="mobile-menu__panel js-mob-menu-panel js-mob-menu-panel-2">
					<h3>Домашній Київстар</h3>
					<ul>
						<li><a object-id="38417">ТБ-програма</a></li>
						<li><a object-id="19877">Інтернет</a></li>
						<li><a object-id="37358">Пристрої</a></li>
						<li><a object-id="38537">Оплата</a></li>
						<li><a object-id="30997">Послуги</a></li>
						<li><a object-id="22997">Налаштування Інтернет</a></li>
						<li><a object-id="38797">Налаштування ТБ</a></li>
					</ul>
				</div>
				<div class="mobile-menu__panel js-mob-menu-panel js-mob-menu-panel-3">
					<h3>Інтернет магазин</h3>
					<ul>
						<li><a href="http://shop.kyivstar.ua/ua/smartphones">Смартфони</a></li>
						<li><a href="http://shop.kyivstar.ua/ua/phones">Мобiльнi Телефони</a></li>
						<li><a href="http://shop.kyivstar.ua/ua/tablets">Планшети</a></li>
						<li><a href="http://shop.kyivstar.ua/ua/routers">Модеми і Роутери</a></li>
						<li><a href="http://shop.kyivstar.ua/ua/accessories">Аксесуари</a></li>
					</ul>
				</div>
				<div class="mobile-menu__panel js-mob-menu-panel js-mob-menu-panel-4">
					<h3>Підтримка</h3>
					<ul>
						<li><a object-id="40397">Мобільний зв'язок</a></li>
						<li><a object-id="40557">Мобільний інтернет</a></li>
						<li><a object-id="40577">Міжнародний зв'язок</a></li>
						<li><a object-id="40597">Домашній Київстар</a></li>
						<li><a object-id="40619">Мій Київстар</a></li>
						<li><a object-id="40437">Налаштування</a></li>
					</ul>
				</div>
				<div class="mobile-menu__panel js-mob-menu-panel js-mob-menu-panel-5">
					<h3>Київстар</h3>
					<ul>
						<li><a class="js-mob-menu-link" data-panel="js-mob-menu-panel-5-1" href="#"><i class="icon icon-prev icon-rotate"></i>Про компанію</a></li>
						<li><a object-id="15808">Акції і Новини</a></li>
					</ul>
				</div>
				<div class="mobile-menu__panel js-mob-menu-panel js-mob-menu-panel-5-1">
					<a href="#" class="mobile-menu__back js-mob-menu-link" data-panel="js-mob-menu-panel-5"><i class="icon icon-prev"></i>Назад</a>
					<h3>Про компанію</h3>
					<ul>
						<li><a object-id="30">Про Київстар</a></li>
						<li><a object-id="3836">Соціальна відповідальність</a></li>
						<li><a object-id="21897">Кар’єра</a></li>
						<li><a object-id="36">Важливо знати</a></li>
					</ul>
				</div>
				<div class="mobile-menu__panel js-mob-menu-panel js-mob-menu-panel-6">
					<h3>Бізнесу</h3>
					<ul>
						<li><a class="js-mob-menu-link" data-panel="js-mob-menu-panel-6-1" href="#"><i class="icon icon-prev icon-rotate"></i>Малый и средний</a></li>
						<li><a object-id="24617">Великий</a></li>
					</ul>
				</div>
				<div class="mobile-menu__panel js-mob-menu-panel js-mob-menu-panel-6-1">
					<a href="#" class="mobile-menu__back js-mob-menu-link" data-panel="js-mob-menu-panel-6"><i class="icon icon-prev"></i>Назад</a>
					<h3>Малый та средній бізнес</h3>
					<ul>
						<li><a object-id="10237">Мобільний зв'язок</a></li>
						<li><a object-id="33837">Інтернет</a></li>
						<li><a object-id="11578">Міжнародний роумінг</a></li>
						<li><a object-id="14177">Фіксований зв'язок</a></li>
					</ul>
				</div>
				<div class="mobile-menu__location">
					<a href="#"><i class="icon-location"></i>Івано-Франківська обл.</a>
				</div>
				<div class="mobile-menu__lang">
					<a class="ukrls langsm is-active" href="#">Укр</a>
					<a class="rusls langsm" href="#">Рус</a>
					<a class="engls langsm" href="#">Eng</a>
				</div>
			</div>
		</div>
	`;
	footerInject = `
		<div class="copyright on-mobile">
			<p>© 1998–2016 ПрАТ «Київстар» Всі права захищено.</p>
			<p>Використання матеріалів цього сайту можливе тільки<br />
			з посиланням на джерело.</p>
		</div>
	`;
	footerInject1 = `
		<a href="http://kyivstar.ua/app" class="social-links__application">
								<span>Завантажити додаток<br>
«Мій Київстар»</span> <span class="social-links__application-icon"><i class="icon-star"></i></span>
		</a>
	`;
	tariffsInject = `
		<div class="neo-tariffs__select">
			<div class="neo-tariffs__select-value">для дзвінків</div>
			<select name="tarif" id="">
				<option value="1">для дзвінків</option>
				<option value="3">для дзвінків та
				інтернету</option>
				<option value="5">для смартфона все
				включено</option>
				<option value="7">контракт</option>
			</select>
		</div>
	`;
	// jQuery.fn.swapWith = function(to) {
	//     return this.each(function() {
	//         var copy_to = $(to).clone(true);
	//         var copy_from = $(this).clone(true);
	//         $(to).replaceWith(copy_from);
	//         $(this).replaceWith(copy_to);
	//     });
	// };

		$( headerInject ).insertBefore( "header nav .main" );
		$( footerInject ).insertAfter( ".abn-service" );
		$( footerInject1 ).insertAfter( ".social-links .vk" );
		// $( tariffsInject ).insertBefore( ".sheets-tabs .ui-tabs-nav" );
		// moving visual to beginning of parent

		$('.b-tariff__info .visual').detach().prependTo('.b-tariff__info');
		// switching order for service page
		// $('.main').each(function(index, el) {
		// 	a = $(this).find('.visual');
		// 	b = $(this).find('.content');
		// 	a.swapWith(b);
		// });


});