// 頁籤切換控制
$(document).ready(function() {
  $(".test-tabs a").click(function(event) {
      event.preventDefault();
      $(this).parent().addClass("current");
      $(this).parent().siblings().removeClass("current");
      let tab = $(this).attr("href");
      $(".tab-content").not(tab).css("display", "none");
      $(tab).css("display", "flex");
      $('.test-video').slick("refresh");
      $('.test-pic').slick("refresh");
      $('.test-art').slick("refresh");
  });
});

// 輪播設定
$('.test-video').slick({
  infinite: false,
  slidesToShow: 1,
});

$('.test-pic').slick({
  infinite: false,
  slidesToShow: 1,
});

$('.test-art').slick({
  infinite: false,
  slidesToShow: 3,
});

$('.test-recom').slick({
  infinite: false,
  slidesToShow: 4,
})