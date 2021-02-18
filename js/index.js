$(document).ready(function(){
    setTimeout(function () {
        window.scrollTo(0, 0);
    },100);
    $(".arrow").click(function(){
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });
  });