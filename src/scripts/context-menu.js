/*
    CONTEXT-MENU.JS
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var body = $('body');

//-----------------------------------------------------------------
// Trigger 'context-menu-is-hiding' class on body. Simulate
// off-canvas menu using mostly CSS to handle it (adhoc)
//-----------------------------------------------------------------

$('.js-mobile-toggle-btn a').click(function(e){
    e.preventDefault();

    if (body.hasClass('context-menu-is-hiding')) {
        body.removeClass('context-menu-is-hiding');
    } else {
        body.addClass('context-menu-is-hiding');
    }

});

//==================================================
//
//==================================================