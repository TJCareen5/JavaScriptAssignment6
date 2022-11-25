var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.slim.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
$(document).ready(function() {
    $("a").each(function() {
        $(this).click(function(event) {
            event.preventDefault();
            var url = $(this).attr("href");
            var title = $(this).attr("title");
            $("#image").attr("src", url);
            $("#caption").html(title);
        });
    });
});