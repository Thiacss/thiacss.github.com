﻿$(document).on(
"click",
"a",
function (event) {

    // Stop the default behavior of the browser, which
    // is to change the URL of the page.
    event.preventDefault();

    // Manually change the location of the page to stay in
    // "Standalone" mode and change the URL at the same time.
    if ($(event.target).attr("href")) {
        location.href = $(event.target).attr("href");
    } else {
        location.href = $(event.target).parent().attr("href");
    }

}
);