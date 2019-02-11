if (typeof NodeList !== "undefined" && NodeList.prototype) {
	if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
	}
	// Iterability
	if (typeof Symbol !== "undefined" && Symbol.iterator && !NodeList.prototype[Symbol.iterator]) {
		Object.defineProperty(NodeList.prototype, Symbol.iterator, {
			value: Array.prototype[Symbol.itereator],
			writable: true,
			configurable: true
		});
	}
}

var portfolios_data = [
	{
		"id": 1,
		"name": "Packcreat8",
		"description": "Website showcase for Packcreat8 agency. This website build with wordpress theme.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2018/10/FireShot-Capture-058-Packcreat8-%E2%80%93-Packcreat8-http___packcreat8.com__mini-e1548688189864.jpg",
				"alt": "Packcreat8",
				"caption": ""
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Backend"
			},
			{
				"name": "Wordpress"
			}
		],
		"client": "Packcreat8",
		"demos": [
			{
				"url": "http://packcreat8.com/"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 2,
		"name": "GeTeCe",
		"description": "Company site for GeTeCe Group. GeTeCe is company about ingredient",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2018/10/FireShot-Capture-053-GeTeCe-http___getece.com_th__mini.jpg",
				"alt": "GeTeCe Home Page",
				"caption": "Home page"
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2018/10/FireShot-Capture-054-%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%81%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%B8%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%A5%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B8%A3%E0%B8%AA-%E2%80%93-GeTeCe-http___getece.com_th_flavours__mini.jpg",
				"alt": "GeTeCe Flavours Page",
				"caption": "Flavours Page"
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2018/10/FireShot-Capture-056-%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%88%E0%B8%B5%E0%B8%97%E0%B8%B5%E0%B8%8B%E0%B8%B5-%E2%80%93-GeTeCe-http___getece.com_th_our-company__mini.jpg",
				"alt": "GeTeCe About Page",
				"caption": "About Page"
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Frontend"
			},
			{
				"name": "Backend"
			}
		],
		"client": "GeTeCe Group",
		"demos": [
			{
				"url": "http://getece.com"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 3,
		"name": "Vanzon",
		"description": "e-commerce site for Vanzon Singthong. Develop with Wordpress and Woocommerce.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2018/10/FireShot-Capture-049-Vanzon-Singthong-%E2%80%93-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A-%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A2-_-http___vanzon-singthong.com__mini.jpg",
				"alt": "Home Page",
				"caption": "Home page"
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2018/10/FireShot-Capture-050-Products-%E2%80%93-Vanzon-Singthong-http___vanzon-singthong.com_products__mini.jpg",
				"alt": "Product Page",
				"caption": "Products Page"
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Backend"
			},
			{
				"name": "Wordpress"
			},
			{
				"name": "Woocommerce"
			}
		],
		"client": "Vanzon Singthong",
		"demos": [
			{
				"url": "http://vanzon-singthong.com"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 4,
		"name": "Sobha",
		"description": "e-commerce site for Vanzon Singthong. Develop with Wordpress and Woocommerce.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2018/10/FireShot-Capture-047-Botanical-Garden-http___sobhabotanicalgarden.com_home-TH_mini.jpg",
				"alt": "Home Page"
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Frontend"
			}
		],
		"client": "Sobha Botanical Garden",
		"demos": [
			{
				"url": "http://sobhabotanicalgarden.com/home-TH"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 5,
		"name": "MTM Academy",
		"description": "Brochure site for MTM Academy. Develop with Wordpress for easy to manage content by MTM admin.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2018/10/FireShot-Capture-048-MTM-Academy-http___mtm-academy.com__mini.jpg",
				"alt": "Home Page"
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Backend"
			},
			{
				"name": "Wordpress"
			}
		],
		"client": "MTM Academy",
		"demos": [
			{
				"url": "http://mtm-academy.com/"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 6,
		"name": "Freshdoze",
		"description": "Brochure site for Freshdoze product. Develop with Wordpress and create custom theme for custom design.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/freshdoze-landing.png",
				"alt": "Landing Page",
				"caption": "Landing Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/boostup-product-page.png",
				"alt": "Boostup Product Page",
				"caption": "Boostup Product Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/l-carnitine-product-page.png",
				"alt": "L-carnitine Product Page",
				"caption": "L-carnitine Product Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/collapene-c-product-page.png",
				"alt": "Collapene.C Product Page",
				"caption": "Collapene.C Product Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/innovation-page.png",
				"alt": "Innovation Page",
				"caption": "Innovation Page",
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Frontend"
			},
			{
				"name": "Backend"
			},
			{
				"name": "Wordpress"
			}
		],
		"client": "Heaven drops",
		"demos": [
			{
				"url": "https://www.freshdoze.com/"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 7,
		"name": "DASTA",
		"description": "Brochure site for goverment sector name องค์การบริหารการพัฒนาพื้นที่พิเศษเพื่อการท่องเที่ยวอย่างยั่งยืน(DASTA). Develop with Wordpress and create custom theme for custom design.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/dasta-home.png",
				"alt": "Home Page",
				"caption": "Home Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/dasta-categories.png",
				"alt": "Categories Page",
				"caption": "Categories Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/dasta-content.png",
				"alt": "Content Page",
				"caption": "Content Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/dasta-gallery.png",
				"alt": "Gallery Page",
				"caption": "Gallery Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/dasta-contact.png",
				"alt": "Contact Page",
				"caption": "Contact Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/dasta-position.png",
				"alt": "Position Page",
				"caption": "Position Page",
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Frontend"
			},
			{
				"name": "Backend"
			},
			{
				"name": "Wordpress"
			}
		],
		"client": "Dasta",
		"demos": [
			{
				"url": "https://pogaam.com/demo/wpda1/"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 8,
		"name": "Omelet",
		"description": "Restaurant comic essay in website format. Website design like a smooth and easy to read.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/omelet-home-1-e1488982361986.png",
				"alt": "Home Page",
				"caption": "Home Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/omelet-chapter.png",
				"alt": "Chapter Page",
				"caption": "Chapter Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/omelet-detail.png",
				"alt": "Content Page",
				"caption": "Content Page",
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Frontend"
			},
			{
				"name": "Backend"
			},
			{
				"name": "Wordpress"
			}
		],
		"client": "enterdock co., ltd.",
		"demos": [
			{
				"url": "http://omelet.in.th/"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 9,
		"name": "Ongphra",
		"description": "Application for introduction to learning the culture and history of Phra Pathom Chedi.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/ongphra-cover.png",
				"alt": "Ongphra Application",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/ongphra-home-en.png",
				"alt": "Home Page",
				"caption": "Home Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/ongphra-lists-en.png",
				"alt": "Lists Page(English)",
				"caption": "Lists Page(English)",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/ongphra-lists-th.png",
				"alt": "Lists Page(Thai)",
				"caption": "Lists Page(Thai)",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/ongphra-detail-en.png",
				"alt": "Content Page(English)",
				"caption": "Content Page(English)",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/ongphra-detail-en.png",
				"alt": "Content Page(English)",
				"caption": "Content Page(English)",
			},
		],
		"categories": [
			{
				"name": "Application"
			},
			{
				"name": "PhoneGap"
			},
			{
				"name": "jQuery Mobile"
			}
		],
		"client": "Wannapa",
		"demos": [
		],
		"app_stores": {
			"app_store": "https://itunes.apple.com/th/app/ongphra/id1132855943?mt=8",
			"play_store": "https://play.google.com/store/apps/details?id=com.pannupat.ongphra"
		}
	},
	{
		"id": 10,
		"name": "SCB IEP let's bike",
		"description": "Website for bressing thai king in let's bike concept. This site support more people come in site same time with use data from json file because we can reduce number of sql connection and json file it can cache.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/scb-iep-lets-bike-home.png",
				"alt": "Home Page",
				"caption": "Home Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/scb-iep-lets-bike-find-people.png",
				"alt": "Find Blessing",
				"caption": "Find Blessing",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/scb-iep-lets-bike-blessing.png",
				"alt": "Blessing",
				"caption": "Blessing",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/scb-iep-lets-bike-idol.png",
				"alt": "Bike Idol Page",
				"caption": "Bike Idol Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/scb-iep-lets-bike-idol-detail.png",
				"alt": "Bike Idol Blessing",
				"caption": "Bike Idol Blessing",
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Frontend"
			}
		],
		"client": "SCB",
		"demos": [
			{
				"url": "http://www.scbiepletsbike.com/"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 11,
		"name": "Pixelone",
		"description": "Brochure website for Pixelone.",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/pixel-one-about.png",
				"alt": "About Page",
				"caption": "About Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/pixel-one-work.png",
				"alt": "Work Page",
				"caption": "Work Page",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/pixel-one-our-services.png",
				"alt": "Services Page",
				"caption": "Services Page",
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Frontend"
			}
		],
		"client": "Pixelone",
		"demos": [
			{
				"url": "http://www.pixelone.co.th"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 12,
		"name": "AIS Anime KIDS",
		"description": "One page site present product in AIS. This site is a kid mood as a look like funny, little moving and interactive",
		"images": [
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/ais-anime-kids.jpg",
				"alt": "AIS Anime KIDS Webpage",
			}
		],
		"categories": [
			{
				"name": "Website"
			},
			{
				"name": "Frontend"
			}
		],
		"client": "AIS",
		"demos": [
			{
				"url": "http://www.ais.co.th/playbox/movie/kids/index.html"
			}
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	},
	{
		"id": 13,
		"name": "Sleep Avatar",
		"description": "Health tool the rest it also helps to tell the quality of sleep. The Quality of sleep as a result, many of sleeping habit. To help you sleep habits and contributes to behavioral change for the better sleep indirectly as well.",
		"images": [
			{
				"url": "https://www.youtube.com/embed/ULlRGhqg6KM?feature=oembed",
				"isVideo": true
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/sleepavatar-1.jpg",
				"alt": "Sleep Avatar Application",
			},
			{
				"url": "https://pogaam.com/wp-content/uploads/2017/03/sleepavatar-2.jpg",
				"alt": "Sleep Avatar Application",
			}
		],
		"categories": [
			{
				"name": "Application"
			},
			{
				"name": "App Design"
			},
			{
				"name": "Objective-C"
			}			
		],
		"demos": [
		],
		"app_stores": {
			"app_store": "",
			"play_store": ""
		}
	}
];
var skills_data = [
	{
		"name": "HTML5",
		"image": "img/skill/html5.svg"
	},
	{
		"name": "CSS3",
		"image": "img/skill/css3.svg"
	},
	{
		"name": "SASS",
		"image": "img/skill/sass.svg"
	},
	{
		"name": "Gulp",
		"image": "img/skill/gulp.svg"
	},
	{
		"name": "Javascript",
		"image": "img/skill/javascript.svg"
	},
	{
		"name": "Vue.js (Basic)",
		"image": "img/skill/vue.svg"
	},
	{
		"name": "jQuery",
		"image": "img/skill/jquery.svg"
	},
	{
		"name": "PHP",
		"image": "img/skill/php.svg"
	},
	{
		"name": "Laravel",
		"image": "img/skill/laravel.svg"
	},
	{
		"name": "Wordpress",
		"image": "img/skill/wordpress.svg"
	},
	{
		"name": "Ruby",
		"image": "img/skill/ruby.svg"
	},
	{
		"name": "Ruby on Rails",
		"image": "img/skill/rails.svg"
	},
	{
		"name": "MySQL",
		"image": "img/skill/mysql.svg"
	},
	{
		"name": "Git",
		"image": "img/skill/git.svg"
	},
	{
		"name": "Progressive Web App",
		"image": "img/skill/pwa.svg"
	}
];

