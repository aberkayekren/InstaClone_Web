const posts = document.getElementById("posts");
    const postsLink = document.getElementById("postsLink");
    const saves = document.getElementById("saves");
    const savesLink = document.getElementById("savesLink");
    const tagged = document.getElementById("tagged");
    const taggedLink = document.getElementById("taggedLink");

    postsLink.style.fontWeight = "700";
    postsLink.onclick = function(){
      posts.style.visibility = "visible";
      posts.style.opacity = "1";
      postsLink.style.fontWeight = "700";
      taggedLink.style.fontWeight = "300";
      savesLink.style.fontWeight = "300";
      saves.style.visibility = "hidden";
      saves.style.opacity = "0";
      tagged.style.visibility = "hidden";
      tagged.style.opacity = "0";
    }
    savesLink.onclick = function(){
      posts.style.visibility = "hidden";
      posts.style.opacity = "0";
      saves.style.visibility = "visible";
      saves.style.opacity = "1";
      savesLink.style.fontWeight = "700";
      postsLink.style.fontWeight = "300";
      taggedLink.style.fontWeight = "300";
      tagged.style.visibility = "hidden";
      tagged.style.opacity = "0";
    }
    taggedLink.onclick = function(){
      posts.style.visibility = "hidden";
      posts.style.opacity = "0";
      saves.style.visibility = "hidden";
      saves.style.opacity = "0";
      tagged.style.visibility = "visible";
      tagged.style.opacity = "1";
      postsLink.style.fontWeight = "300";
      savesLink.style.fontWeight = "300";
      taggedLink.style.fontWeight = "700";
    }

    var html = document.getElementById("html");
    var modal = document.getElementById("postModalProfile");
    var btn = document.getElementById("openModelProfile");
    var span = document.getElementById("modalKptProfile");

    btn.onclick = function(){
      modal.style.visibility = "visible";
      modal.style.opacity = "1";
      html.style.overflowY = "hidden"
    }

    span.onclick = function(){
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
      html.style.overflowY = "auto"
    }

    window.onclick = function(event) {
      if (event.target == modal ){
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        html.style.overflowY = "auto";
      }
    }