/*
    MAIN SCRIPTS
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

// var TOUCH_ENABLED = $(".touch").length;

//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
    startMasonry();

    $(document).foundation({
        tab: {
          callback : function (tab) {
            startMasonry();
          }
        }
      });
});

$(window).load(function() {
    NProgress.done();
    startMasonry();
});

// window.onload = function(){
//     // NProgress.done();
// }

//-----------------------------------------------------------------
// Start Masonry
//-----------------------------------------------------------------

function startMasonry() {
  var grid = document.querySelector('.result-tiles');
    var msnry = new Masonry( grid, {
    });
}

startMasonry();

//-----------------------------------------------------------------
// <= IE8 Caution Message
//-----------------------------------------------------------------

//$('.lv-alert .close-btn').click(function(){$(this).parent().hide();});

//-----------------------------------------------------------------
// +++ HELPERS +++
//-----------------------------------------------------------------
//==================================================
// Developer: COMMAND+S for screen width
//==================================================

$(document).keypress(function(event) {
    if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
        event.preventDefault();
        $('body').toggleClass('legacy-theme');
        // alert("(w) "+$(window).width()+" (h) "+$(window).height());
        return false;
    }
    return true;
});
//==================================================
//
//==================================================