var app = new Vue({
	el: "#app",
	data: {
		a: 0,
		state: {
			page_ready: false,
			navigation_is_open: false,
			page_main_is_active: true,
			page_main_index: 0,
			page_current: "home",
		},
		navigation_page_current: "",
		portfolios: portfolios_data,
		current_portfolio: portfolios_data[0],
		skills: skills_data
	},
	methods: {
		toggleNavigation: function() {
			this.state.navigation_is_open = !this.state.navigation_is_open;

			if (this.state.navigation_is_open) {
				showElement(navigation);
			}
			else {
				hideElement(navigation);
			}
		},
		goToPage: function(pageName = "home", portfolio = null) {
			
			// Check navigation open
			if (this.state.navigation_is_open) {
				this.state.navigation_is_open = false;
				hideElement(navigation);
			}

			if (this.state.page_current !== pageName) {

				// Reset morph position
				morph.style.top = 0;

				// Check #main_container is active ?
				if (!this.state.page_main_is_active) {
					var otherContainer = document.getElementById(this.state.page_current + "_container");
					hideOtherContainer(otherContainer);
				}

				if (pageName == "home") {
					showMainContainer();
					if (this.state.page_main_index != 0) {
						mainContainerSlider.allowSlidePrev = true;
						mainContainerSlider.slideTo(0);
					}
					this.state.page_main_is_active = true;
					this.state.page_main_index = 0;
					this.state.page_current = "home";
					this.navigation_page_current = "";
				}
				else if (pageName == "portfolios") {
					showMainContainer();
					if (this.state.page_main_index != 1) {
						mainContainerSlider.slideTo(1);
					}
					this.state.page_main_is_active = true;
					this.state.page_main_index = 1;
					this.state.page_current = "portfolios";
					this.navigation_page_current = "";
				}
				else if (pageName == "portfolio") {
					if (this.state.page_main_is_active) {
						hideElement(mainContainer, showOtherContainer(portfolioContainer));
					}
					else {
						showOtherContainer(portfolioContainer);
					}					

					this.state.page_main_is_active = false;
					this.state.page_current = "portfolio";
					this.navigation_page_current = portfolio.name;
					this.current_portfolio = portfolio;
					
					// Remove old slide
					portfolioSlider.removeAllSlides();

					// Add new slide
					var slidesHTML = [];
					for (var i = 0; i < portfolio.images.length; i++) {
						var html = getPortfolioSlideHTML(portfolio.images[i]);						
						slidesHTML.push(html);
					}					
					portfolioSlider.appendSlide(slidesHTML);

					// Update slide
					portfolioSlider.activeIndex = 0;
					setTimeout(function() {						
						portfolioSlider.update();
					}, 500);
				}
				else if (pageName == "about") {
					if (this.state.page_main_is_active) {
						hideElement(mainContainer, showOtherContainer(aboutContainer));
					}
					else {
						showOtherContainer(aboutContainer);
					}
					
					this.state.page_main_is_active = false;
					this.state.page_current = "about";
					this.navigation_page_current = "About";
				}
				else if (pageName == "contact") {
					showOtherContainer(contactContainer);
					this.state.page_main_is_active = false;
					this.state.page_current = "contact";
					this.navigation_page_current = "Contact";
				}
				
			}
		}
	}
});

