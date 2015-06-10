/*
    CONTEXT-MENU.JS - Last updated: 25-03-15

    Usage:
            1. launchContextMenu() - used by application frame
            2. Soon ** - loadContextMenu('page.html') - run on pages where nested menus are needed
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var slideSections = $('.lv-header, .lv-main, .lv-touch-menu, .lv-sidebar, .lv-page-lock-overlay');
var contextMenu = $('.context-menu');
var page = $('.lv-page');
var contextMenuWidth = contextMenu.width(); //- 5;
var contextMenuClosed = contextMenu.not(':visible');
var pageLockOverlay = $('<span class="lv-page-lock-overlay"></span>');

//-----------------------------------------------------------------
// Launch Context Menu
//
// Note: 'context-menu-btn' lives inside the header.
// The context menu leverages the Transit animation library.
//-----------------------------------------------------------------

function launchContextMenu(target) {

    // Load
    if (target == "topMenu") {
        $('.js-user-menu').removeClass('lv-show');
        $('.js-top-menu').addClass('lv-show');

    } else if (target == "userMenu") {
        $('.js-top-menu').removeClass('lv-show');
        $('.js-user-menu').addClass('lv-show');

    } else {
        $('.js-top-menu, .js-user-menu').removeClass('lv-show'); // clear all static menus - needs dynamic
    }
    // Open the menu as normal

    if (contextMenuClosed) {
        page.addClass('is-locked').append(pageLockOverlay); // lock the page and append 'exit' overlay
        contextMenu.addClass('lv-show'); // show context menu
        contextMenu.css({ x: -contextMenuWidth/6}).transition({ x: 0, queue: false }); // slide in from left slightly

        //==================================================
        // Slide and Fade in Lock Overlay
        //==================================================

        pageLockOverlay.transition({ x: contextMenuWidth, opacity: 1, queue: false, complete: exitOverlay });

        //==================================================
        // Slide Sections OPEN
        //==================================================

        slideSections.transition({ x: contextMenuWidth, queue: false }); // complete transition
    }
}

//-----------------------------------------------------------------
// Exit Overlay
//-----------------------------------------------------------------

var exitOverlay = function(){

    pageLockOverlay.on('touchstart, touchmove, click', function(e){

    //==================================================
    // Slide and Fade in Lock Overlay
    //==================================================

    $(this).transition({ x: 0, opacity: 0, queue: false, complete:
        function(){
            $(this).remove();
        } });
    //==================================================
    // Slide Context Menu CLOSED
    //==================================================

    contextMenu.transition({ x: -contextMenuWidth/6, queue: false });

    //==================================================
    // Slide Sections CLOSED
    //==================================================

    slideSections.transition({ x: 0, queue: false, complete:

        //==================================================
        // Slide Sections CLOSED
        //==================================================

        function(){
            page.removeClass('is-locked'); // lock the page
            contextMenu.removeClass('lv-show');
            slideSections.attr('style', ''); // to be safe, remove all transforms by JS
        }
    }); // complete context menu transition
});
}

//-----------------------------------------------------------------
// launchContextMenu
//-----------------------------------------------------------------

//==================================================
// Launch Top Menu
//==================================================

$('#top-menu-btn, #user-menu-btn, #dynamic-menu-btn').on('click', function(event){
    event.preventDefault();
    if ($(this).attr('id') == 'top-menu-btn') launchContextMenu('topMenu');
    if ($(this).attr('id') == 'user-menu-btn') launchContextMenu('userMenu');
    if ($(this).attr('id') == 'dynamic-menu-btn') launchContextMenu();
});

