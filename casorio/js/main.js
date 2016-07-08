function setNavigation() {
  var path = window.location.pathname;
  path = path.replace(/\/$/, "");
  path = decodeURIComponent(path);

  $(".nav a").each(function () {
      var href = $(this).attr('href');
      if (path.substring(1) === href) {
          $(this).closest('li').addClass('active');
      }
  });
}

$(function(){
  $("#main-menu").load("templates/menu.html", function(){
    setNavigation();
  });

});