// Global variable
var loading   = document.getElementById("loading_container");
var hamburger = document.getElementById("hamburger");
var navigation = document.getElementById("navigation");

var mainContainer         = document.getElementById("main_container");
var mainContainerSlider   = undefined;
var navigationPageCurrent = document.getElementById("navigation_page_current");

var portfolioContainer = document.getElementById("portfolio_container");
var portfolioSlider    = undefined;

var aboutContainer   = document.getElementById("about_container");
var contactContainer = document.getElementById("contact_container");

var morph = document.getElementById("morph");

// On load
document.addEventListener("DOMContentLoaded", function () {

	// START SETUP PAGE
	setFullPageSize();

	// Main container slider
	mainContainerSlider = new Swiper("#main_container", {
		direction: "vertical",
		speed: 1000,
		mousewheel: true,
		keyboard: true,		
		allowSlidePrev: false,
		on: {
			slideChange: function () {
				if (this.activeIndex === 0) {
					console.log('0');
					this.allowSlidePrev = false;
					this.allowSlideNext = true;
				}
				else if (this.activeIndex === 1) {
					app.state.page_main_index = 1;
					app.state.page_current = "portfolios";
					this.allowSlidePrev = false;
					this.allowSlideNext = false;
				}
			},
		}
	});

	// Portfolio lists arrow slider
	var portfolioListArrowUp   = document.getElementById("portfolio_list_arrow_up");
	var portfolioListArrowDown = document.getElementById("portfolio_list_arrow_down");

	// Portfolio lists slider
	var portfolioListsSlider = new Swiper("#portfolio_lists", {
		direction: "vertical",
		mousewheel: true,
		keyboard: true,
		slidesPerView: "auto",
		nested: true,
		on: {
			slideChange: function() {
				if (this.isBeginning) {
					portfolioListArrowUp.classList.add('disabled');
				}
				else {
					portfolioListArrowUp.classList.remove("disabled");
				}
				if (this.isEnd) {
					portfolioListArrowDown.classList.add("disabled");
				}
				else {
					portfolioListArrowDown.classList.remove("disabled");
				}
			}
		}
	});
	portfolioListArrowUp.addEventListener("click", function () {
		portfolioListsSlider.slidePrev();
	});
	portfolioListArrowDown.addEventListener("click", function() {
		portfolioListsSlider.slideNext();
	});

	// Portfolio slider
	portfolioSlider = new Swiper("#portfolio_slide", {
		mousewheel: false,
		keyboard: true,
		grabCursor: true,
		slidesPerView: "auto",
		autoHeight: true,
		centeredSlides: true,
	});

	hideElement(loading);

	app.state.page_ready = true;

	// Anime Morph
	var morph = document.getElementById("morph");
	var snapMorph = Snap(morph);

	var morphBlue1 = snapMorph.select('#morph_front_blue_1');
	var morphBlue2 = snapMorph.select('#morph_front_blue_2');

	var morphBlue1Points = morphBlue1.node.getAttribute('d');
	var morphBlue2Points = morphBlue2.node.getAttribute('d');

	var morphGreen1 = snapMorph.select('#morph_front_green_1');
	var morphGreen2 = snapMorph.select('#morph_front_green_2');

	var morphGreen1Points = morphGreen1.node.getAttribute('d');
	var morphGreen2Points = morphGreen2.node.getAttribute('d');

	var morphBlueTo2 = function () {
		morphBlue1.animate({ d: morphBlue2Points }, 10000, mina.linear, morphBlueTo1);
	}
	var morphBlueTo1 = function () {
		morphBlue1.animate({ d: morphBlue1Points }, 10000, mina.linear, morphBlueTo2);
	}
	var morphGreenTo2 = function () {
		morphGreen1.animate({ d: morphGreen2Points }, 13000, mina.linear, morphGreenTo1);
	}
	var morphGreenTo1 = function () {
		morphGreen1.animate({ d: morphGreen1Points }, 13000, mina.linear, morphGreenTo2);
	}

	morphBlueTo2();
	morphGreenTo2();

	// END SETUP PAGE

	// Input effect
	var inputElements = document.querySelectorAll("input, textarea");
	inputElements.forEach(function(element) {
		element.addEventListener("change", function() {
			if (this.value != "") {
				this.classList.add("is-fill");
			}
			else {
				this.classList.remove("is-fill");
			}
		});
	});	

	/**
	 * Other container on scorll
	 * for move morph
	 */
	portfolioContainer.addEventListener("scroll", moveMorphOnScroll);
	aboutContainer.addEventListener("scroll", moveMorphOnScroll);
	contactContainer.addEventListener("scroll", moveMorphOnScroll);
	
});

