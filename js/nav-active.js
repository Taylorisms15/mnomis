// Active nav highlighting (robust for trailing slashes + index.html)
(function(){
  function normalize(p){
    if(!p) return "/";
    p = p.split("?")[0].split("#")[0];
    p = p.replace(/\/index\.html$/i, "/");
    if(p[0] !== "/") p = "/" + p;
    if(!p.endsWith("/")){
      if(!/\.[a-z0-9]+$/i.test(p)) p = p + "/";
    }
    return p;
  }

  var path = normalize(window.location.pathname || "/");

  document.querySelectorAll(".nav-link").forEach(function(a){
    var raw = a.getAttribute("href") || "";
    var href = normalize(new URL(raw, window.location.origin).pathname);
    if(path === href){
      a.classList.add("active");
    }
  });
})();
