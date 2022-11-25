$(document).ready(function() {

    $('a').click(function() {
        let $prevSibling = $(this).prev();

        $prevSibling.toggleClass("hide");
        if ($prevSibling.hasClass("hide")) {
            $(this).text('Show more');
        } else
            $(this).text('Show less');
    });
});