// On resize
window.addEventListener("resize", function () {
	setFullPageSize();
}, true);


function getScreenSize() {
	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName("body")[0],
		x = w.innerWidth || e.clientWidth || g.clientWidth,
		y = w.innerHeight || e.clientHeight || g.clientHeight;
	return {
		width: x,
		height: y
	};
}

function setFullPageSize() {
	var screenSize = getScreenSize();
	var elements   = document.querySelectorAll(".full-page");
	elements.forEach(function (element) {
		element.style.width  = screenSize.width + "px";
		element.style.height = screenSize.height + "px";
	});	
}

function showElement(element, callback) {
	element.classList.remove("hidden");
	element.classList.add("showing");
	setTimeout(function () {
		element.classList.remove("showing");
		if (callback !== undefined) {
			callback();
		}
	}, 500);
}

function hideElement(element, callback) {
	element.classList.add("hiding");
	setTimeout(function () {
		element.classList.add("hidden");
		element.classList.remove("hiding");
		if (callback !== undefined) {
			callback();
		}
	}, 500);
}

function showMainContainer() {
	mainContainer.classList.remove("hidden");
}

function showOtherContainer(otherContainer = undefined) {
	if (otherContainer !== undefined) {
		showElement(otherContainer, function() {

			// Reset scroll
			otherContainer.scrollTop = 0;
			
			// Hide Main container
			mainContainer.classList.add("hidden");
		});
	}
}

