jQuery(document).ready(function ($) {
	// Mobile Navigation
	if ($("#nav-menu-container").length) {
		var $mobile_nav = $("#nav-menu-container").clone().prop({
			id: "mobile-nav",
		});
		$mobile_nav.find("> ul").attr({
			class: "",
			id: "",
		});
		$("body").append($mobile_nav);
		$("body").append('<div id="mobile-body-overly"></div>');

		$(document).on("click", "#mobile-nav-toggle", function (e) {
			$("body").toggleClass("mobile-nav-active");
			$("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
			$("#mobile-body-overly").toggle();
		});

		$(document).click(function (e) {
			var container = $("#mobile-nav, #mobile-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($("body").hasClass("mobile-nav-active")) {
					$("body").removeClass("mobile-nav-active");
					$("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
					$("#mobile-body-overly").fadeOut();
				}
			}
		});
	} else if ($("#mobile-nav, #mobile-nav-toggle").length) {
		$("#mobile-nav, #mobile-nav-toggle").hide();
	}

	//Highlight Navbar
	var items = document.querySelectorAll(".nav-item");
	items.forEach((element) => {
		element.addEventListener("click", function () {
			items.forEach((item) => {
				item.classList.remove("menu-active");
			});
			element.classList.add("menu-active");
		});
	});

	// Header scroll class
	$(window).scroll(function () {
		if ($(this).scrollTop() > 80) {
			$("#header").addClass("header-scrolled");
		} else {
			$("#header").removeClass("header-scrolled");
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".back-to-top").fadeIn("slow");
		} else {
			$(".back-to-top").fadeOut("slow");
		}
	});
});
