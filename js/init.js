$(document).ready(function(){
  $("a[id^=jQueryBookmark").click(function(e){
    e.preventDefault();
    var bookmarkURL = window.location.href;
    var bookmarkTitle = document.title;

    if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
        // Mobile browsers
        addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
    } else if (window.sidebar && window.sidebar.addPanel) {
        // Firefox version < 23
        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
        // Firefox version >= 23 and Opera Hotlist
        $(this).attr({
            href: bookmarkURL,
            title: bookmarkTitle,
            rel: 'sidebar'
        }).off(e);
        return true;
    } else if (window.external && ('AddFavorite' in window.external)) {
        // IE Favorite
        window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
        // Other browsers (mainly WebKit - Chrome/Safari)
        alert('Please press ' + (/Mac/i.test(navigator.userAgent) ? 'CMD' : 'Strg') + ' + D to add this page to your favorites.');
    }

    return false;
});
  });
});
