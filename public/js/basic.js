
var menuShowing = true;

function toggleMenu () {
    if (menuOpened()) {
        closeMenu()
    }
    else {
        openMenu();
    }
}

function menuOpened () {
    return $(".menu").hasClass("active");
}

function openMenu (imm) {
    menuShowing = true;
    $(".menu").addClass("active").slideDown(imm ? 0 : 300);
}

function closeMenu (imm) {
    menuShowing = false;
    $(".menu").removeClass("active").slideUp(imm ? 0 : 300);
}

function resize () {
    if (menuShowing && $(window).width() <= 520) {
        closeMenu(true);
    }
    else if (!menuShowing && $(window).width() > 520) {
        openMenu(true);
    }
}

$(window).resize(resize);

resize();
