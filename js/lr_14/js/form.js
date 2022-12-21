$(document).ready(function () {
  $(".form").on("click", ".form__tab-btn", function () {
    $(".form").find(".active").removeClass("active");
    $(this).addClass("active");
    $(".form__tab").eq($(this).index()).addClass("active");
  });
});
