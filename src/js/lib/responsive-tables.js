(function() {
	var switched = false;
	var updateTables = function () {

		if (($(window).width() < 800) && !switched && ($(".data.tariff__table").parents('.table-wrapper').length < 1)) {
			switched = true;


			$(".data.tariff__table").each(function (i, element) {
				$(element).addClass('responsive');
				splitTable($(element));

			});
			return true;
		}
		else if (switched && ($(window).width() > 800)) {
			switched = false;
			$(".data.tariff__table").each(function (i, element) {
				$(element).removeClass('responsive');

				unsplitTable($(element));
			});
		}
	};
	$(window).load(updateTables);
	$(window).bind("resize", updateTables);
	function splitTable(original) {
		original.wrap("<div class='table-wrapper' />");
		var copy = original.clone();
		copy.find("td:not(:first-child):not(:nth-child(2)), th:not(:first-child):not(:nth-child(2))").css("display", "none");
		copy.removeClass("responsive");
		original.closest(".table-wrapper").append(copy);
		copy.wrap("<div class='pinned' />");
		original.wrap("<div class='scrollable' />");
	}

	function unsplitTable(original) {
		original.closest(".table-wrapper").find(".pinned").remove();
		original.unwrap();
		original.unwrap();
	}
})();