function hideOtherContainer(otherContainer = undefined) {
	if (otherContainer !== undefined) {
		// mainContainer.classList.remove("hidden");
		hideElement(otherContainer);
	}
}

function svgMorph(left, right) {
	return polymorph.interpolate([left, right]);
}

function moveMorphOnScroll(e) {
	morph.style.top = (e.target.scrollTop * -1) + "px";
	changeHamburgerColor(e.target.scrollTop);
}

function changeHamburgerColor(scrollTop) {
	var screenSize = getScreenSize();
	var pointScrollTop = 100;
	if (screenSize.width >= 1070) {
		pointScrollTop = 150;
	}
	else if (screenSize.width >= 820) {
		pointScrollTop = 120;
	}

	if (scrollTop > pointScrollTop) {
		hamburger.classList.add("is-change-color");
	} else {
		hamburger.classList.remove("is-change-color");
	}
}

function getPortfolioSlideHTML(data) {
	var html = '';
	if (data !== undefined) {
		html += '<div class="swiper-slide">';

		if (data.isVideo) {
			html += '<div class="embed-responsive embed-responsive-16by9">' +
						'<iframe class="embed-responsive-item" src="' + data.url + '" allowfullscreen></iframe>' +
					'</div>';
		}
		else {
			html += '<img src="' + data.url + '" alt="' + data.alt + '">';
			if (data.caption) {
				html += '<p>' + data.caption + '</p>';
			}
		}
		
		html += '</div>';
	}
	return html;
}