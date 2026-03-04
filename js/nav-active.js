// Add .active class to the current nav item
(function(){
  var links = document.querySelectorAll(".nav-link");
  var path = (window.location.pathname || "/").replace(/\/+$/,"/");
  links.forEach(function(a){
    var href = new URL(a.getAttribute("href"), window.location.origin).pathname.replace(/\/+$/,"/");
    if(path === href){
      a.classList.add("active");
    }
  });
})();
