$(document).ready(function() {
    $(".test-tabs a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        let tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).css("display", "flex");
    });
});