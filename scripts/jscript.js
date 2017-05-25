// Highlighht top scrollbar items as you scroll
$('body').scrollspy({ target: '.navbar-fixed-top' });

// De-click the top nav-bar items after clicking
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

//
$('.navbar-brand').click(function() {
    $(".navbar-collapse").collapse('hide');
});


//
$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if 
    });
})

//Pause the Carousels
$('.carousel').carousel({
    interval: "false"
});

// Always open the Modal Carousels on the active (first, and then any slide manually selected) image
$(".modal").on('show.bs.modal', function() {
    var firstItem = $(this).find(".item:first");
    if (!firstItem.hasClass("active")) {
        $(this).find(".active").removeClass("active");
        firstItem.addClass("active");
    }
});